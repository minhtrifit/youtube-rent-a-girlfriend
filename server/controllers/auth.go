package controllers

import (
	"api-server/models"

	"github.com/gin-gonic/gin"
)

var accessToken = "oBPfKg2HUKL!62HP4lqOX1Tz7hH05QzSBkdhAd9aIT83R6ED76kPFF61Mz3rsb=b5EkzlGTTUdMGrkUBMCfrCI7343z?fvbg7e2BOJUlc16cXvzJNENBl/p-TRBiRdogjfpukjAiAohi0ekPOvn5f-5O9ZBtcymwXgMLyDi3KBzeB/K1?KG?Gg2IwCL6xmS6DDn/kAZGkW/JCRG7sYPGD04?0!OS/8/zvbeSx5sHNePb5T478SG!VZqaNpPB02l0"

func Login(ctx *gin.Context) {
	// Load database
	models.ConnectDatabase();

	user := models.Account{};
	
	// Call BindJSON to bind the received JSON to Booking Struct.
    if err := ctx.BindJSON(&user); err != nil {
        return;
    }

	if (user.Username == "" || user.Password == "") {
		ctx.JSON(400, gin.H{
			"message": "Bad request",
		})
		
		return;		
	}

	if(user.Username == "kazuya123" && user.Password == "kazuya123") {
		ctx.JSON(200, gin.H{
			"message": "Login successfully",
			"accessToken": accessToken,
		})
		return;
	}

	ctx.JSON(401, gin.H{
		"message": "Wrong username or password",
	})
}

func VerifyToken(ctx *gin.Context) {
	// Load database
	models.ConnectDatabase();

	user := models.Account{};
	
	// Call BindJSON to bind the received JSON to Booking Struct.
    if err := ctx.BindJSON(&user); err != nil {
        return;
    }

	if (user.AccessToken == "") {
		ctx.JSON(400, gin.H{
			"message": "Bad request",
		})
		
		return;		
	}

	if(user.AccessToken == accessToken) {
		ctx.JSON(200, gin.H{
			"message": "Token valid",
			"accessToken": accessToken,
		})
		return;
	}

	ctx.JSON(401, gin.H{
		"message": "Token invalid",
	})
}