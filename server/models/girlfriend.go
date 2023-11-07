package models

type Account struct {
	Id          int    `json:"id"`
	Username    string `json:"username"`
	Password    string `json:"password"`
	AccessToken string `json:"accessToken"`
}

type GirlFriend struct {
	Id          int     `json:"id"`
	Name        string  `json:"name"`
	Age         int     `json:"age"`
	Rate        float64 `json:"rate"`
	Description string  `json:"description"`
}

type Booking struct {
	Id             int     `json:"id"`
	GirlFriendId   int     `json:"girlFriendId"`
	GirlFriendName string  `json:"girlFriendName"`
	CustomerId     int     `json:"customerId"`
	Dating         string  `json:"dating"`
	Time           int     `json:"time"`
	Price          float64 `json:"price"`
	Messages       string  `json:"messages"`
}

type Database struct {
	Accounts []Account    `json:"accounts"`
	List     []GirlFriend `json:"list"`
	Booking  []Booking    `json:"booking"`
}