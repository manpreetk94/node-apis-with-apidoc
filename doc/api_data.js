define({ "api": [
  {
    "type": "get",
    "url": "/post/list",
    "title": "Request Post Detail",
    "name": "GetPostDetail",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Post Detail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>1</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/post/list",
    "title": "Request Posts listing",
    "name": "GetPosts",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Post List</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>1</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "post",
    "url": "/user/add",
    "title": "Request Post Add",
    "name": "PostAdd",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title of the post</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the post</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>User Id of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Post has been addeed</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>1</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something went wrong</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/user/list",
    "title": "Request Users listing",
    "name": "GetUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Users List</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>[{&quot;message&quot;:&quot;Users List&quot;,&quot;status&quot;:1,&quot;data&quot;:[{&quot;id&quot;:1,&quot;name&quot;:&quot;john&quot;,&quot;email&quot;:&quot;john@mailinator.com&quot;,&quot;phone_number&quot;:&quot;8899665522&quot;,&quot;created_at&quot;:&quot;2022-03-17T04:25:17.000Z&quot;,&quot;updated_at&quot;:&quot;2022-03-17T04:25:17.000Z&quot;,&quot;posts&quot;:[{&quot;id&quot;:1,&quot;user_id&quot;:1,&quot;title&quot;:&quot;Chapter 1&quot;,&quot;description&quot;:&quot;Some details here from chapter 1&quot;,&quot;created_at&quot;:&quot;2022-03-17T04:25:50.000Z&quot;,&quot;updated_at&quot;:&quot;2022-03-17T04:25:50.000Z&quot;,&quot;status&quot;:1},{&quot;id&quot;:2,&quot;user_id&quot;:1,&quot;title&quot;:&quot;chapter 2&quot;,&quot;description&quot;:&quot;Some details here from chapter 2&quot;,&quot;created_at&quot;:&quot;2022-03-17T04:25:50.000Z&quot;,&quot;updated_at&quot;:&quot;2022-03-17T04:25:50.000Z&quot;,&quot;status&quot;:1}]},{&quot;id&quot;:2,&quot;name&quot;:&quot;Smith&quot;,&quot;email&quot;:&quot;smith2gmail.com&quot;,&quot;phone_number&quot;:&quot;7845124578&quot;,&quot;created_at&quot;:&quot;2022-03-17T04:25:17.000Z&quot;,&quot;updated_at&quot;:&quot;2022-03-17T04:25:17.000Z&quot;,&quot;posts&quot;:[{&quot;id&quot;:3,&quot;user_id&quot;:2,&quot;title&quot;:&quot;Climate CHnge&quot;,&quot;description&quot;:&quot;Session about Climate CHnge&quot;,&quot;created_at&quot;:&quot;2022-03-17T04:26:12.000Z&quot;,&quot;updated_at&quot;:&quot;2022-03-17T04:26:12.000Z&quot;,&quot;status&quot;:1}]}]}].</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/add",
    "title": "Request User Add",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Firstname of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone_number",
            "description": "<p>Phone Number of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Users Add</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>1</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something went wrong</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/detail:1",
    "title": "Request User Detail",
    "name": "GetUserDetail",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Users Detail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>{&quot;message&quot;:&quot;Users List&quot;,&quot;status&quot;:1,&quot;data&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;john&quot;,&quot;email&quot;:&quot;john@mailinator.com&quot;,&quot;phone_number&quot;:&quot;8899665522&quot;,&quot;created_at&quot;:&quot;2022-03-17T04:25:17.000Z&quot;,&quot;updated_at&quot;:&quot;2022-03-17T04:25:17.000Z&quot;,&quot;posts&quot;:[{&quot;id&quot;:1,&quot;user_id&quot;:1,&quot;title&quot;:&quot;Chapter 1&quot;,&quot;description&quot;:&quot;Some details here from chapter 1&quot;,&quot;created_at&quot;:&quot;2022-03-17T04:25:50.000Z&quot;,&quot;updated_at&quot;:&quot;2022-03-17T04:25:50.000Z&quot;,&quot;status&quot;:1},{&quot;id&quot;:2,&quot;user_id&quot;:1,&quot;title&quot;:&quot;chapter 2&quot;,&quot;description&quot;:&quot;Some details here from chapter 2&quot;,&quot;created_at&quot;:&quot;2022-03-17T04:25:50.000Z&quot;,&quot;updated_at&quot;:&quot;2022-03-17T04:25:50.000Z&quot;,&quot;status&quot;:1}]}}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something went wrong</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  }
] });
