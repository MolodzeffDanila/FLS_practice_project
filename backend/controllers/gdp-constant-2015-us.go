package controllers

import (
	"backend/models"
	"github.com/gin-gonic/gin"
	"net/http"
	"strings"
)

// GetGDPConstant2015US godoc
// @Summary Retrieves data from table `GDP (constant 2015 US$)`
// @Produce json
// @Param   country-code-alpha-3	query	string	false  "search by countries"
// @Success 200 {array} models.CountryStatistic "OK"
// @Failure	500 					    		  "Fail"
// @Router /gdp-constant-2015-us [get]
func GetGDPConstant2015US(c *gin.Context) {
	cs := new(models.CountryStatistic)
	countriesString := c.Query("country-code-alpha-3")
	if countriesString != "" {
		countries := strings.Split(countriesString, ",")
		countryStatistics, err := cs.GetByCountry("gdp_constant_2015_us", countries)
		if err != nil {
			c.Error(err)
			return
		}

		c.IndentedJSON(http.StatusOK, countryStatistics)
	} else {
		countryStatistics, err := cs.GetAll("gdp_constant_2015_us")
		if err != nil {
			c.Error(err)
			return
		}

		c.IndentedJSON(http.StatusOK, countryStatistics)
	}
}
