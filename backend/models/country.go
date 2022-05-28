package models

type Country struct {
	CodeNumeric  string `json:"code_numeric"`
	CodeAlpha2   string `json:"code_alpha_2"`
	CodeAlpha3   string `json:"code_alpha_3"`
	Name         string `json:"name"`
	NameOfficial string `json:"name_official"`
}
