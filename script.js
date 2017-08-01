if (navigator.userAgent.search("Safari") >= 0 && 
  navigator.userAgent.search("Chrome") < 0) {
  $('#robot-container').css({'margin':'0 auto 0 32vw'});
  $('#horn-1').css({'transform':'translateX(5vw)'});
  $('.drop-menu p').css({'text-align':'center',
    'margin-right':'-50%',
    'transform':'rotateY(180deg) translateX(50%) translateY(50%)'});
  $('.blur').css({'text-align':'center',
    'margin-right':'-50%',
     'transform':'rotateY(180deg)'});
 }
$(document).ready(function() {
//For binding a link to  the Robot face
  var link = 0;
//Initial tv 'channel'
function firstTv() {
  $('#subtitle-content-container div').css({'display':'none'});
  $('#pascu').css({'display':'flex'});
  createText();
  link = 1;
  $('#front-content').css({
    'background-image': 'url(rimages/head/pascu.jpg)',
    'background-size': 'cover'});
}
//Move div over text instantly - looks like delete
function deleteText() {
$('#cover-txt-1').css({'transition': '0s linear',
  'transform':'translateX(0%)'});
$('#cover-txt-2').css({'transition': '0s linear 0s',
  'transform':'translateX(0%)'});
$('#cover-txt-3').css({'transition': '0s linear 0s',
  'transform':'translateX(0%)'});
}
//Move div over text - look like typing
function createText() {
    $('#cover-txt-1').css({'transition': '3s linear',
      'transform':'translateX(100%)'});
    $('#cover-txt-2').css({'transition': '3s linear 1s',
      'transform':'translateX(100%)'});
    $('#cover-txt-3').css({'transition': '3s linear 2.2s',
      'transform':'translateX(100%)'});
};
// Robot appear
  $('#cube-container, #robot-container').css({'transform': 'translateY(0)'});
    setTimeout(function(){
      $('#furnace-tube').css({'width': '35vh'});
    }, 2000);
//Gear mechanism start
  setTimeout(function() {
    $('#gear-1').css({'animation-play-state': 'running'});
    $('#gear-2').css({'animation-play-state': 'running'});
    $('#gear-3').css({'animation-play-state': 'running'});
    $('#gear-4').css({'animation-play-state': 'running'});
    $('#gear-5').css({'animation-play-state': 'running'});
    $('#gear-6').css({'animation-play-state': 'running'});
  }, 4000);
//Robot head TV activate
  setTimeout(function() {
    $('#front-content')
      .css({'background-image': 'url(rimages/head/face.jpg)'});
  }, 4700);
//First arm movement => up
  setTimeout(function() {
    $('#right-shoulder').css({
      'transition': 'transform 1s linear',
        'transform': ' translateX(20%) translateY(-60%) rotate(-120deg)'});
    $('#right-forearm').css({
      'transition': 'transform 1s linear',
        'transform': 'translateY(90%) rotate(30deg)'});
    $('#right-hand').css({
      'transition': 'transform 1s linear',
        'transform': 'translateY(50%) rotateY(180deg) rotate(-90deg)'});
    $('#furnace-tube').css({'transition':'none'});
  }, 5500);
//Robot first head move + Body skew
  setTimeout(function() {
    $('#cube').css({
      'transition': 'transform 1s linear',
        'transform': 'rotateY(40deg) rotateX(-40deg)'+
          'translateZ(6.93vh) translateX(5vh)'});
    $('#robot-container').css({
      'transition': 'transform 1s linear',
        'transform': 'rotateY(10deg) rotateX(-10deg) translateZ(4.932835vh)'});
  }, 7000);
  setTimeout(function() {
//Arm shacking animation
    $('#right-shoulder').addClass('right-shoulder-animation');
    $('#right-hand').addClass('right-hand-animation');
    $('#right-forearm').addClass('right-forearm-animation');
//Finger hold - first half of finger
    $('#right-finger-1').css({
      'transform': 'translateY(100%) translateX(25%) rotate(-15deg)'});
    $('#right-finger-2').css({
      'transform': 'translateY(100%) translateX(30%) rotate(-2.5deg)'});
    $('#right-finger-3').css({
      'transform': 'translateY(100%) translateX(60%) rotate(2.5deg)'});
    $('#right-finger-4').css({
      'transform': 'translateY(100%) translateX(65%) rotate(15deg)'});
//Finger hold - second half of finger
    $('#right-finger-2-1').css({
      'transform': 'translateY(130%) translateX(50%) rotate(-10deg)'});
    $('#right-finger-2-2').css({
      'transform': 'translateY(130%) translateX(25%) rotate(-7.5deg)'});
    $('#right-finger-2-3').css({
      'transform': 'translateY(130%) translateX(-25%) rotate(7.5deg)'});
    $('#right-finger-2-4').css({
      'transform': 'translateY(130%) translateX(-50%) rotate(10deg)'});
  }, 8500);
//Robot looking down and reaching under the viewport
  setTimeout(function() {
    $('#cube').css({
      'transition': 'transform 1s linear',
        'transform': 'rotateY(40deg) rotateX(-60deg)'+
          'translateZ(4.93vh) translateX(5vh)'});
    $('#right-shoulder').css({
      'transition': 'transform 1s linear',
        'transform': 'translateX(20%) translateY(-60%) rotate(-60deg)'});
    $('#right-forearm').css({
      'transition': 'transform 1s linear',
        'transform': 'translateY(90%) rotate(60deg)'});
    $('#right-hand').css({
      'transition': 'transform 1s linear',
        'transform': 'translateY(50%) rotateY(180deg) rotate(0deg)'});
  }, 9500);
//DIsplay Nav menu + Robot unskew + return to initial position
  setTimeout(function() {
//Nav menu VISIBLE
    $('#rope-1').css({
      'transition': 'opacity 0.1s',
        'opacity': '1'});
    $('#cube').css({
      'transition': 'transform 1s linear',
        'transform': 'rotateY(30deg) rotateX(-30deg)'+
          'translateZ(0)  translateX(0)'});
    $('#robot-container').css({
      'transition': 'transform 1s linear',
        'transform': 'rotateY(0deg) rotateX(0deg) translateZ(0)'});
    $('#right-shoulder').css({
      'transition': 'transform 1.5s linear',
        'transform': ' translateX(20%) translateY(-60%) rotate(-150deg)'});
    $('#right-forearm').css({
      'transition': 'transform 1.5s linear',
        'transform': 'translateY(90%) rotate(30deg)'});
    $('#right-hand').css({
      'transition': 'transform 1.5s linear',
        'transform': 'translateY(50%) rotateY(180deg) rotate(-120deg)'});
  }, 11400);
//Left arm first movement
  setTimeout(function() {
    $('#left-shoulder').css({
      'transition': 'transform 1s linear',
        'transform': ' translateX(-20%) translateY(-60%) rotate(50deg)'});
    $('#left-forearm').css({
      'transition': 'transform 1s linear',
        'transform': 'translateY(90%) rotate(30deg)'});
    $('#left-hand').css({
      'transition': 'transform 1s linear',
        'transform': 'translateY(50%) rotateY(0deg) rotate(20deg)'});
//Add proper transition time for TV head
    $('#cube').css({
      'transition': 'transform 0.12s linear'});
  }, 13000);
//Left arm reach left outside viewport
  setTimeout(function() {
    $('#left-shoulder').css({
      'transition': 'transform 1s linear',
        'transform': ' translateX(-20%) translateY(-60%)'+
          'rotate(90deg) rotateX(60deg) translateZ(20px)'});
    $('#left-forearm').css({
      'transition': 'transform 1s linear',
        'transform': 'translateY(90%) rotate(0deg)'});
    $('#left-hand').css({
      'transition': 'transform 1s linear',
        'transform': 'translateY(50%) rotateY(0deg) rotate(0deg)'});
  }, 14200);
//Return left arm closer to body
  setTimeout(function() {
    $('#left-shoulder').css({
      'transform': 'translateX(-20%) translateY(-60%) rotate(50deg)'});
    $('#left-forearm').css({
      'transform': 'translateY(90%) rotate(30deg)'});
    $('#left-hand').css({
      'transform': 'translateY(50%) rotateY(0deg) rotate(20deg)'});
  }, 15400);
//Make coal piece visible
  setTimeout(function() {
    $('#coal').css({
      'opacity': '1', 'transform': 'rotateY(0deg) translateX(-75%)'});
  }, 15600);
//Flex arm
  setTimeout(function() {
    $('#left-shoulder').css({
      'transform': ' translateX(-20%) translateY(-60%) rotate(20deg)'});
    $('#left-forearm').css({
      'transform': 'translateY(90%) rotate(90deg)'});
    $('#left-hand').css({
      'transform': 'translateY(50%) rotateY(0deg) rotate(10deg)'});
    $('#robot-container').css({
      'transition': 'none'});
  }, 16600);
//Prime for throw
  setTimeout(function() {
    $('#left-shoulder').css({
      'transition': 'transform 0.5s ease',
        'transform': ' translateX(-20%) translateY(-60%)'+
          'rotate(20deg) rotateY(60deg)'});
  }, 17800);
//Throw
  setTimeout(function() {
    $('#left-shoulder').css({
      'transition': 'transform 0.2s ease',
        'transform': ' translateX(-20%) translateY(-60%)'+
          'rotate(20deg) rotateY(-30deg)'});
  }, 18320);
//Hide Coal that is bound to hand
  setTimeout(function() {
    $('#coal').css({
      'display': 'none'});
  }, 18420);
//Settle arm after throw
  setTimeout(function() {
    $('#left-shoulder').css({
      'transition': 'transform 0.2s ease',
        'transform': ' translateX(-20%) translateY(-60%) rotate(20deg)'});
    $('#coal-2').css({
      'opacity': '1'});
    $('#coal-2').addClass("coal-2-animation");
  }, 18550);
  setTimeout(function() {
    $('#coal-2').css({
      'display': 'none'});
  }, 19500);
//Bring arm near body
  setTimeout(function() {
    $('#left-forearm').css({
      'transform': 'translateY(90%) rotate(-30deg)'});
  }, 22000);

  setTimeout(function() {
    $('#subtitle-container').css({'transform':'rotateX(0deg)'});
    setTimeout(function() {
    firstTv();
  }, 1000);
//NAv bar function + movement of the head don't start at the beggining
    document.getElementById("main-container")
      .addEventListener("mousemove",function(e) {
      if (e.target == document.getElementById("main-container")) {
// calculate center with #center div
        var center = document.getElementById("center");
        var xCenter = center.offsetLeft;
        var yCenter = center.offsetTop;
// adjust deg for smaller tilt
        yoff=(e.offsetY*-1 + yCenter)/17;
        xoff=(e.offsetX - xCenter)/21.5;
// use only 2 decimals to calculate position of mouse
        y = Math.round(xoff*100)/100;
        x = Math.round(yoff*100)/100 + 5;
// check position
        cursor = y + "," + x;
// console.log(cursor);

//create string to add in transform
        x = parseInt(parseInt(x)*10/(parseInt($('body').width()/150))) + 'deg';
        y = parseInt(parseInt(y)*10/(parseInt($('body').width()/150))) + 'deg';
// rotate cube
        document.getElementById("cube")
          .style.webkitTransform = 'rotateY('+ y +
            ') rotateX('+ x +') translateZ(4.9325vh)';
      }
    });
// clear rotation on mouse over
    document.getElementById("cube").addEventListener("mouseenter",function() {
      document.getElementById("cube")
      .style.webkitTransform = 'rotateY(0) rotateX(0) translateZ(4.932835vh)';
    });
//Divs over navigation items becomes visible
    $('.drop-menu').mouseenter(function(e) {
      e.stopPropagation();
      $(this).children('.blur').css({'opacity': '0.7'});
    });
//Divs over navigation items becomes invisible
    $('.drop-menu').mouseleave(function(e) {
      e.stopPropagation();
      $(this).children('.blur').css({'opacity': '0'});
    });
//Page 1 / Page 2 of navigation
    var currentDrop = 0;




//Change 'channel' on tv head
    $('.drop-menu').click(function(e) {
      deleteText();
//Page 1
    if(currentDrop == 0 || currentDrop == 2) {
      e.stopPropagation();
      $('#front-content').css({
        'background-image': 'url(rimages/head/face.gif)'});
      setTimeout(function() {
        if ($(e.target).is('#drop-menu-1') ||
            $(e.target).is('#drop-menu-txt-1')) {
              e.stopPropagation();
              firstTv();
        } else  if ($(e.target).is('#drop-menu-2') ||
            $(e.target).is('#drop-menu-txt-2')) {
              $('#subtitle-content-container div').css({'display':'none'});
              $('#deer').css({'display':'flex'});
              createText();
              link = 2;
              e.stopPropagation();
              $('#front-content').css({
                'background-image': 'url(rimages/head/bored-deer.jpg)',
                'background-size': 'cover'});
        } else  if ($(e.target).is('#drop-menu-3') ||
            $(e.target).is('#drop-menu-txt-3'))  {
              $('#subtitle-content-container div').css({'display':'none'});
              $('#esports').css({'display':'flex'});
              createText();
              link = 3;
              e.stopPropagation();
              $('#front-content').css({
                'background-image': 'url(rimages/head/esports.jpg)',
                'background-size': 'contain'});
        } else  if ($(e.target).is('#drop-menu-4') ||
            $(e.target).is('#drop-menu-txt-4'))  {
              currentDrop = 1;
              link = 4;
              e.stopPropagation();
//Arm animation under vieport + changing content of nav + becomes page 2
                setTimeout(function() {
                  $('#right-shoulder').css({
                    'transition': 'transform 1s linear',
                      'transform': ' translateX(20%) '+
                        'translateY(-60%) rotate(-60deg)'});
                  $('#right-forearm').css({
                    'transition': 'transform 1s linear',
                      'transform': 'translateY(90%) rotate(60deg)'});
                  $('#right-hand').css({
                    'transition': 'transform 1s linear',
                      'transform': 'translateY(50%)'+
                        'rotateY(180deg) rotate(0deg)'});
                }, 10);
                setTimeout(function() {
                  $('#rope-1').css({
                    'transition': 'opacity 0.1s',
                      'opacity': '1'});
                  $('#drop-menu-txt-1,#drop-menu-txt-2,'+
                    '#drop-menu-txt-3,#drop-menu-txt-4')
                      .css({'display': 'none'});
                  $('#drop-menu-txt-1-1,#drop-menu-txt-2-2,'+
                    '#drop-menu-txt-3-3,#drop-menu-txt-4-4')
                      .css({'display': 'block'});
                  $('#drop-blur-1-1,#drop-blur-2-2,'+
                    '#drop-blur-3-3,#drop-blur-4-4')
                      .css({'display': 'block'});
                  $('#drop-blur-1,#drop-blur-2,#drop-blur-3,#drop-blur-4')
                    .css({'display': 'none'});
                }, 1110);
                  setTimeout(function() {
                  $('#right-shoulder').css({
                    'transition': 'transform 1.5s linear',
                      'transform': ' translateX(20%)'+
                        'translateY(-60%) rotate(-150deg)'});
                  $('#right-forearm').css({
                    'transition': 'transform 1.5s linear',
                      'transform': 'translateY(90%) rotate(30deg)'});
                  $('#right-hand').css({
                    'transition': 'transform 1.5s linear',
                      'transform': 'translateY(50%)'+
                        'rotateY(180deg) rotate(-120deg)'});
                  }, 2220);
              }
        }, 500);
//Page 2
      } else if (currentDrop == 1) {
        e.stopPropagation();
        $('#front-content').css({
          'background-image': 'url(rimages/head/face.gif)'});
        setTimeout(function() {
          if ($(e.target).is('#drop-menu-1')) {
            $('#subtitle-content-container div').css({'display':'none'});
            $('#mosquito').css({'display':'flex'});
            createText();
            link = 5;
            e.stopPropagation();
            $('#front-content').css({
              'background-image': 'url(rimages/head/mosq.png)',
                'background-size': 'contain'});
          } else  if ($(e.target).is('#drop-menu-2')) {
            $('#subtitle-content-container div').css({'display':'none'});
            $('#construction').css({'display':'flex'});
            createText();
            link = 6;
            e.stopPropagation();
            $('#front-content').css({
              'background-image': 'url(rimages/head/construct.jpg)',
                'background-size': 'contain'});
          } else  if ($(e.target).is('#drop-menu-3'))  {
            $('#subtitle-content-container div').css({'display':'none'});
            $('#construction').css({'display':'flex'});
            createText();
            link = 7;
            e.stopPropagation();
            $('#front-content').css({
              'background-image': 'url(rimages/head/construct.jpg)',
                'background-size': 'contain'});
          } else  if ($(e.target).is('#drop-menu-4'))  {
            currentDrop = 2;
            link = 8;
            e.stopPropagation();
//Arm animation under vieport + changing content of nav + becomes page 1
            setTimeout(function() {
              $('#right-shoulder').css({
                'transition': 'transform 1s linear',
                  'transform': ' translateX(20%)'+
                    'translateY(-60%) rotate(-60deg)'});
              $('#right-forearm').css({
                'transition': 'transform 1s linear',
                  'transform': 'translateY(90%) rotate(60deg)'});
              $('#right-hand').css({
                'transition': 'transform 1s linear',
                'transform': 'translateY(50%) rotateY(180deg) rotate(0deg)'});
            }, 10);
            setTimeout(function() {
              $('#rope-1').css({
                'transition': 'opacity 0.1s',
                  'opacity': '1'});
              $('#drop-menu-txt-1,#drop-menu-txt-2,'+
                '#drop-menu-txt-3,#drop-menu-txt-4')
                  .css({'display': 'block'});
              $('#drop-menu-txt-1-1,#drop-menu-txt-2-2,'+
                '#drop-menu-txt-3-3,#drop-menu-txt-4-4')
                  .css({'display': 'none'});
              $('#drop-blur-1-1,#drop-blur-2-2,#drop-blur-3-3,#drop-blur-4-4')
                .css({'display': 'none'});
              $('#drop-blur-1,#drop-blur-2,#drop-blur-3,#drop-blur-4')
                .css({'display': 'block'});
            }, 1110);
            setTimeout(function() {
              $('#right-shoulder').css({
                'transition': 'transform 1.5s linear',
                  'transform': ' translateX(20%)'+
                    'translateY(-60%) rotate(-150deg)'});
              $('#right-forearm').css({
                'transition': 'transform 1.5s linear',
                  'transform': 'translateY(90%) rotate(30deg)'});
              $('#right-hand').css({
                'transition': 'transform 1.5s linear',
                  'transform': 'translateY(50%)'+
                    'rotateY(180deg) rotate(-120deg)'});
            }, 2220);
          }
        }, 500);
      }
    });


//Links that open onClick Robot face in a new tab
    $('#front-content').click(function() {
      if (link == 1) {
        window.open('https://www.facebook.com/andrei.pascu.393' , '_blank')
          .focus();
      } else if (link == 2) {
        window.open ('https://andrei-pascu.github.io/deer/' , '_blank').focus();
      } else if  (link == 3)  {
        window.open('esports/index.php' , '_blank').focus();
      } else if  (link == 4)  {
        // window.open('' , '_blank').focus();
      } else if  (link == 5)  {
        window.open('https://andrei-pascu.github.io/anti-mosquito/' , '_blank').focus();
      } else if  (link == 6)  {
        window.open('' , '_blank').focus();
      } else if  (link == 7)  {
        window.open('' , '_blank').focus();
      } else if  (link == 8)  {
        window.open('' , '_blank').focus();
      } else {
      }
    });
  }, 13300);
});
//
