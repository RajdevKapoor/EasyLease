package main

import (
	"github.com/RajdevKapoor/Stay.in/database"
	"github.com/RajdevKapoor/Stay.in/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	database.Connect()

	app := fiber.New()
	app.Use(cors.New())
	routes.Setup(app)

	app.Listen(":8000")
}
