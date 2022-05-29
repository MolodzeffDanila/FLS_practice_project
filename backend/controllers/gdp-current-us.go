package controllers

import (
	"backend/models"
	"github.com/gin-gonic/gin"
	"net/http"
	"strings"
)

// GetGDPCurrentUS godoc
// @Summary Retrieves data from table `GDP (current US$)`
// @Produce json
// @Param   country-code-alpha-3	query	string	false  "search by countries"
// @Success 200 {array} models.CountryStatistic "OK"
// @Failure	500 					    		  "Fail"
// @Router /gdp-current-us [get]
func GetGDPCurrentUS(c *gin.Context) {
	cs := new(models.CountryStatistic)
	countriesString := c.Query("country-code-alpha-3")
	if countriesString != "" {
		countries := strings.Split(countriesString, ",")
		countryStatistics, err := cs.GetByCountry("gdp_current_us", countries)
		if err != nil {
			c.Error(err)
			return
		}

		c.IndentedJSON(http.StatusOK, countryStatistics)
	} else {
		countryStatistics, err := cs.GetAll("gdp_current_us")
		if err != nil {
			c.Error(err)
			return
		}

		c.IndentedJSON(http.StatusOK, countryStatistics)
	}
}
