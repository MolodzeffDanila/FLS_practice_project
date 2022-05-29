package routers

import (
	"backend/controllers"
	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

func CreateRouters() *gin.Engine {
	Router := gin.Default()

	Router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	v1 := Router.Group("/api/v1/")
	{
		v1.GET("country", controllers.GetCountries)
		v1.GET("gdp-constant-2015-us", controllers.GetGDP("gdp_constant_2015_us"))
		v1.GET("gdp-constant-lcu", controllers.GetGDP("gdp_constant_lcu"))
		v1.GET("gdp-current-lcu", controllers.GetGDP("gdp_current_lcu"))
		v1.GET("gdp-current-us", controllers.GetGDP("gdp_current_us"))
	}

	return Router
}
