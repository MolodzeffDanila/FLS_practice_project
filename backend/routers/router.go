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
		v1.GET("gdp-constant-2015-us", controllers.GetGdpConstant2015Us)
	}

	return Router
}
