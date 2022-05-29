package controllers

import (
	"backend/models"
	"github.com/gin-gonic/gin"
	"net/http"
	"strings"
)

func getGDP(tableName string) func(c *gin.Context) {
	return func(c *gin.Context) {
		cs := new(models.CountryStatistic)
		countriesString := c.Query("country-code-alpha-3")
		if countriesString != "" {
			countries := strings.Split(countriesString, ",")
			countryStatistics, err := cs.GetByCountry(tableName, countries)
			if err != nil {
				c.Error(err)
				return
			}
			c.IndentedJSON(http.StatusOK, countryStatistics)
		} else {
			countryStatistics, err := cs.GetAll(tableName)
			if err != nil {
				c.Error(err)
				return
			}
			c.IndentedJSON(http.StatusOK, countryStatistics)
		}
	}
}
