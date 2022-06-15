package routers

import (
	"backend/controllers"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

func CreateRouters() *gin.Engine {
	router := gin.Default()

	router.Use(cors.Default())
	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	v1 := router.Group("/api/v1/")
	{
		v1.GET("country", controllers.GetCountries)
		v1.GET("gdp-constant-2015-us", controllers.GetGDPConstant2015US)
		v1.GET("gdp-constant-lcu", controllers.GetGDPConstantLCU)
		v1.GET("gdp-current-lcu", controllers.GetGDPCurrentLCU)
		v1.GET("gdp-current-us", controllers.GetGDPCurrentUS)
	}

	return router
}
