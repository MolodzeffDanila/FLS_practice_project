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
        "/gdp-constant-2015-us": {
            "get": {
                "produces": [
                    "application/json"
                ],
                "summary": "Retrieves data from table ` + "`" + `GDP (constant 2015 US$)` + "`" + `",
                "parameters": [
                    {
                        "type": "string",
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
                "summary": "Retrieves data from table ` + "`" + `GDP (constant 2015 US$)` + "`" + `",
                "parameters": [
                    {
                        "type": "string",
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
                        "type": "string",
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
        "models.CountryStatistic": {
            "type": "object",
            "properties": {
                "country_code": {
                    "type": "string"
                },
                "country_name": {
                    "type": "string"
                },
                "id": {
                    "type": "string"
                },
                "yr_1960": {
                    "type": "string"
                },
                "yr_1961": {
                    "type": "string"
                },
                "yr_1962": {
                    "type": "string"
                },
                "yr_1963": {
                    "type": "string"
                },
                "yr_1964": {
                    "type": "string"
                },
                "yr_1965": {
                    "type": "string"
                },
                "yr_1966": {
                    "type": "string"
                },
                "yr_1967": {
                    "type": "string"
                },
                "yr_1968": {
                    "type": "string"
                },
                "yr_1969": {
                    "type": "string"
                },
                "yr_1970": {
                    "type": "string"
                },
                "yr_1971": {
                    "type": "string"
                },
                "yr_1972": {
                    "type": "string"
                },
                "yr_1973": {
                    "type": "string"
                },
                "yr_1974": {
                    "type": "string"
                },
                "yr_1975": {
                    "type": "string"
                },
                "yr_1976": {
                    "type": "string"
                },
                "yr_1977": {
                    "type": "string"
                },
                "yr_1978": {
                    "type": "string"
                },
                "yr_1979": {
                    "type": "string"
                },
                "yr_1980": {
                    "type": "string"
                },
                "yr_1981": {
                    "type": "string"
                },
                "yr_1982": {
                    "type": "string"
                },
                "yr_1983": {
                    "type": "string"
                },
                "yr_1984": {
                    "type": "string"
                },
                "yr_1985": {
                    "type": "string"
                },
                "yr_1986": {
                    "type": "string"
                },
                "yr_1987": {
                    "type": "string"
                },
                "yr_1988": {
                    "type": "string"
                },
                "yr_1989": {
                    "type": "string"
                },
                "yr_1990": {
                    "type": "string"
                },
                "yr_1991": {
                    "type": "string"
                },
                "yr_1992": {
                    "type": "string"
                },
                "yr_1993": {
                    "type": "string"
                },
                "yr_1994": {
                    "type": "string"
                },
                "yr_1995": {
                    "type": "string"
                },
                "yr_1996": {
                    "type": "string"
                },
                "yr_1997": {
                    "type": "string"
                },
                "yr_1998": {
                    "type": "string"
                },
                "yr_1999": {
                    "type": "string"
                },
                "yr_2000": {
                    "type": "string"
                },
                "yr_2001": {
                    "type": "string"
                },
                "yr_2002": {
                    "type": "string"
                },
                "yr_2003": {
                    "type": "string"
                },
                "yr_2004": {
                    "type": "string"
                },
                "yr_2005": {
                    "type": "string"
                },
                "yr_2006": {
                    "type": "string"
                },
                "yr_2007": {
                    "type": "string"
                },
                "yr_2008": {
                    "type": "string"
                },
                "yr_2009": {
                    "type": "string"
                },
                "yr_2010": {
                    "type": "string"
                },
                "yr_2011": {
                    "type": "string"
                },
                "yr_2012": {
                    "type": "string"
                },
                "yr_2013": {
                    "type": "string"
                },
                "yr_2014": {
                    "type": "string"
                },
                "yr_2015": {
                    "type": "string"
                },
                "yr_2016": {
                    "type": "string"
                },
                "yr_2017": {
                    "type": "string"
                },
                "yr_2018": {
                    "type": "string"
                },
                "yr_2019": {
                    "type": "string"
                },
                "yr_2020": {
                    "type": "string"
                },
                "yr_2021": {
                    "type": "string"
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
	Title:            "World Bank GPD API",
	Description:      "World Bank GPD API",
	InfoInstanceName: "swagger",
	SwaggerTemplate:  docTemplate,
}

func init() {
	swag.Register(SwaggerInfo.InstanceName(), SwaggerInfo)
}
