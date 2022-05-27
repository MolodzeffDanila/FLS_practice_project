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
	Router.GET("/v1/country", controllers.GetCountries)
	Router.GET("/v1/country/:country-codes/indicator/:indicators", controllers.GetIndicatorDataByCountry)
	Router.GET("/v1/country/:country-codes/indicator/:indicators/date/:dates", controllers.GetIndicatorDataByCountryDate)

	return Router
}
