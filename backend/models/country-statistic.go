package models

import (
	"backend/db"
	"fmt"
	"github.com/jmoiron/sqlx"
)

type CountryStatistic struct {
	CountryName *string `json:"country_name" db:"country_name" example:"Sweden"`
	CountryCode *string `json:"country_code" db:"country_code" example:"SWE"`
	YR2021      *string `json:"yr_2021" db:"2021_YR2021" example:"876.543"`
	YR2020      *string `json:"yr_2020" db:"2020_YR2020" example:"876.543"`
	YR2019      *string `json:"yr_2019" db:"2019_YR2019" example:"876.543"`
	YR2018      *string `json:"yr_2018" db:"2018_YR2018" example:"876.543"`
	YR2017      *string `json:"yr_2017" db:"2017_YR2017" example:"876.543"`
	YR2016      *string `json:"yr_2016" db:"2016_YR2016" example:"876.543"`
	YR2015      *string `json:"yr_2015" db:"2015_YR2015" example:"876.543"`
	YR2014      *string `json:"yr_2014" db:"2014_YR2014" example:"876.543"`
	YR2013      *string `json:"yr_2013" db:"2013_YR2013" example:"876.543"`
	YR2012      *string `json:"yr_2012" db:"2012_YR2012" example:"876.543"`
	YR2011      *string `json:"yr_2011" db:"2011_YR2011" example:"876.543"`
	YR2010      *string `json:"yr_2010" db:"2010_YR2010" example:"876.543"`
	YR2009      *string `json:"yr_2009" db:"2009_YR2009" example:"876.543"`
	YR2008      *string `json:"yr_2008" db:"2008_YR2008" example:"876.543"`
	YR2007      *string `json:"yr_2007" db:"2007_YR2007" example:"876.543"`
	YR2006      *string `json:"yr_2006" db:"2006_YR2006" example:"876.543"`
	YR2005      *string `json:"yr_2005" db:"2005_YR2005" example:"876.543"`
	YR2004      *string `json:"yr_2004" db:"2004_YR2004" example:"876.543"`
	YR2003      *string `json:"yr_2003" db:"2003_YR2003" example:"876.543"`
	YR2002      *string `json:"yr_2002" db:"2002_YR2002" example:"876.543"`
	YR2001      *string `json:"yr_2001" db:"2001_YR2001" example:"876.543"`
	YR2000      *string `json:"yr_2000" db:"2000_YR2000" example:"876.543"`
	YR1999      *string `json:"yr_1999" db:"1999_YR1999" example:"876.543"`
	YR1998      *string `json:"yr_1998" db:"1998_YR1998" example:"876.543"`
	YR1997      *string `json:"yr_1997" db:"1997_YR1997" example:"876.543"`
	YR1996      *string `json:"yr_1996" db:"1996_YR1996" example:"876.543"`
	YR1995      *string `json:"yr_1995" db:"1995_YR1995" example:"876.543"`
	YR1994      *string `json:"yr_1994" db:"1994_YR1994" example:"876.543"`
	YR1993      *string `json:"yr_1993" db:"1993_YR1993" example:"876.543"`
	YR1992      *string `json:"yr_1992" db:"1992_YR1992" example:"876.543"`
	YR1991      *string `json:"yr_1991" db:"1991_YR1991" example:"876.543"`
	YR1990      *string `json:"yr_1990" db:"1990_YR1990" example:"876.543"`
	YR1989      *string `json:"yr_1989" db:"1989_YR1989" example:"876.543"`
	YR1988      *string `json:"yr_1988" db:"1988_YR1988" example:"876.543"`
	YR1987      *string `json:"yr_1987" db:"1987_YR1987" example:"876.543"`
	YR1986      *string `json:"yr_1986" db:"1986_YR1986" example:"876.543"`
	YR1985      *string `json:"yr_1985" db:"1985_YR1985" example:"876.543"`
	YR1984      *string `json:"yr_1984" db:"1984_YR1984" example:"876.543"`
	YR1983      *string `json:"yr_1983" db:"1983_YR1983" example:"876.543"`
	YR1982      *string `json:"yr_1982" db:"1982_YR1982" example:"876.543"`
	YR1981      *string `json:"yr_1981" db:"1981_YR1981" example:"876.543"`
	YR1980      *string `json:"yr_1980" db:"1980_YR1980" example:"876.543"`
	YR1979      *string `json:"yr_1979" db:"1979_YR1979" example:"876.543"`
	YR1978      *string `json:"yr_1978" db:"1978_YR1978" example:"876.543"`
	YR1977      *string `json:"yr_1977" db:"1977_YR1977" example:"876.543"`
	YR1976      *string `json:"yr_1976" db:"1976_YR1976" example:"876.543"`
	YR1975      *string `json:"yr_1975" db:"1975_YR1975" example:"876.543"`
	YR1974      *string `json:"yr_1974" db:"1974_YR1974" example:"876.543"`
	YR1973      *string `json:"yr_1973" db:"1973_YR1973" example:"876.543"`
	YR1972      *string `json:"yr_1972" db:"1972_YR1972" example:"876.543"`
	YR1971      *string `json:"yr_1971" db:"1971_YR1971" example:"876.543"`
	YR1970      *string `json:"yr_1970" db:"1970_YR1970" example:"876.543"`
	YR1969      *string `json:"yr_1969" db:"1969_YR1969" example:"876.543"`
	YR1968      *string `json:"yr_1968" db:"1968_YR1968" example:"876.543"`
	YR1967      *string `json:"yr_1967" db:"1967_YR1967" example:"876.543"`
	YR1966      *string `json:"yr_1966" db:"1966_YR1966" example:"876.543"`
	YR1965      *string `json:"yr_1965" db:"1965_YR1965" example:"876.543"`
	YR1964      *string `json:"yr_1964" db:"1964_YR1964" example:"876.543"`
	YR1963      *string `json:"yr_1963" db:"1963_YR1963" example:"876.543"`
	YR1962      *string `json:"yr_1962" db:"1962_YR1962" example:"876.543"`
	YR1961      *string `json:"yr_1961" db:"1961_YR1961" example:"876.543"`
	YR1960      *string `json:"yr_1960" db:"1960_YR1960" example:"876.543"`
}

func (cs *CountryStatistic) GetAll(tableName string) ([]CountryStatistic, error) {
	database := db.GetDB()
	query := fmt.Sprintf("SELECT * FROM %s;", tableName)
	rows, err := database.Queryx(query)
	if err != nil {
		return nil, fmt.Errorf("GetAll: %v", err)
	}
	defer rows.Close()

	var countryStatistics []CountryStatistic
	for rows.Next() {
		var countryStat CountryStatistic
		if err = rows.StructScan(&countryStat); err != nil {
			return nil, fmt.Errorf("GetAll: %v", err)
		}
		countryStatistics = append(countryStatistics, countryStat)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("GetAll: %v", err)
	}

	return countryStatistics, nil
}

func (cs *CountryStatistic) GetByCountry(tableName string, countryCodeAlpha3 []string) ([]CountryStatistic, error) {
	database := db.GetDB()
	query := fmt.Sprintf("SELECT * FROM %s WHERE country_code IN (?);", tableName)
	query, args, err := sqlx.In(query, countryCodeAlpha3)
	if err != nil {
		return nil, fmt.Errorf("GetByCountry: %v", err)
	}
	rows, err := database.Queryx(query, args...)
	if err != nil {
		return nil, fmt.Errorf("GetByCountry: %v", err)
	}
	defer rows.Close()

	var countryStatistics []CountryStatistic
	for rows.Next() {
		var countryStat CountryStatistic
		if err = rows.StructScan(&countryStat); err != nil {
			return nil, fmt.Errorf("GetByCountry: %v", err)
		}
		countryStatistics = append(countryStatistics, countryStat)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("GetByCountry: %v", err)
	}

	return countryStatistics, nil
}
