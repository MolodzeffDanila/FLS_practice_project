package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

// GetCountries godoc
// @Summary Retrieves all countries
// @Produce json
// @Success 200 {object} models.Country "OK"
// @Failure	500 					    "Fail"
// @Router /country [get]
func GetCountries(c *gin.Context) {
	c.String(http.StatusOK, "%v", "Good job!")
}

// GetIndicatorDataByCountry godoc
// @Summary Retrieves indicator by country
// @Produce json
// @Success 200 {object} models.Country "OK"
// @Failure	500 					    "Fail"
// @Router /country [get]
func GetIndicatorDataByCountry(c *gin.Context) {
	c.String(http.StatusOK, "%v", "Good job!")
}

func GetIndicatorDataByCountryDate(c *gin.Context) {
	c.String(http.StatusOK, "%v", "Good job!")

	//countryCodesParam := c.Param("country-codes")
	//// countryCodesString = strings.Trim(countryCodesString, " ;,.")
	//if len(countryCodesParam) == 0 {
	//	c.String(http.StatusBadRequest, "%v", "No country codes")
	//	c.Abort()
	//	return
	//}
	//countryCodes := strings.Split(countryCodesParam, ";")
	//
	//indicatorParam := c.Param("indicators")
	//if len(indicatorParam) == 0 {
	//	c.String(http.StatusBadRequest, "%v", "No indicators")
	//	c.Abort()
	//	return
	//}
	//indicators := strings.Split(indicatorParam, ";")
	//
	//dateParam := c.Param("dates")
	//fmt.Println(dateParam)
	//
	//c.String(http.StatusOK, "%v %v", countryCodes, indicators)
}
