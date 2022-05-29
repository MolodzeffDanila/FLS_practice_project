package main

import (
	"backend/db"
	_ "backend/docs"
	"backend/routers"
	"github.com/gin-gonic/gin"
)

// @title World Bank GDP API
// @version 1.0
// @description World Bank GPD API
// @termsOfService http://swagger.io/terms/

// @contact.name muratom
// @contact.email muratom73@gmail.com

// @BasePath /api/v1
func main() {
	db.Init()
	router := routers.CreateRouters()
	router.Use(CORSMiddleware())
	router.Run(":8080")
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
