package controllers

import (
	"github.com/gin-gonic/gin"
)

// GetGDPCurrentUS godoc
// @Summary Retrieves data from table `GDP (current US$)`
// @Produce json
// @Param   country-code-alpha-3	query	[]string	false  "search by countries" collectionFormat(csv) example(swe)
// @Success 200 {array} models.CountryStatistic "OK"
// @Failure	500 					    		  "Fail"
// @Router /gdp-current-us [get]
func GetGDPCurrentUS(c *gin.Context) {
	getGDP("gdp_current_us")(c)
}
