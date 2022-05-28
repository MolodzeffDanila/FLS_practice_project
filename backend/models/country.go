package models

import (
	"backend/db"
	"fmt"
)

type Country struct {
	CodeNumeric  string `json:"code_numeric" db:"code_numeric"`
	CodeAlpha2   string `json:"code_alpha_2" db:"code_alpha_2"`
	CodeAlpha3   string `json:"code_alpha_3" db:"code_alpha_3"`
	Name         string `json:"name" db:"name"`
	NameOfficial string `json:"name_official" db:"name_official"`
}

func (c *Country) GetAll() ([]Country, error) {
	database := db.GetDB()
	rows, err := database.Queryx("SELECT * FROM country;")
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
