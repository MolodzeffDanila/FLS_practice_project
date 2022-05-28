package controllers

import (
	"backend/models"
	"github.com/gin-gonic/gin"
	"net/http"
)

// GetCountries godoc
// @Summary Retrieves data from table `Country`
// @Produce json
// @Success 200 {array} models.CountryStatistic "OK"
// @Failure	500 					    		  "Fail"
// @Router /country [get]
func GetCountries(c *gin.Context) {
	country := new(models.Country)

	countries, err := country.GetAll()
	if err != nil {
		c.Error(err)
		return
	}

	c.IndentedJSON(http.StatusOK, countries)
}
