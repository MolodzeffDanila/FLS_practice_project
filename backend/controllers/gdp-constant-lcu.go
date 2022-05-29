package controllers

import (
	"github.com/gin-gonic/gin"
)

// GetGDPConstantLCU godoc
// @Summary Retrieves data from table `GDP (constant LCU)`
// @Produce json
// @Param   country-code-alpha-3	query	string	false  "search by countries"
// @Success 200 {array} models.CountryStatistic "OK"
// @Failure	500 					    		  "Fail"
// @Router /gdp-constant-lcu [get]
func GetGDPConstantLCU(c *gin.Context) {
	getGDP("gdp_constant_lcu")(c)
}
