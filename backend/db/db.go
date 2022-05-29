package db

import (
	"backend/config"
	"fmt"
	"github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
	"log"
)

var db *sqlx.DB

func Init() {
	// Choosing the DB host based on environment variables
	addr := fmt.Sprintf("%s:%s",
		config.Getenv("SQL_HOST", "localhost"),
		config.Getenv("SQL_PORT", "3306"))

	// Capture connection properties
	cfg := mysql.Config{
		User:   config.Getenv("SQL_USER", "root"),
		Passwd: config.Getenv("SQL_PASSWORD", "abracadabra"),
		Net:    "tcp",
		Addr:   addr,
		DBName: config.Getenv("SQL_DATABASE", "gdp"),
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
