package db

import (
	"fmt"
	"github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
	"log"
)

var db *sqlx.DB

func Init() {
	// Capture connection properties
	cfg := mysql.Config{
		User:   "root",
		Passwd: "abracadabra",
		Net:    "tcp",
		Addr:   "localhost:3306",
		DBName: "gdp",
	}
	// Get a database handle.
	var err error
	db, err = sqlx.Open("mysql", cfg.FormatDSN())
	if err != nil {
		log.Fatal(err)
	}

	pingErr := db.Ping()
	if pingErr != nil {
		log.Fatal(pingErr)
	}

	fmt.Println("Connected!")
}

func GetDB() *sqlx.DB {
	return db
}
