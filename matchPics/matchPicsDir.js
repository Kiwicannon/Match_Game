angular.module('app')
.directive('changeBackground',function(){
    function changeBackground(){
        var back = ['url(puppy.jpg)','url(mtn.jpg)','url(rock.jpg)','url(words.jpg)']
        return back[Math.floor(Math.random() * back.length)]
        console.log(back[Math.floor(Math.random() * back.length)])
    }
    return{
        teplateUrl: 'matchPics.html',
        restrict: 'AE',
        link: function(scope, element, attribute){
            console.log(element)
        element.on('click',function(){
               for(var i = 0; i < 21; i++){
           element.getElementById(memory_tile_ids[i]).css('background', changeBackground())}
           })
            
        }
    }

})