package models

type Country struct {
	codeNumeric  string `json:"code_numeric"`
	codeAlpha2   string `json:"code_alpha_2"`
	codeAlpha3   string `json:"code_alpha_3"`
	name         string `json:"name"`
	nameOfficial string `json:"name_official"`
}
