# APIs documentaion of Node Apis
![Express](https://camo.githubusercontent.com/0566752248b4b31b2c4bdc583404e41066bd0b6726f310b73e1140deefcc31ac/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67)
![Mysql](https://avatars.githubusercontent.com/u/2452804?s=200&v=4)
![Node](https://camo.githubusercontent.com/720ed473d178f9380291709d2223860ade4f3c7bc368e3fea1ad057b8dc9c6f5/68747470733a2f2f6e6f64656a732e6f72672f7374617469632f696d616765732f6c6f676f2d6c696768742e737667)

### Dependencies

This Package is currently using following dependencies.
```
* [bookshelf] - "^1.2.0"
* [express]    - "~4.16.1"
* [knex]    - "^1.0.4"
* [mysql]    - "^2.18.1"
* [node]    - "^12.20"
* [apidoc]    - "^0.25.0"
```

## To run the project

Install Dependencies
```js

sudo npm i

```

Also Install apidoc globally

```js
sudo npm i apidoc@0.25.0 -g
````

### To run migrations
```js
knex migrate:latest

````


### Start Project
```js
sudo npm start

````

## To add get api into doc

```js
/**
 * @api {get} /post/list Request Posts listing
 * @apiName GetPosts
 * @apiGroup Posts
 *
 *
 * @apiSuccess {String} message Post List
 * @apiSuccess {Integer} status 1
 */


```

## To Add post API  into doc

```js

/**
 * @api {post} /user/add Request User Add
 * @apiName GetUser
 * @apiGroup User

 * @apiParam  {string} name  Firstname of the User
 * @apiParam  {string} email  Email of the User
 * @apiParam  {string} phone_number  Phone Number of user
 * 
 * @apiSuccess {String} message Users Add
 * @apiSuccess {Integer} status 1
 * 
 * @apiError {String} message Something went wrong
 * @apiError {Integer} status 0
 * 
 */
 
````
