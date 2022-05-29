package controllers

import (
	"github.com/gin-gonic/gin"
)

// GetGDPConstant2015US godoc
// @Summary Retrieves data from table `GDP (constant 2015 US$)`
// @Produce json
// @Param   country-code-alpha-3	query	string	false  "search by countries"
// @Success 200 {array} models.CountryStatistic "OK"
// @Failure	500 					    		  "Fail"
// @Router /gdp-constant-2015-us [get]
func GetGDPConstant2015US(c *gin.Context) {
	getGDP("gdp_constant_2015_us")(c)
}
