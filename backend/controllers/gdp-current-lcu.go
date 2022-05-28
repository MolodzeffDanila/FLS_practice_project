package controllers

import (
	"backend/models"
	"github.com/gin-gonic/gin"
	"net/http"
	"strings"
)

// GetGDPCurrentLCU godoc
// @Summary Retrieves data from table `GDP (current LCU)`
// @Produce json
// @Param   country-code-alpha-3	query	string	false  "search by countries"
// @Success 200 {array} models.CountryStatistic "OK"
// @Failure	500 					    		  "Fail"
// @Router /gdp-current-lcu [get]
func GetGDPCurrentLCU(c *gin.Context) {
	cs := new(models.CountryStatistic)
	countriesString := c.Query("country-code-alpha-3")
	if countriesString != "" {
		countries := strings.Split(countriesString, ",")
		countryStatistics, err := cs.GetByCountry("gdp_current_lcu", countries)
		if err != nil {
			c.Error(err)
			return
		}

		c.IndentedJSON(http.StatusOK, countryStatistics)
	} else {
		countryStatistics, err := cs.GetAll("gdp_current_lcu")
		if err != nil {
			c.Error(err)
			return
		}

		c.IndentedJSON(http.StatusOK, countryStatistics)
	}
}
