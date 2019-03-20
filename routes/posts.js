var express = require('express');
var router = express.Router();
var Posts = require('../models/posts');

router.route('/')
        .post(function(request, response){
          console.log(request.headers);
          console.log(request.body);
          var post = new Posts.Model(request.body.post)
          post.save(function(error){
            if(error) response.send(error);
            response.json({post: post});
          });
        })

        .get(function(request, response){
          var posts = Posts.Model.find(function(error, posts){
          if (error) response.send(error);
            response.send(posts);
          });
        });

router.route('/:post_id')     
        .get(function(request, response){
          var posts = Posts.Model.findById(request.params.post_id, function(error, post){
          if (error) 
            response.send(error);
          else
            response.send(post);
          });
        })

        .delete(function(request, response){
          var posts = Posts.Model.findOneAndDelete({_id: request.params.post_id}, function(error, deleted){
          if (error) 
            response.send(error);
          else
            response.send(deleted);
          });
        })

        .put(function(request, response){
          console.log(request.headers);
          console.log(request.body);
          var posts = Posts.Model.findById(request.params.post_id, function(error, post){
          if (error) 
            response.send(error);
          else{
            post.title = request.body.post.title;
            post.body = request.body.post.body;
            post.save(function(error){
              if (error) 
                response.send(error);
              else 
                response.send(post);
            });
          }
          });
        })  

module.exports = router; 