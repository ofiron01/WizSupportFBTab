'use strict';

angular.module('WizSupportCSPanel.DataAPI', [])


    .factory('GetPosts', ['MockData', function() {

        return MockData.postsData();

    }])

    .factory('Posts', ['MockData', function(MockData) {

   return {

           addPost: function() {

               MockData.postsData().addPost(
                   {
                       "type":"public",
                       "created":1427982524916,
                       "FBUserID":"6667744543879",
                       "PostID":105563967,
                       "status":3,
                       "content":{
                           "message":"LST Message goes here"
                       }
                   }

               );

               console.log(  MockData.postsData().posts);
           }

       }

    }])



    .factory('GetBrand', ['MockData', function() {

        return MockData.brandData();
    }])

    .factory('User', [function() {

        return {
            fbName: function() {
                return 'Ofir Oron';
            },
            fbUID: function() {
                //https://graph.facebook.com/100000337451532/picture/
                return '100000337451532';
            },
            fbPicture: function() {
                return '//graph.facebok.com/100000337451532/picture/';
            }

        }

    }])

    .factory('MockData', [function() {

        var _posts = [
        {
            "type":"public",
            "created":1427982524916,
            "FBUserID":"6667744543879",
            "PostID":105563967,
            "status":3,
            "content":{
                "message":"Message goes here."
            },
            "children":[
                {
                    "created":1427982524916,
                    "ObjID":105563968,
                    "content":{
                        "message":"comment goes here."
                    },
                    "user":{
                        "name": "John Doe",
                        "FBUserID":"100000337451532"
                    }
                },
                {
                    "created":1427982900777,
                    "ObjID":105563969,
                    "content":{
                        "message":"comment goes here."
                    },
                    "user":{
                        "name": "John Doe",
                        "FBUserID":"100000337451532"
                    }
                }


            ]
        }
    ];

        return {

            brandData: function() {

                return {
                    "id":1101,
                    "BrandName":"LLG Corp LTD.",
                    "token":"adf44466fssnjj5dd55vhj",
                    "Theme":{
                        "BodyText":"#333333",
                        "BGColor":"#ffffff",
                        "LogoURL":"//assets.llgcorp.com/fb/images/logo.png",
                        "TopImage":"images/people.gif"
                    },
                    "BrandData":{
                        "title":"LLG Corp LTD - Customer Service",
                        "desc":"Description goes here",
                        "data":{
                            "form":[
                                {
                                    "id":0,
                                    "type":"select",
                                    "items": [
                                        {"name": "שירות לקוחות", value: 0},
                                        {"name": "תמיכה טכנית", value: 1}
                                    ],
                                    "name":"",
                                    "data":"שירות לקוחות"
                                },
                                {
                                    "id":1,
                                    "type":"textarea",
                                    "name":"תוכן ההודעה"
                                },
                                {
                                    "id":2,
                                    "type":"input",
                                    "name":"טלפון"
                                },
                                {
                                    "id":3,
                                    "type":"input",
                                    "name":"דואר אלקטרוני"
                                },


                            ]

                        }
                    }
                };

            },

            postsData: function() {
                return {

                   posts: _posts,
                   addPost: function(post) {
                       _posts.push(post);
                   }



                };
            }



        }
    }]);