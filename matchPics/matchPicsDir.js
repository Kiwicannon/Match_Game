angular.module('app')
.directive('changeBackground',function(){
    function changeBackground(){
        var back = ['url(puppy.jpg)','url(mtn.jpg)','url(rock.jpg)','url(words.jpg)']
        return back[Math.floor(Math.random() * back.length)]
    }
    return{
        teplate: '<div>Match Pics</div>',
        restrict: 'AE',
        link: function(sco, ele, atr){
           element.on('click',function(){
            element.children().css('background', changeBackground())
           })
            
        }
    }

})