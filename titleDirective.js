angular.module('app').directive('titleDirective', function(){
    function changeColor(){
       var colors = ['red', 'blue', 'green', 'purple', 'orange', 'yellow'] 
       return colors[Math.floor(Math.random() * colors.length)]
    }return {
            restrict: 'AE',
            template:'<div>Match Game</div>',
            link: function(scope, element, attributes){
                element.on('click',function(){
                   
                   element.children().css('background-color', changeColor())
                })
                
            }
        }
})