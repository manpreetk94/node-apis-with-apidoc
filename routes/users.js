var express = require('express');
var router = express.Router();

var User = require('../models/User');


/* GET users listing. */

/**
 * @api {get} /user/list Request Users listing
 * @apiName GetUser
 * @apiGroup User
 *
 *
 * @apiSuccess {String} message Users List
 * @apiSuccess {Integer} status 1
 * @apiSuccess {Array} data  [{"message":"Users List","status":1,"data":[{"id":1,"name":"john","email":"john@mailinator.com","phone_number":"8899665522","created_at":"2022-03-17T04:25:17.000Z","updated_at":"2022-03-17T04:25:17.000Z","posts":[{"id":1,"user_id":1,"title":"Chapter 1","description":"Some details here from chapter 1","created_at":"2022-03-17T04:25:50.000Z","updated_at":"2022-03-17T04:25:50.000Z","status":1},{"id":2,"user_id":1,"title":"chapter 2","description":"Some details here from chapter 2","created_at":"2022-03-17T04:25:50.000Z","updated_at":"2022-03-17T04:25:50.000Z","status":1}]},{"id":2,"name":"Smith","email":"smith2gmail.com","phone_number":"7845124578","created_at":"2022-03-17T04:25:17.000Z","updated_at":"2022-03-17T04:25:17.000Z","posts":[{"id":3,"user_id":2,"title":"Climate CHnge","description":"Session about Climate CHnge","created_at":"2022-03-17T04:26:12.000Z","updated_at":"2022-03-17T04:26:12.000Z","status":1}]}]}].
 */

router.get('/list', function(req, res, next) {
 User.fetchAll({withRelated: ['posts']}).then(function(results) {
        res.status(200).send({
            message: "Users List",
            status:1,
            data:results.toJSON()           
        }); 

    }).catch((e)=>{
        res.status(500).send({
            message: e,
            status:0            
        });
    });
});


/* GET user detail. */

/**
 * @api {get} /user/detail:1 Request User Detail
 * @apiName GetUserDetail
 * @apiGroup User
 *
 *
 * @apiSuccess {String} message Users Detail
 * @apiSuccess {Integer} status 1
 * @apiSuccess {Array} data  {"message":"Users List","status":1,"data":{"id":1,"name":"john","email":"john@mailinator.com","phone_number":"8899665522","created_at":"2022-03-17T04:25:17.000Z","updated_at":"2022-03-17T04:25:17.000Z","posts":[{"id":1,"user_id":1,"title":"Chapter 1","description":"Some details here from chapter 1","created_at":"2022-03-17T04:25:50.000Z","updated_at":"2022-03-17T04:25:50.000Z","status":1},{"id":2,"user_id":1,"title":"chapter 2","description":"Some details here from chapter 2","created_at":"2022-03-17T04:25:50.000Z","updated_at":"2022-03-17T04:25:50.000Z","status":1}]}}
 * 
 * @apiError {String} message Something went wrong
 * @apiError {Integer} status 0
 * 
 */




/* GET users detail. */
router.get('/detail/:id', function(req, res, next) {
    var id = req.params.id;
    User.where({id:id}).fetch({withRelated: ['posts']}).then(function(results) {
        res.status(200).send({
            message: "Users Detail",
            status:1,
            data:results.toJSON()           
        }); 

    }).catch((e)=>{
        res.status(500).send({
            message: 'Something went wrong',
            status:0            
        });
    });
});


/*add user */



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


router.post('/add', function(req, res, next) {
    var data = req.body;
    new User({'name':data.name,'email':data.email,'phone_number':data.phone_number})
                   .save(null, {method: 'insert'})
                   .then(function(model) {
                        res.status(200).send({
                            message: "Users has been addeed",
                            status:1,
                        }); 
                    }).catch((e)=>{
                        res.status(500).send({
                            message: 'Something went wrong',
                            status:0            
                        });
                    });

});

module.exports = router;
