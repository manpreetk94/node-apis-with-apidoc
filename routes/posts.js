var express = require('express');
var router = express.Router();

var Post = require('../models/Post');


/* GET posts listing. */


/**
 * @api {get} /post/list Request Posts listing
 * @apiName GetPosts
 * @apiGroup Posts
 *
 *
 * @apiSuccess {String} message Post List
 * @apiSuccess {Integer} status 1
 */


router.get('/list', function(req, res, next) {
 Post.fetchAll({withRelated: ['user']}).then(function(results) {
        res.status(200).send({
            message: "Post List",
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



/**
 * @api {get} /post/list Request Post Detail
 * @apiName GetPostDetail
 * @apiGroup Posts
 *
 *
 * @apiSuccess {String} message Post Detail
 * @apiSuccess {Integer} status 1
 */




/* GET post detail with user detail listing. */
router.get('/detail/:id/', function(req, res, next) {
 var id = req.params.id;
 Post.where({id:id}).fetch({withRelated: ['user']}).then(function(results) {
        res.status(200).send({
            message: "Post Detail",
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


/*add post */


/*add user */



/**
 * @api {post} /user/add Request Post Add
 * @apiName PostAdd
 * @apiGroup Posts

 * @apiParam  {string} title  title of the post
 * @apiParam  {string} description  Description of the post
 * @apiParam  {integer} user_id  User Id of user
 * 
 * @apiSuccess {String} message Post has been addeed
 * @apiSuccess {Integer} status 1
 * 
 * @apiError {String} message Something went wrong
 * @apiError {Integer} status 0
 * 
 */

router.post('/add', function(req, res, next) {
    var data = req.body;
    new Post({'title':datatitle,'description':data.description,'user_id':data.user_id})
           .save(null, {method: 'insert'})
           .then(function(model) {
                res.status(200).send({
                    message: "Post has been addeed",
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
