// Package docs GENERATED BY SWAG; DO NOT EDIT
// This file was generated by swaggo/swag
package docs

import "github.com/swaggo/swag"

const docTemplate = `{
    "schemes": {{ marshal .Schemes }},
    "swagger": "2.0",
    "info": {
        "description": "{{escape .Description}}",
        "title": "{{.Title}}",
        "termsOfService": "http://swagger.io/terms/",
        "contact": {
            "name": "muratom",
            "email": "muratom73@gmail.com"
        },
        "version": "{{.Version}}"
    },
    "host": "{{.Host}}",
    "basePath": "{{.BasePath}}",
    "paths": {
        "/country": {
            "get": {
                "produces": [
                    "application/json"
                ],
                "summary": "Retrieves data from table ` + "`" + `Country` + "`" + `",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/models.Country"
                            }
                        }
                    },
                    "500": {
                        "description": "Fail"
                    }
                }
            }
        },
        "/gdp-constant-2015-us": {
            "get": {
                "produces": [
                    "application/json"
                ],
                "summary": "Retrieves data from table ` + "`" + `GDP (constant 2015 US$)` + "`" + `",
                "parameters": [
                    {
                        "type": "array",
                        "items": {
                            "type": "string"
                        },
                        "collectionFormat": "csv",
                        "example": "swe",
                        "description": "search by countries",
                        "name": "country-code-alpha-3",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/models.CountryStatistic"
                            }
                        }
                    },
                    "500": {
                        "description": "Fail"
                    }
                }
            }
        },
        "/gdp-constant-lcu": {
            "get": {
                "produces": [
                    "application/json"
                ],
                "summary": "Retrieves data from table ` + "`" + `GDP (constant LCU)` + "`" + `",
                "parameters": [
                    {
                        "type": "array",
                        "items": {
                            "type": "string"
                        },
                        "collectionFormat": "csv",
                        "example": "swe",
                        "description": "search by countries",
                        "name": "country-code-alpha-3",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/models.CountryStatistic"
                            }
                        }
                    },
                    "500": {
                        "description": "Fail"
                    }
                }
            }
        },
        "/gdp-current-lcu": {
            "get": {
                "produces": [
                    "application/json"
                ],
                "summary": "Retrieves data from table ` + "`" + `GDP (current LCU)` + "`" + `",
                "parameters": [
                    {
                        "type": "array",
                        "items": {
                            "type": "string"
                        },
                        "collectionFormat": "csv",
                        "example": "swe",
                        "description": "search by countries",
                        "name": "country-code-alpha-3",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/models.CountryStatistic"
                            }
                        }
                    },
                    "500": {
                        "description": "Fail"
                    }
                }
            }
        },
        "/gdp-current-us": {
            "get": {
                "produces": [
                    "application/json"
                ],
                "summary": "Retrieves data from table ` + "`" + `GDP (current US$)` + "`" + `",
                "parameters": [
                    {
                        "type": "array",
                        "items": {
                            "type": "string"
                        },
                        "collectionFormat": "csv",
                        "example": "swe",
                        "description": "search by countries",
                        "name": "country-code-alpha-3",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/models.CountryStatistic"
                            }
                        }
                    },
                    "500": {
                        "description": "Fail"
                    }
                }
            }
        }
    },
    "definitions": {
        "models.Country": {
            "type": "object",
            "properties": {
                "code_alpha_2": {
                    "type": "string",
                    "example": "SE"
                },
                "code_alpha_3": {
                    "type": "string",
                    "example": "SWE"
                },
                "code_numeric": {
                    "type": "string",
                    "example": "752"
                },
                "name": {
                    "type": "string",
                    "example": "Sweden"
                },
                "name_official": {
                    "type": "string",
                    "example": "SWEDEN"
                }
            }
        },
        "models.CountryStatistic": {
            "type": "object",
            "properties": {
                "country_code": {
                    "type": "string",
                    "example": "SWE"
                },
                "country_name": {
                    "type": "string",
                    "example": "Sweden"
                },
                "yr_1960": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1961": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1962": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1963": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1964": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1965": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1966": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1967": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1968": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1969": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1970": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1971": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1972": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1973": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1974": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1975": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1976": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1977": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1978": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1979": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1980": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1981": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1982": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1983": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1984": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1985": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1986": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1987": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1988": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1989": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1990": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1991": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1992": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1993": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1994": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1995": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1996": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1997": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1998": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_1999": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2000": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2001": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2002": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2003": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2004": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2005": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2006": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2007": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2008": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2009": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2010": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2011": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2012": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2013": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2014": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2015": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2016": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2017": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2018": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2019": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2020": {
                    "type": "string",
                    "example": "876.543"
                },
                "yr_2021": {
                    "type": "string",
                    "example": "876.543"
                }
            }
        }
    }
}`

// SwaggerInfo holds exported Swagger Info so clients can modify it
var SwaggerInfo = &swag.Spec{
	Version:          "1.0",
	Host:             "",
	BasePath:         "/api/v1",
	Schemes:          []string{},
	Title:            "World Bank GDP API",
	Description:      "World Bank GPD API",
	InfoInstanceName: "swagger",
	SwaggerTemplate:  docTemplate,
}

func init() {
	swag.Register(SwaggerInfo.InstanceName(), SwaggerInfo)
}
