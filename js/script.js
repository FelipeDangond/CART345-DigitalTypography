$(function()
{
  var video = $('body > video')[0],
	  cvs = document.createElement('canvas'),
	  ctx = cvs.getContext('2d');

  navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

  navigator.getMedia({ video: !0, audio: !1 }, function(stream)
  {
    if(navigator.mozGetUserMedia)
      video.mozSrcObject = stream;
    else
    {
      var vu = window.URL || window.webkitURL;
      video.src = vu.createObjectURL(stream);
    }
    video.play();
  }, function(error)
  {
    if(window.console)
      console.error(error);
  });

  video.addEventListener('canplay', function(ev)
  {
    if(!streaming)
    {
      height = video.videoHeight / (video.videoWidth / width);
      video.setAttribute('width', width);
      video.setAttribute('height', height);
      streaming = !0;
    }
  }, !1);


});


$(document).ready(function() {

  let d3 = new Date();
  let startTime = d3.getTime();
  let timePassed =0;
  // setTimeout(function(){
  //

  //
  //
  //
  //
  //
  // }, 3000);

  // dots is an array of Dot objects,
  // mouse is an object used to track the X and Y position
     // of the mouse, set with a mousemove event listener below
  var dots = [],
      mouse = {
        x: 0,
        y: 0
      };

  // The Dot object used to scaffold the dots
  var Dot = function() {
    this.x = 0;
    this.y = 0;
    this.node = (function(){
      var n = document.createElement("div");
      n.className = "trail";
      document.body.appendChild(n);
      return n;
    }());
  };
  // The Dot.prototype.draw() method sets the position of
    // the object's <div> node
  Dot.prototype.draw = function() {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
  };

  // Creates the Dot objects, populates the dots array
  for (var i = 0; i < 12; i++) {
    var d = new Dot();
    dots.push(d);
  }

  // This is the screen redraw function
  function draw() {
    // Make sure the mouse position is set everytime
      // draw() is called.
    var x = mouse.x,
        y = mouse.y;

    // This loop is where all the 90s magic happens
    dots.forEach(function(dot, index, dots) {
      var nextDot = dots[index + 1] || dots[0];

      dot.x = x;
      dot.y = y;
      dot.draw();
      x += (nextDot.x - dot.x) * .6;
      y += (nextDot.y - dot.y) * .6;

    });
  }

  addEventListener("mousemove", function(event) {
    //event.preventDefault();
    mouse.x = event.pageX;
    mouse.y = event.pageY;
  });

  // animate() calls draw() then recursively calls itself
    // everytime the screen repaints via requestAnimationFrame().
  function animate() {

    draw();
    requestAnimationFrame(animate);
  }

  // And get it started by calling animate().
  animate();






addEventListener("mousemove", function(event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});


  let aStart =false;
  let bStart =false;
  let cStart =false;
  let dStart =false;
  let eStart =false;
  let fStart =false;
  let gStart =false;
  let hStart =false;

    /*animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
    animateDiv('.e');
    animateDiv('.f');
    animateDiv('.g');
    animateDiv('.h');*/

    var aTarget = makeNewPosition();
    var bTarget = makeNewPosition();
    var cTarget = makeNewPosition();
    var dTarget = makeNewPosition();
    var eTarget = makeNewPosition();
    var fTarget = makeNewPosition();
    var gTarget = makeNewPosition();
    var hTarget = makeNewPosition();

    requestAnimationFrame(run);
var time = 6;

function makeNewPosition(){
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() -100;
    var w = $(window).width() - 100;

    var nh = Math.floor(Math.random() * h) + 25;
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}
function run(){
  let d2 = new Date();
  let currentTime = d2.getTime();
  timePassed = currentTime -startTime;
  console.log(timePassed);

  if(timePassed<60000){
    if(
    $('.a').css('display') == 'none' &&
    $('.b').css('display') == 'none' &&
    $('.c').css('display') == 'none' &&
    $('.d').css('display') == 'none' &&
    $('.e').css('display') == 'none' &&
    $('.f').css('display') == 'none' &&
    $('.g').css('display') == 'none' &&
    $('.h').css('display') == 'none'

  )
    {
      console.log("ALL HIDDEN");
      $( "p" ).hide();

    }
  }


  if(aStart ===false){
    animateClass(".a",aTarget);
  }
if(bStart ===false){
animateClass(".b",bTarget);
}
if(cStart ===false){
animateClass(".c",cTarget);
}
if(dStart ===false){
  animateClass(".d",dTarget);
}
if(eStart ===false){
animateClass(".e",eTarget);
}
if(fStart ===false){
animateClass(".f",fTarget);
}
if(gStart ===false){
  animateClass(".g",gTarget);
}
if(hStart ===false){
animateClass(".h",hTarget);
}
//  console.log($(".a").position().top);

//  (".a").position().left+=diffY/time;

  requestAnimationFrame(run);
}

function animateClass(className,targetTest){
  let diffY = (targetTest[0]-$(className).position().top);
  let diffX = (targetTest[1]-$(className).position().left);
  //(".a").position().top+=diffX/time;
  $(className).css({top: $(className).position().top+=(diffY/time), left: $(className).position().left+=(diffX/time), position:'absolute'});


  if(Math.abs(diffX)<1 && Math.abs(diffY)<1){
    if(className ==='.a')
    {
    aTarget = makeNewPosition();
   }

   if(className ==='.b')
   {
   bTarget = makeNewPosition();
  }

  if(className ==='.c')
  {
  cTarget = makeNewPosition();
 }
 if(className ==='.d')
 {
 dTarget = makeNewPosition();
}

if(className ==='.e')
{
eTarget = makeNewPosition();
}

if(className ==='.f')
{
fTarget = makeNewPosition();
}
if(className ==='.g')
{
gTarget = makeNewPosition();
}

if(className ==='.h')
{
hTarget = makeNewPosition();
}



  }
}

// collision detection
var collisionOffset = 60;


$( function() {
$( '.a'  ).draggable({
  start:function(){
    console.log("startDrag");
    aStart =true;
  },
    stop:function( event, ui ) {
     var dropped = $(this).offset();
     var target = $("#I").offset();
     if ((Math.abs(dropped.left - target.left) <= collisionOffset + 100)) {
       $( ".a" ).hide();
       $( "#1" ).html("<p class='poem'> Notre nous n’existe que dans le supposé, au sommet du sommet")
   } else{
       aStart =false;
      // animateDiv('.a');

    }
    }
});


$( '.b'  ).draggable({
  start:function(){
    console.log("startDrag");
    bStart =true;
  },
    stop:function( event, ui ) {
     var dropped2 = $(this).offset();
     var target2 = $("#D").offset();
     if ((Math.abs(dropped2.left - target2.left) <= collisionOffset + 100)) {
       $( ".b" ).hide();

       $( "#2" ).html("<p class='poem'> Comment peut-on ériger un bâtiment sur un sol tumultueux? <br> Comment peut-on construire avec des outils muables </p>")
    }
    else{
        bStart =false;
       // animateDiv('.a');

     }
    }
});



$( '.c'  ).draggable({

    start:function(){
      console.log("startDrag");
      cStart =true;
    },
    stop:function( event, ui ) {
     var dropped3 = $(this).offset();
     var target3 = $("#E").offset();
     if ((Math.abs(dropped3.left - target3.left) <= collisionOffset + 100)) {
       $( ".c" ).hide();
       $( "#3" ).html("<p class='poem'>La moitié de la moitié, la somme de l’addition des sommes")
    }
    else{
        cStart =false;

     }
    }
});


$( '.d'  ).draggable({
  start:function(){
    console.log("startDrag");
    dStart =true;
  },
    stop:function( event, ui ) {
     var dropped4 = $(this).offset();
     var target4 = $("#N").offset();
     if ((Math.abs(dropped4.left - target4.left) <= collisionOffset + 100)) {
       $( ".d" ).hide();
       $( "#4" ).html("<p class='poem'>Nous sommes molles <br> Nous; les plusieurs versions de nous")
    }

    else{
        dStart =false;

     }
    }
});


$( '.e'  ).draggable({
  start:function(){
    console.log("startDrag");
    eStart =true;
  },
    stop:function( event, ui ) {
     var dropped5 = $(this).offset();
     var target5 = $("#T").offset();
     if ((Math.abs(dropped5.left - target5.left) <= collisionOffset + 100)) {
       $( ".e" ).hide();
       $( "#5" ).html("<p class='poem'>Nous ne savons que dans l’incompris")
    }
    else{
        eStart =false;

     }
    }
});


$( '.f'  ).draggable({
  start:function(){
    console.log("startDrag");
    fStart =true;
  },
    stop:function( event, ui ) {
     var dropped6 = $(this).offset();
     var target6 = $("#I").offset();
     if ((Math.abs(dropped6.left - target6.left) <= collisionOffset + 100)) {
       $( ".f" ).hide();
       $( "#6" ).html("<p class='poem'>Nous sommes frais, nous sommes mûres. <br> Par-ci, par-là, à un moment ou à un autre")
    }
    else{
        fStart =false;

     }
    }
});


$( '.g'  ).draggable({
  start:function(){
    console.log("startDrag");
    gStart =true;
  },
    stop:function( event, ui ) {
     var dropped = $(this).offset();
     var target = $("#T2").offset();
     if ((Math.abs(dropped.left - target.left) <= collisionOffset + 100)) {
       $( ".g" ).hide();
       $( "#7" ).html("<p class='poem'>Nous sommes frais, nous sommes mûres.<br> Par-ci, par-là, à un moment ou à un autre")
    }
    else{
        gStart =false;

     }
    }
});


$( '.h'  ).draggable({
  start:function(){
    console.log("startDrag");
    hStart =true;
  },
    stop:function( event, ui ) {
     var dropped = $(this).offset();
     var target = $("#E2").offset();
     if ((Math.abs(dropped.left - target.left) <= collisionOffset + 100)) {
       $( ".h" ).hide();
       $( "#8" ).html("<p class='poem'>Des fragments infinitésimals se reflétants les un les autres")
    }
    else{
        hStart =false;

     }
    }
});

$()

});


} );
