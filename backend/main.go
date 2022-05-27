package main

import (
	_ "backend/docs"
	"backend/routers"
)

// @title World Bank GPD API
// @version 1.0
// @description World Bank GPD API
// @termsOfService http://swagger.io/terms/

// @contact.name muratom
// @contact.email muratom73@gmail.com

// @BasePath /v1
func main() {
	router := routers.CreateRouters()
	router.Run(":8080")
}
