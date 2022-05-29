package controllers

import (
	"github.com/gin-gonic/gin"
)

// GetGDPCurrentLCU godoc
// @Summary Retrieves data from table `GDP (current LCU)`
// @Produce json
// @Param   country-code-alpha-3	query	string	false  "search by countries"
// @Success 200 {array} models.CountryStatistic "OK"
// @Failure	500 					    		  "Fail"
// @Router /gdp-current-lcu [get]
func GetGDPCurrentLCU(c *gin.Context) {
	getGDP("gdp_current_lcu")(c)
}
