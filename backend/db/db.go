package db

import (
	"fmt"
	"github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
	"log"
	"os"
)

var db *sqlx.DB

func Init() {
	// Choosing a bd host based on env var
	var host string = os.Getenv("SQL_HOST")
	if len(host) == 0 {
		host = "localhost"
	}
	host = host + ":3306"

	// Capture connection properties
	cfg := mysql.Config{
		User:   "root",
		Passwd: "abracadabra",
		Net:    "tcp",
		Addr:   host,
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
