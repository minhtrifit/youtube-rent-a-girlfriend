> # YOUTUBE RENT-A-GIRLFRIEND PROJECT DOCUMENTATION

## Project Material

[Figma Design](https://www.figma.com/file/ENE0YiFIsAwCNnBBrQlkAJ/Rent-A-GirlFriend?type=design&node-id=1-3&mode=design&t=dSqWUqME3w0S3P3o-0)

[Youtube Tutorial](https://github.com/minhtrifit/youtube-rent-a-girlfriend)


## Github Repository Structure

`client-template`: Client template (React + Tailwind CSS) for project (not include logic code).

```php
* Go into folder

* Install packages: npm install

* Run client: npm run dev
```

***

`client`: Client final code.

```php
* Go into folder

* Install packages: npm install

* Run client: npm run dev
```

***

`server`: Server final code.

```php
* Go into folder

* Run server: go run main.go
```

## Server API List

* Login: [POST]:`http://localhost:5000/login`

```php
{
  "username": "kazuya123",
  "password": "kazuya123"
}
```

* Verify token: [POST]:`http://localhost:5000/verify`

```php
{
  "accessToken": "oBPfKg2HUKL!62HP4lqOX1Tz7hH05QzSBkdhAd9aIT83R6ED76kPFF61Mz3rsb=b5EkzlGTTUdMGrkUBMCfrCI7343z?fvbg7e2BOJUlc16cXvzJNENBl/p-TRBiRdogjfpukjAiAohi0ekPOvn5f-5O9ZBtcymwXgMLyDi3KBzeB/K1?KG?Gg2IwCL6xmS6DDn/kAZGkW/JCRG7sYPGD04?0!OS/8/zvbeSx5sHNePb5T478SG!VZqaNpPB02l0"
}
```

* Get GirlFriend List: [GET]:`http://localhost:5000/girlfriends`

* Get Booking By Customer ID: [GET]:`http://localhost:5000/booking`

```php
{
    "id": 100,
}
```

* Add New Booking: [POST]:`http://localhost:5000/addbooking`

```php
{
    "girlFriendId": 1,
    "customerId": 100,
    "dating": "5/11/2023",
    "time": 2,
    "price": 608.84,
    "messages": "Hope to see you :>"
}
```
