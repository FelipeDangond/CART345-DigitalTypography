
// function used to get a random element out of an array
function getRandomElement(array) {
  return (array[Math.floor(Math.random() * array.length)]);
}


$(document).ready(function() {


  function blink_text() {
    $('#blink').fadeOut(500);
    $('#blink').fadeIn(500);
}
setInterval(blink_text, 100);


  function blink_text2() {
    $('#blink2').fadeOut(200);
    $('#blink2').fadeIn(200);
}
setInterval(blink_text2, 300);



  function blink_text3() {
    $('#blink3').fadeOut(1000);
    $('#blink3').fadeIn(1000);
}
setInterval(blink_text3, 500);






  $( function() {



     $( 'p' ).draggable();
     $( 'img' ).draggable();
   } );


  $('p').click(function () {
      var randomVoice = ['UK English Male','UK English Female','US English Female','Spanish Female','French Female', 'Italian Female', 'Greek Female', 'Australian Female'];
      var voice = getRandomElement(randomVoice);
      var voiceParameters = {
        pitch: Math.floor(Math.random() * 5),
        rate: Math.floor(Math.random() * 10)/10,
        volume: 1
      }
        // When a word is moused over, just use responsive voice to speak
        // its text (e.g. the word itself)
        responsiveVoice.speak($(this).text(),voice,voiceParameters);
      });


      $('p').hover(function () {


          var randomVoice = ['UK English Male','UK English Female','US English Female','Spanish Female','French Female', 'Italian Female', 'Greek Female', 'Australian Female'];
          var voice = getRandomElement(randomVoice);
          var voiceParameters = {
            pitch: Math.floor(Math.random() * 5),
            rate: Math.floor(Math.random() * 10)/10,
            volume: 1
          }
            // When a word is moused over, just use responsive voice to speak
            // its text (e.g. the word itself)
            responsiveVoice.speak($(this).text(),voice,voiceParameters);
          });


          $('h1').hover(function () {


              var randomVoice = ['UK English Male','UK English Female','US English Female'];
              var voice = getRandomElement(randomVoice);
              var voiceParameters = {
                pitch: Math.floor(Math.random() * 1),
                rate: Math.floor(Math.random() * 5)/5,
                volume: 1
              }
                // When a word is moused over, just use responsive voice to speak
                // its text (e.g. the word itself)
                responsiveVoice.speak($(this).text(),voice,voiceParameters);
              });
});
