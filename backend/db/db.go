package db

import (
	"database/sql"
	"fmt"
	"github.com/go-sql-driver/mysql"
	"log"
)

var db *sql.DB

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
	db, err = sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		log.Fatal(err)
	}

	pingErr := db.Ping()
	if pingErr != nil {
		log.Fatal(pingErr)
	}

	fmt.Println("Connected!")
}

func GetDB() *sql.DB {
	return db
}
