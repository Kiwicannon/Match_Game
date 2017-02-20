angular.module('app').service('mainSvc', function($http) {
    var baseUrl = 'https://api.unsplash.com/'
    var collection = 'collections/386686/photos'
    var key = '?client_id=e9f6fb6e969eb04865b33e4ef3d40d4f3b6302b16a255bc233dc3e0905452427'
    var quoteUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
    this.getPics= function(){
        return $http.get('nature.json')
        console.log(this.getPics)
    }
    this.getQuote= function(){
        return $http({
            url: quoteUrl,
            method: 'GET',
    
        }).then(function(response){
            
            return response.data
        })
        
    }
    
    

    // this.getImageNature = function () {
    //             return $http({
    //                 method: 'GET',
    //                 url: baseUrl + collection + key
    //                 //https://api.unsplash.com/photos/?client_id=e9f6fb6e969eb04865b33e4ef3d40d4f3b6302b16a255bc233dc3e0905452427
    //             }).then(function (response) {
    //                 if (response.status === 200) {
    //                     console.log(response.data)
    //                     return response.data
    //                 }
    //                 return "Error" + response.status
    //             })

    // }
})
var savedApi = [{
    "id": "Kt5hRENuotI",
    "created_at": "2015-12-28T16:19:42-05:00",
    "width": 3914,
    "height": 2935,
    "color": "#F7F7F9",
    "likes": 1424,
    "liked_by_user": false,
    "user": {
        "id": "ixcRggHpUzs",
        "username": "aridley88",
        "name": "Andrew Ridley",
        "first_name": "Andrew",
        "last_name": "Ridley",
        "portfolio_url": "http://www.aridleyphotography.com/",
        "bio": "London based photographer with an eye for the details in life, which is the basis of the aesthetic in my photographs. Whereas for some, focusing on details and precision detaches feelings, I use details to bring subjects to life.",
        "location": "London, UK",
        "total_likes": 33,
        "total_photos": 33,
        "total_collections": 0,
        "profile_image": {
            "small": "https://images.unsplash.com/profile-1484418258731-64a647af6e08?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32\u0026s=8e07874513530e9af29f14a14226cf0c",
            "medium": "https://images.unsplash.com/profile-1484418258731-64a647af6e08?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64\u0026s=31cbf3b5505a5a87ae69c13ca0d60bf7",
            "large": "https://images.unsplash.com/profile-1484418258731-64a647af6e08?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128\u0026s=169e025203647ffa802fad1459dcc33a"
        },
        "links": {
            "self": "https://api.unsplash.com/users/aridley88",
            "html": "http://unsplash.com/@aridley88",
            "photos": "https://api.unsplash.com/users/aridley88/photos",
            "likes": "https://api.unsplash.com/users/aridley88/likes",
            "portfolio": "https://api.unsplash.com/users/aridley88/portfolio",
            "following": "https://api.unsplash.com/users/aridley88/following",
            "followers": "https://api.unsplash.com/users/aridley88/followers"
        }
    },
    "current_user_collections": [],
    "urls": {
        "raw": "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3",
        "full": "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026s=2951d33d577f52a13c824e2a7d6f65c7",
        "regular": "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=1080\u0026fit=max\u0026s=dfe7438e2d35d7b4d7ae033cd22c80d2",
        "small": "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=400\u0026fit=max\u0026s=fe69381109b42b931be209c853172f8e",
        "thumb": "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=200\u0026fit=max\u0026s=b5ac7fb3cc4c7bfabfe55f242d32d1a2"
    },
    "categories": [{
        "id": 4,
        "title": "Nature",
        "photo_count": 54184,
        "links": {
            "self": "https://api.unsplash.com/categories/4",
            "photos": "https://api.unsplash.com/categories/4/photos"
        }
    }],
    "links": {
        "self": "https://api.unsplash.com/photos/Kt5hRENuotI",
        "html": "http://unsplash.com/photos/Kt5hRENuotI",
        "download": "http://unsplash.com/photos/Kt5hRENuotI/download",
        "download_location": "https://api.unsplash.com/photos/Kt5hRENuotI/download"
    }
}, {
    "id": "1CxphuiFS7Y",
    "created_at": "2016-06-05T14:45:10-04:00",
    "width": 5001,
    "height": 3339,
    "color": "#E4ECF4",
    "likes": 1584,
    "liked_by_user": false,
    "user": {
        "id": "MR8wUha_6C8",
        "username": "repponen",
        "name": "Anton Repponen",
        "first_name": "Anton",
        "last_name": "Repponen",
        "portfolio_url": "http://repponen.com",
        "bio": "",
        "location": "New York",
        "total_likes": 4,
        "total_photos": 17,
        "total_collections": 0,
        "profile_image": {
            "small": "https://images.unsplash.com/profile-fb-1464400612-dd30e7ae07b1.jpg?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32\u0026s=a8967d0af2e898dd452432f12645f23c",
            "medium": "https://images.unsplash.com/profile-fb-1464400612-dd30e7ae07b1.jpg?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64\u0026s=9f8101c49d1dc6a9cd9fad59c5831c23",
            "large": "https://images.unsplash.com/profile-fb-1464400612-dd30e7ae07b1.jpg?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128\u0026s=268341f0670008a386aac791292a5e3e"
        },
        "links": {
            "self": "https://api.unsplash.com/users/repponen",
            "html": "http://unsplash.com/@repponen",
            "photos": "https://api.unsplash.com/users/repponen/photos",
            "likes": "https://api.unsplash.com/users/repponen/likes",
            "portfolio": "https://api.unsplash.com/users/repponen/portfolio",
            "following": "https://api.unsplash.com/users/repponen/following",
            "followers": "https://api.unsplash.com/users/repponen/followers"
        }
    },
    "current_user_collections": [],
    "urls": {
        "raw": "https://images.unsplash.com/photo-1465152251391-e94453ee3f5a",
        "full": "https://images.unsplash.com/photo-1465152251391-e94453ee3f5a?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026s=3169e6eef5aeed9ae795aa79cc99af92",
        "regular": "https://images.unsplash.com/photo-1465152251391-e94453ee3f5a?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=1080\u0026fit=max\u0026s=827c333ad3ab46b4cfed6aa05dcd607b",
        "small": "https://images.unsplash.com/photo-1465152251391-e94453ee3f5a?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=400\u0026fit=max\u0026s=3d733f32de942dcd5dbf8a354138a336",
        "thumb": "https://images.unsplash.com/photo-1465152251391-e94453ee3f5a?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=200\u0026fit=max\u0026s=38a0649a7da9c9e48b44e669c30ae4b6"
    },
    "categories": [{
        "id": 4,
        "title": "Nature",
        "photo_count": 54184,
        "links": {
            "self": "https://api.unsplash.com/categories/4",
            "photos": "https://api.unsplash.com/categories/4/photos"
        }
    }, {
        "id": 6,
        "title": "People",
        "photo_count": 18319,
        "links": {
            "self": "https://api.unsplash.com/categories/6",
            "photos": "https://api.unsplash.com/categories/6/photos"
        }
    }],
    "links": {
        "self": "https://api.unsplash.com/photos/1CxphuiFS7Y",
        "html": "http://unsplash.com/photos/1CxphuiFS7Y",
        "download": "http://unsplash.com/photos/1CxphuiFS7Y/download",
        "download_location": "https://api.unsplash.com/photos/1CxphuiFS7Y/download"
    }
}, {
    "id": "sK1hW5knKkw",
    "created_at": "2016-11-10T17:09:03-05:00",
    "width": 4167,
    "height": 2728,
    "color": "#F3EDE5",
    "likes": 87,
    "liked_by_user": false,
    "user": {
        "id": "FA4b9i_9X8M",
        "username": "skalecki",
        "name": "Adam Skalecki",
        "first_name": "Adam",
        "last_name": "Skalecki",
        "portfolio_url": "http://www.adamskalecki.com",
        "bio": "",
        "location": "Boulder, CO",
        "total_likes": 3,
        "total_photos": 6,
        "total_collections": 0,
        "profile_image": {
            "small": "https://images.unsplash.com/profile-1478815922065-4a7f7a468ec8?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32\u0026s=753d140bdff91afe534b10350dd6bd52",
            "medium": "https://images.unsplash.com/profile-1478815922065-4a7f7a468ec8?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64\u0026s=73f9d395e18f430495e58bb6d98830fc",
            "large": "https://images.unsplash.com/profile-1478815922065-4a7f7a468ec8?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128\u0026s=aaaffd4d73995fa2f5749e2e997b24e8"
        },
        "links": {
            "self": "https://api.unsplash.com/users/skalecki",
            "html": "http://unsplash.com/@skalecki",
            "photos": "https://api.unsplash.com/users/skalecki/photos",
            "likes": "https://api.unsplash.com/users/skalecki/likes",
            "portfolio": "https://api.unsplash.com/users/skalecki/portfolio",
            "following": "https://api.unsplash.com/users/skalecki/following",
            "followers": "https://api.unsplash.com/users/skalecki/followers"
        }
    },
    "current_user_collections": [],
    "urls": {
        "raw": "https://images.unsplash.com/photo-1478815716600-15f0c3eb8e4b",
        "full": "https://images.unsplash.com/photo-1478815716600-15f0c3eb8e4b?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026s=e0da216ea5202386dd3273d18c0e9aa3",
        "regular": "https://images.unsplash.com/photo-1478815716600-15f0c3eb8e4b?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=1080\u0026fit=max\u0026s=6e0bb2a78921cf1a374755700b3c5070",
        "small": "https://images.unsplash.com/photo-1478815716600-15f0c3eb8e4b?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=400\u0026fit=max\u0026s=bad298da4b1fec3dfd65651d66f56e5e",
        "thumb": "https://images.unsplash.com/photo-1478815716600-15f0c3eb8e4b?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=200\u0026fit=max\u0026s=a68de45a0616e6c0617f5c5cb37f4054"
    },
    "categories": [],
    "links": {
        "self": "https://api.unsplash.com/photos/sK1hW5knKkw",
        "html": "http://unsplash.com/photos/sK1hW5knKkw",
        "download": "http://unsplash.com/photos/sK1hW5knKkw/download",
        "download_location": "https://api.unsplash.com/photos/sK1hW5knKkw/download"
    }
}, {
    "id": "cZVthlrnlnQ",
    "created_at": "2016-04-27T11:21:33-04:00",
    "width": 5472,
    "height": 3648,
    "color": "#1B2F2E",
    "likes": 1797,
    "liked_by_user": false,
    "user": {
        "id": "4kgP5hcdRJI",
        "username": "willvanw",
        "name": "Will van Wingerden",
        "first_name": "Will",
        "last_name": "van Wingerden",
        "portfolio_url": "http://www.instagram.com/willvanw",
        "bio": "Explore | Capture | Share",
        "location": "Bournemouth",
        "total_likes": 29,
        "total_photos": 7,
        "total_collections": 1,
        "profile_image": {
            "small": "https://images.unsplash.com/profile-1462378563651-4f7251dba137?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32\u0026s=6857087fe9e0adce75757fd9099fc174",
            "medium": "https://images.unsplash.com/profile-1462378563651-4f7251dba137?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64\u0026s=8b34d250f60daecd697197e7c5251e45",
            "large": "https://images.unsplash.com/profile-1462378563651-4f7251dba137?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128\u0026s=fdc8accc216a49ecd7e1ea2bb896fbd5"
        },
        "links": {
            "self": "https://api.unsplash.com/users/willvanw",
            "html": "http://unsplash.com/@willvanw",
            "photos": "https://api.unsplash.com/users/willvanw/photos",
            "likes": "https://api.unsplash.com/users/willvanw/likes",
            "portfolio": "https://api.unsplash.com/users/willvanw/portfolio",
            "following": "https://api.unsplash.com/users/willvanw/following",
            "followers": "https://api.unsplash.com/users/willvanw/followers"
        }
    },
    "current_user_collections": [],
    "urls": {
        "raw": "https://images.unsplash.com/photo-1461770354136-8f58567b617a",
        "full": "https://images.unsplash.com/photo-1461770354136-8f58567b617a?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026s=09f59e1695ccf5f384a8e949191f37a2",
        "regular": "https://images.unsplash.com/photo-1461770354136-8f58567b617a?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=1080\u0026fit=max\u0026s=93dffbd97eface4901d6c95fe5f66b46",
        "small": "https://images.unsplash.com/photo-1461770354136-8f58567b617a?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=400\u0026fit=max\u0026s=6c738f2659e632032cbf0b3c3fa239a8",
        "thumb": "https://images.unsplash.com/photo-1461770354136-8f58567b617a?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=200\u0026fit=max\u0026s=4e1301f3a4dcd825a2101bac5a00383d"
    },
    "categories": [{
        "id": 4,
        "title": "Nature",
        "photo_count": 54184,
        "links": {
            "self": "https://api.unsplash.com/categories/4",
            "photos": "https://api.unsplash.com/categories/4/photos"
        }
    }, {
        "id": 6,
        "title": "People",
        "photo_count": 18319,
        "links": {
            "self": "https://api.unsplash.com/categories/6",
            "photos": "https://api.unsplash.com/categories/6/photos"
        }
    }],
    "links": {
        "self": "https://api.unsplash.com/photos/cZVthlrnlnQ",
        "html": "http://unsplash.com/photos/cZVthlrnlnQ",
        "download": "http://unsplash.com/photos/cZVthlrnlnQ/download",
        "download_location": "https://api.unsplash.com/photos/cZVthlrnlnQ/download"
    }
}, {
    "id": "IraMdOH78NE",
    "created_at": "2016-11-07T18:56:40-05:00",
    "width": 4094,
    "height": 2730,
    "color": "#1F1E30",
    "likes": 767,
    "liked_by_user": false,
    "user": {
        "id": "c7G-UZBgc5s",
        "username": "arstyy",
        "name": "Austin Neill",
        "first_name": "Austin",
        "last_name": "Neill",
        "portfolio_url": "http://austinneill.com",
        "bio": "Global UX Director at Billabong. Co-Founder \u0026 Product lead at August. Creative Director at Tixr. Seeker of experiences. Designer. Techie.",
        "location": "Newport Beach, CA",
        "total_likes": 59,
        "total_photos": 44,
        "total_collections": 0,
        "profile_image": {
            "small": "https://images.unsplash.com/profile-1480960610408-a74cfa0ee510?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32\u0026s=96ddb7d9b6515c65cacc193e9445bba7",
            "medium": "https://images.unsplash.com/profile-1480960610408-a74cfa0ee510?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64\u0026s=9b70e97aefc633fda79afc82db9bbfcd",
            "large": "https://images.unsplash.com/profile-1480960610408-a74cfa0ee510?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128\u0026s=6402583c2d085d5a6978f2c71ce30f96"
        },
        "links": {
            "self": "https://api.unsplash.com/users/arstyy",
            "html": "http://unsplash.com/@arstyy",
            "photos": "https://api.unsplash.com/users/arstyy/photos",
            "likes": "https://api.unsplash.com/users/arstyy/likes",
            "portfolio": "https://api.unsplash.com/users/arstyy/portfolio",
            "following": "https://api.unsplash.com/users/arstyy/following",
            "followers": "https://api.unsplash.com/users/arstyy/followers"
        }
    },
    "current_user_collections": [],
    "urls": {
        "raw": "https://images.unsplash.com/photo-1478562853135-c3c9e3ef7905",
        "full": "https://images.unsplash.com/photo-1478562853135-c3c9e3ef7905?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026s=99b87e884f025d2d3c4e28d3f8672c5a",
        "regular": "https://images.unsplash.com/photo-1478562853135-c3c9e3ef7905?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=1080\u0026fit=max\u0026s=b5686f337b5a8f6791d15d63647d0699",
        "small": "https://images.unsplash.com/photo-1478562853135-c3c9e3ef7905?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=400\u0026fit=max\u0026s=19eaa24db69d8ac3707e6b260471f7ab",
        "thumb": "https://images.unsplash.com/photo-1478562853135-c3c9e3ef7905?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=200\u0026fit=max\u0026s=a09762cd71cde493bfc19d523a083a13"
    },
    "categories": [],
    "links": {
        "self": "https://api.unsplash.com/photos/IraMdOH78NE",
        "html": "http://unsplash.com/photos/IraMdOH78NE",
        "download": "http://unsplash.com/photos/IraMdOH78NE/download",
        "download_location": "https://api.unsplash.com/photos/IraMdOH78NE/download"
    }
}, {
    "id": "K1awQbGGimI",
    "created_at": "2016-10-24T19:43:39-04:00",
    "width": 3992,
    "height": 2992,
    "color": "#DD9302",
    "likes": 10,
    "liked_by_user": false,
    "user": {
        "id": "UT41ainZxFI",
        "username": "nathananderson",
        "name": "Nathan Anderson",
        "first_name": "Nathan",
        "last_name": "Anderson",
        "portfolio_url": "https://photos.nathanworking.com/sponsor/",
        "bio": "Photos from me here. Photos from my grandfather there -\u003e Unsplash.com/@lesanderson // Anderson@NathanWorking.com // Buy unique prints at my site //",
        "location": "Knoxville, TN",
        "total_likes": 1117,
        "total_photos": 310,
        "total_collections": 4,
        "profile_image": {
            "small": "https://images.unsplash.com/profile-1472929657766-241e9b8a1cf7?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32\u0026s=033848299158f6d8ba9ecf2d486be8f0",
            "medium": "https://images.unsplash.com/profile-1472929657766-241e9b8a1cf7?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64\u0026s=3007b6958cca14b242b667f8f9996a65",
            "large": "https://images.unsplash.com/profile-1472929657766-241e9b8a1cf7?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128\u0026s=dcc5e40a027a078f8e93a46b4ff2aa1d"
        },
        "links": {
            "self": "https://api.unsplash.com/users/nathananderson",
            "html": "http://unsplash.com/@nathananderson",
            "photos": "https://api.unsplash.com/users/nathananderson/photos",
            "likes": "https://api.unsplash.com/users/nathananderson/likes",
            "portfolio": "https://api.unsplash.com/users/nathananderson/portfolio",
            "following": "https://api.unsplash.com/users/nathananderson/following",
            "followers": "https://api.unsplash.com/users/nathananderson/followers"
        }
    },
    "current_user_collections": [],
    "urls": {
        "raw": "https://images.unsplash.com/photo-1477352589432-7fadd20051d7",
        "full": "https://images.unsplash.com/photo-1477352589432-7fadd20051d7?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026s=791ad30a93f41226eee2968b09cac76b",
        "regular": "https://images.unsplash.com/photo-1477352589432-7fadd20051d7?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=1080\u0026fit=max\u0026s=5b49e9ced3f9da6fb2bd6bc151ec1230",
        "small": "https://images.unsplash.com/photo-1477352589432-7fadd20051d7?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=400\u0026fit=max\u0026s=2c9b0e94a90d7e033ddf8fec9fc229eb",
        "thumb": "https://images.unsplash.com/photo-1477352589432-7fadd20051d7?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=200\u0026fit=max\u0026s=7e8ea326c94055074f128018c1c8c0cd"
    },
    "categories": [],
    "links": {
        "self": "https://api.unsplash.com/photos/K1awQbGGimI",
        "html": "http://unsplash.com/photos/K1awQbGGimI",
        "download": "http://unsplash.com/photos/K1awQbGGimI/download",
        "download_location": "https://api.unsplash.com/photos/K1awQbGGimI/download"
    }
}, {
    "id": "ZiJZORZ-bI8",
    "created_at": "2015-11-02T09:46:12-05:00",
    "width": 5469,
    "height": 3646,
    "color": "#716362",
    "likes": 219,
    "liked_by_user": false,
    "user": {
        "id": "6hh7fFmCplk",
        "username": "wfuller",
        "name": "Will Fuller",
        "first_name": "Will",
        "last_name": "Fuller",
        "portfolio_url": null,
        "bio": "",
        "location": null,
        "total_likes": 34,
        "total_photos": 3,
        "total_collections": 0,
        "profile_image": {
            "small": "https://images.unsplash.com/profile-fb-1445555189-9be131ac477d.jpg?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32\u0026s=ca85abe97dbc84fed8a9615309842a28",
            "medium": "https://images.unsplash.com/profile-fb-1445555189-9be131ac477d.jpg?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64\u0026s=5073c24ff6669d5c78b74509928fd3c6",
            "large": "https://images.unsplash.com/profile-fb-1445555189-9be131ac477d.jpg?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128\u0026s=72ea55ca0fac1438b8b833c731587781"
        },
        "links": {
            "self": "https://api.unsplash.com/users/wfuller",
            "html": "http://unsplash.com/@wfuller",
            "photos": "https://api.unsplash.com/users/wfuller/photos",
            "likes": "https://api.unsplash.com/users/wfuller/likes",
            "portfolio": "https://api.unsplash.com/users/wfuller/portfolio",
            "following": "https://api.unsplash.com/users/wfuller/following",
            "followers": "https://api.unsplash.com/users/wfuller/followers"
        }
    },
    "current_user_collections": [],
    "urls": {
        "raw": "https://images.unsplash.com/photo-1446475329963-e1013c85391b",
        "full": "https://images.unsplash.com/photo-1446475329963-e1013c85391b?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026s=eb3554485c7f0a05328bc30d1c9e27cd",
        "regular": "https://images.unsplash.com/photo-1446475329963-e1013c85391b?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=1080\u0026fit=max\u0026s=2b483acc8cb4a089c52bc0917e9e4343",
        "small": "https://images.unsplash.com/photo-1446475329963-e1013c85391b?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=400\u0026fit=max\u0026s=f0093424b1057fdda19739e43b19b85b",
        "thumb": "https://images.unsplash.com/photo-1446475329963-e1013c85391b?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=200\u0026fit=max\u0026s=37c2529e104a95445e58c1a85e4d0266"
    },
    "categories": [{
        "id": 4,
        "title": "Nature",
        "photo_count": 54184,
        "links": {
            "self": "https://api.unsplash.com/categories/4",
            "photos": "https://api.unsplash.com/categories/4/photos"
        }
    }],
    "links": {
        "self": "https://api.unsplash.com/photos/ZiJZORZ-bI8",
        "html": "http://unsplash.com/photos/ZiJZORZ-bI8",
        "download": "http://unsplash.com/photos/ZiJZORZ-bI8/download",
        "download_location": "https://api.unsplash.com/photos/ZiJZORZ-bI8/download"
    }
}, {
    "id": "Al7IoQ74-LU",
    "created_at": "2016-08-21T17:39:35-04:00",
    "width": 2848,
    "height": 4272,
    "color": "#F0EFF0",
    "likes": 211,
    "liked_by_user": false,
    "user": {
        "id": "NA1nbvA0G6Q",
        "username": "ajaegers",
        "name": "Arnaud Jaegers",
        "first_name": "Arnaud",
        "last_name": "Jaegers",
        "portfolio_url": "https://unquote.li",
        "bio": "Web Designer \u0026 Web Developer of attractive apps",
        "location": "Switzerland",
        "total_likes": 7,
        "total_photos": 39,
        "total_collections": 2,
        "profile_image": {
            "small": "https://images.unsplash.com/profile-1456471412823-5b663d3ae336?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32\u0026s=ff45b12b02177995bfcdb17704f7e899",
            "medium": "https://images.unsplash.com/profile-1456471412823-5b663d3ae336?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64\u0026s=7619c1ba9b62a0ed133322d74b672e40",
            "large": "https://images.unsplash.com/profile-1456471412823-5b663d3ae336?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128\u0026s=c81d33fd2e49fbce732b9bbf33940931"
        },
        "links": {
            "self": "https://api.unsplash.com/users/ajaegers",
            "html": "http://unsplash.com/@ajaegers",
            "photos": "https://api.unsplash.com/users/ajaegers/photos",
            "likes": "https://api.unsplash.com/users/ajaegers/likes",
            "portfolio": "https://api.unsplash.com/users/ajaegers/portfolio",
            "following": "https://api.unsplash.com/users/ajaegers/following",
            "followers": "https://api.unsplash.com/users/ajaegers/followers"
        }
    },
    "current_user_collections": [],
    "urls": {
        "raw": "https://images.unsplash.com/photo-1471815497777-a3cec075d826",
        "full": "https://images.unsplash.com/photo-1471815497777-a3cec075d826?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026s=969b9c4179f7336cc38c5648bb16df04",
        "regular": "https://images.unsplash.com/photo-1471815497777-a3cec075d826?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=1080\u0026fit=max\u0026s=7042ef7b1f10176cf4afc95461a9a616",
        "small": "https://images.unsplash.com/photo-1471815497777-a3cec075d826?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=400\u0026fit=max\u0026s=3e37f92e743ff3e1e3e97c22c415e9a7",
        "thumb": "https://images.unsplash.com/photo-1471815497777-a3cec075d826?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=200\u0026fit=max\u0026s=94ab187de4f9aba9fab585eb008f11cc"
    },
    "categories": [],
    "links": {
        "self": "https://api.unsplash.com/photos/Al7IoQ74-LU",
        "html": "http://unsplash.com/photos/Al7IoQ74-LU",
        "download": "http://unsplash.com/photos/Al7IoQ74-LU/download",
        "download_location": "https://api.unsplash.com/photos/Al7IoQ74-LU/download"
    }
}, {
    "id": "j0g8taxHZa0",
    "created_at": "2015-09-16T08:37:11-04:00",
    "width": 4342,
    "height": 2895,
    "color": "#4B4B4B",
    "likes": 1840,
    "liked_by_user": false,
    "user": {
        "id": "gnwb2chNB0Q",
        "username": "samuelzeller",
        "name": "Samuel Zeller",
        "first_name": "Samuel",
        "last_name": "Zeller",
        "portfolio_url": "http://www.samuelzeller.ch/",
        "bio": "Freelance photographer - Fujifilm ambassador - Editor of Fujifeed magazine - sam@samuelzeller.ch",
        "location": "Geneva, Switzerland",
        "total_likes": 52,
        "total_photos": 213,
        "total_collections": 3,
        "profile_image": {
            "small": "https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32\u0026s=55a9d05123e81facff8540f8dd04f6ac",
            "medium": "https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64\u0026s=b5b6563604a357c81ab7b7d031711621",
            "large": "https://images.unsplash.com/profile-1459084990923-3f9f152c3799?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128\u0026s=f2d56cf35c7e667ca84ed0a4dabdc2c6"
        },
        "links": {
            "self": "https://api.unsplash.com/users/samuelzeller",
            "html": "http://unsplash.com/@samuelzeller",
            "photos": "https://api.unsplash.com/users/samuelzeller/photos",
            "likes": "https://api.unsplash.com/users/samuelzeller/likes",
            "portfolio": "https://api.unsplash.com/users/samuelzeller/portfolio",
            "following": "https://api.unsplash.com/users/samuelzeller/following",
            "followers": "https://api.unsplash.com/users/samuelzeller/followers"
        }
    },
    "current_user_collections": [],
    "urls": {
        "raw": "https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4",
        "full": "https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026s=74285702a4dee2862219fdea8cd2045d",
        "regular": "https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=1080\u0026fit=max\u0026s=efd0cad767236aae5bb586a8707e1bb9",
        "small": "https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=400\u0026fit=max\u0026s=1b8c67f61ce3c4fb38a884d5aae80ea0",
        "thumb": "https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=200\u0026fit=max\u0026s=89498bd1f283e9538ddc9a4af4349e7b"
    },
    "categories": [{
        "id": 2,
        "title": "Buildings",
        "photo_count": 22897,
        "links": {
            "self": "https://api.unsplash.com/categories/2",
            "photos": "https://api.unsplash.com/categories/2/photos"
        }
    }],
    "links": {
        "self": "https://api.unsplash.com/photos/j0g8taxHZa0",
        "html": "http://unsplash.com/photos/j0g8taxHZa0",
        "download": "http://unsplash.com/photos/j0g8taxHZa0/download",
        "download_location": "https://api.unsplash.com/photos/j0g8taxHZa0/download"
    }
}, {
    "id": "VowIFDxogG4",
    "created_at": "2016-08-09T15:29:11-04:00",
    "width": 4554,
    "height": 3036,
    "color": "#0F0D0E",
    "likes": 319,
    "liked_by_user": false,
    "user": {
        "id": "TrMEfNqww7s",
        "username": "lucabravo",
        "name": "Luca Bravo",
        "first_name": "Luca",
        "last_name": "Bravo",
        "portfolio_url": "https://instagram.com/lucabravo/",
        "bio": "UX designer, front-end web developer \u0026 photographer based in Italy",
        "location": "Italy",
        "total_likes": 37,
        "total_photos": 62,
        "total_collections": 3,
        "profile_image": {
            "small": "https://images.unsplash.com/profile-1458934555026-c6894696aef8?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32\u0026s=267041f293cf4291360fd4f875ff3784",
            "medium": "https://images.unsplash.com/profile-1458934555026-c6894696aef8?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64\u0026s=2b6d08783149a8680a2554908a404655",
            "large": "https://images.unsplash.com/profile-1458934555026-c6894696aef8?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128\u0026s=2a5e5d19d3f2f246394e5f429396e1f7"
        },
        "links": {
            "self": "https://api.unsplash.com/users/lucabravo",
            "html": "http://unsplash.com/@lucabravo",
            "photos": "https://api.unsplash.com/users/lucabravo/photos",
            "likes": "https://api.unsplash.com/users/lucabravo/likes",
            "portfolio": "https://api.unsplash.com/users/lucabravo/portfolio",
            "following": "https://api.unsplash.com/users/lucabravo/following",
            "followers": "https://api.unsplash.com/users/lucabravo/followers"
        }
    },
    "current_user_collections": [],
    "urls": {
        "raw": "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
        "full": "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026s=56f8eace7f764eef746da8deb5e22162",
        "regular": "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=1080\u0026fit=max\u0026s=69c92348e4f2efabe7624cf46c5d3ba7",
        "small": "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=400\u0026fit=max\u0026s=f35954d7955b2e59c230571e3cd152ad",
        "thumb": "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-0.3.5\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=200\u0026fit=max\u0026s=0c44aaf13b74d4741dd98c5e783b5875"
    },
    "categories": [{
        "id": 4,
        "title": "Nature",
        "photo_count": 54184,
        "links": {
            "self": "https://api.unsplash.com/categories/4",
            "photos": "https://api.unsplash.com/categories/4/photos"
        }
    }],
    "links": {
        "self": "https://api.unsplash.com/photos/VowIFDxogG4",
        "html": "http://unsplash.com/photos/VowIFDxogG4",
        "download": "http://unsplash.com/photos/VowIFDxogG4/download",
        "download_location": "https://api.unsplash.com/photos/VowIFDxogG4/download"
    }
}]

 var memory_array = []
// savedApi.forEach(function (element, i, arr) {
//     memory_array.push(element.urls.thumb)
//     memory_array.push(element.urls.thumb)
// })





var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function () {
    var i = this.length,
        j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function newBoard() {

     console.log('ran')
    tiles_flipped = 0;
    var output = '';
    memory_array.memory_tile_shuffle();
    for (var i = 0; i < memory_array.length; i++) {
        output += '<div id="tile_' + i + '" onclick="memoryFlipTile(this,\'' + memory_array[i] + '\')" ></div>';

    }
   //document.getElementById('memory_board').innerHTML = output;
}

function memoryFlipTile(tile, val) {
     console.log('ran')
    if (tile.innerHTML == "" && memory_values.length < 2) {
        if(val.includes('http') == true){
        tile.style.background = `url(${val})`;
        tile.style.backgroundSize = 'cover'}
        else {
        tile.style.background = 'paleturquoise'
        tile.innerHTML = val;}
        if (memory_values.length == 0) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
        } else if (memory_values.length == 1) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
            if (memory_values[0] == memory_values[1] && document.getElementById(memory_tile_ids[0]) != document.getElementById(memory_tile_ids[1] )) {
                tiles_flipped += 2;
                // Clear both arrays
                memory_values = [];
                memory_tile_ids = [];
                // Check to see if the whole board is cleared
                    console.log(tiles_flipped)
                
                if (tiles_flipped == 20) {
                    console.log('ran')
                    var answer = confirm("Board cleared... would you like to play again?");
                    if (answer) {
                        // if yes
                        location.reload();
                    } else {
                        
                    }
                    document.getElementById('memory_board').innerHTML = "";
                    newBoard();
                    
                }
            } else {
                function flip2Back() {
                     console.log('ran')
                    // Flip the 2 tiles back over
                    var tile_1 = document.getElementById(memory_tile_ids[0]);
                    var tile_2 = document.getElementById(memory_tile_ids[1]);
                    tile_1.style.background = 'url(rock.jpg)';
                    tile_1.style.backgroundSize = 'cover'
                    tile_1.innerHTML = "";
                    tile_2.style.background = 'url(rock.jpg)';
                    tile_2.style.backgroundSize = 'cover'
                    tile_2.innerHTML = "";
                    // Clear both arrays
                    memory_values = [];
                    memory_tile_ids = [];
                    
                }
                setTimeout(flip2Back, 900);
            }
        }
    }
}
newBoard()
