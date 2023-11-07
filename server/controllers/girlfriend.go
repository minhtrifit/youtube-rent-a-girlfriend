package controllers

import (
	"api-server/models"
	"encoding/json"
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
)

var Accounts []models.Account
var List []models.GirlFriend
var Booking []models.Booking
var Loaded = false

func LoadDatabase() models.Database {
	db := models.ConnectDatabase();

	// Load Accounts
	for _, account := range db.Accounts {
		var newAccount models.Account;

		newAccount.Id = account.Id;
		newAccount.Username = account.Username;
		newAccount.Password = account.Password;

		Accounts = append(Accounts, newAccount);
	}

	// Load List
	for _, girlfriend := range db.List {
		var newGirlFriend models.GirlFriend;

		newGirlFriend.Id = girlfriend.Id;
		newGirlFriend.Name = girlfriend.Name;
		newGirlFriend.Age = girlfriend.Age;
		newGirlFriend.Rate = girlfriend.Rate;
		newGirlFriend.Description = girlfriend.Description;

		List = append(List, newGirlFriend);
	}

	// Load booking
	for _, booking := range db.Booking {
		var newBooking models.Booking;

		newBooking.Id = booking.Id;
		newBooking.GirlFriendId = booking.GirlFriendId;
		newBooking.CustomerId = booking.CustomerId;
		newBooking.Dating = booking.Dating;
		newBooking.Time = booking.Time;
		newBooking.Price = booking.Price;
		newBooking.Messages = booking.Messages;

		Booking = append(Booking, newBooking);
	}

	Loaded = true;

	return db;
}

func GetAllGirlFriends(ctx *gin.Context) {	
	// Load data from database
	if Loaded != true {
		LoadDatabase();		
	}

	ctx.JSON(200, gin.H{
		"message": "Get data successfully",
		"data": List,
	})
}

func GetAllBookings(ctx *gin.Context) {
	// Load data from database
	if Loaded != true {
		LoadDatabase();		
	}

	ctx.JSON(200, gin.H{
		"message": "Get data successfully",
		"data": Booking,
	})
}

func GetBookingByCustomerId(ctx *gin.Context) {
	// Load data from database
	if Loaded != true {
		LoadDatabase();		
	}

	var targetBooking  []models.Booking;

	user := models.Account{};

	// Call BindJSON to bind the received JSON to Booking Struct.
    if err := ctx.BindJSON(&user); err != nil {
        return;
    }

	for _, v := range Booking {
		if(v.CustomerId == user.Id) {
			fmt.Println(v.Price);
			targetBooking = append(targetBooking, v);
		}
	}

	// Not found booking
	if(len(targetBooking) == 0) {
		ctx.JSON(404, gin.H{
			"data": user.Id,
			"message": "Booking not found",
		})	

		return;
	}

	ctx.JSON(200, gin.H{
		"message": "Get data successfully",
		"data": targetBooking,
	})
}

func AddNewBooking(ctx *gin.Context) {
	// {
	// 	"girlFriendId": 1,
	// 	"customerId": 100,
	// 	"dating": "5/11/2023",
	// 	"time": 2,
	// 	"price": 608.84,
	// 	"messages": "Hope to see you :>"
	//   }

	var newBookingId = 0;

	// Load data from database
	if Loaded != true {
		LoadDatabase();		
	}

	// Create new booking id
	if len(Booking) == 0 {
		newBookingId = 1;
	}else {
		var lastBooking = Booking[len(Booking)-1];
		newBookingId = lastBooking.Id + 1;
	}
	
	newBooking := models.Booking{};
	userBooking := models.Booking{};

    // Call BindJSON to bind the received JSON to Booking Struct.
    if err := ctx.BindJSON(&newBooking); err != nil {
        return;
    }

	userBooking.Id = newBookingId;
	userBooking.GirlFriendId = newBooking.GirlFriendId;
	userBooking.CustomerId = newBooking.CustomerId;
	userBooking.Dating = newBooking.Dating;
	userBooking.Time = newBooking.Time;
	userBooking.Price = newBooking.Price;
	userBooking.Messages = newBooking.Messages;

	if (userBooking.GirlFriendId == 0 || userBooking.CustomerId == 0 ||userBooking.Dating == "" ||
			userBooking.Time == 0 || userBooking.Price == 0) {
		ctx.JSON(400, gin.H{
			"message": "Bad request",
		})
		
		return;		
	}

	if userBooking != (models.Booking{}) {		
		// Add to Booking list
		Booking = append(Booking, userBooking);
	}

	// Create data model
	data := models.Database {
		Accounts: Accounts,
		List: List,
		Booking: Booking,
	}
 
	// Convert struct to json
	content, err := json.Marshal(data);

	// Convert failed
	if err != nil {
		panic(err);
	}

	// Write to database
	err = os.WriteFile("data.json", content, 0644);

	// Write file failed
	if err != nil {
		panic(err);
	}

	ctx.JSON(201, gin.H{
		"message": "Add booking successfully",
		"booking_info": userBooking,
	})
}