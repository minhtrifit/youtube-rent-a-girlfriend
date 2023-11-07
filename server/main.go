package main

import (
	"api-server/controllers"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// https://askgolang.com/how-to-read-a-json-file-in-golang/

func main() {
	router := gin.Default();
	
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE"},
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
		  return origin == "https://github.com"
		},
		MaxAge: 12 * time.Hour,
	}))

	router.GET("/", controllers.HandleRunServer);

	router.POST("/login", func(ctx *gin.Context) {
		controllers.Login(ctx);
	});

	router.POST("/verify", func(ctx *gin.Context) {
		controllers.VerifyToken(ctx);
	});

	router.GET("/girlfriends", func(ctx *gin.Context) {
		controllers.GetAllGirlFriends(ctx);
	});

	router.GET("/booking", func(ctx *gin.Context) {
		controllers.GetBookingByCustomerId(ctx);
	});

	router.POST("/addbooking", func(ctx *gin.Context) {
		controllers.AddNewBooking(ctx);
	});

	router.Run("localhost:5000");
}