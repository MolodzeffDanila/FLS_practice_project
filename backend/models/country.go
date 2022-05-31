package models

import (
	"backend/db"
	"fmt"
)

type Country struct {
	CodeNumeric  string `json:"code_numeric" db:"code_numeric" example:"752"`
	CodeAlpha2   string `json:"code_alpha_2" db:"code_alpha_2" example:"SE"`
	CodeAlpha3   string `json:"code_alpha_3" db:"code_alpha_3" example:"SWE"`
	Name         string `json:"name" db:"name" example:"Sweden"`
	NameOfficial string `json:"name_official" db:"name_official" example:"SWEDEN"`
}

func (c *Country) GetAll() ([]Country, error) {
	database := db.GetDB()
	rows, err := database.Queryx("SELECT * FROM country ORDER BY name;")
	if err != nil {
		return nil, fmt.Errorf("GetAll: %v", err)
	}
	defer rows.Close()

	var countries []Country
	for rows.Next() {
		var country Country
		if err = rows.StructScan(&country); err != nil {
			return nil, fmt.Errorf("GetAll: %v", err)
		}
		countries = append(countries, country)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("GetAll: %v", err)
	}

	return countries, nil
}
