
var setTimerTime = 20;// Set the Game Timer (Seconds)

var startTheGameScore;
var currentScore =0;

$( init );

//Flower and DragonFly init
function init() {
	
  $('#theDragonFly').draggable();
   
  
  $('#flower1').droppable( {
    drop: handleDropEvent1
	 
  } );
  
  $('#flower2').droppable( {
    drop: handleDropEvent2
	
  } );
  
    $('#flower3').droppable( {
    drop: handleDropEvent3
  } );
  
   $('#flower4').droppable( {
    drop: handleDropEvent4
  } );
  
   $('#flower5').droppable( {
    drop: handleDropEvent5
  } );
  
  $('#flower2').droppable('disable');
  $('#flower3').droppable('disable');
  $('#flower4').droppable('disable');
  $('#flower5').droppable('disable');
  
  
}

//Drop Event Functions 
 
function handleDropEvent1( event, ui ) {
  var draggable = ui.draggable;
	
	score(10);
	cockerl_sound();
	hideDivs('flower1');
	hideDivs('dropmedragon');
	showDivs('flower2');
	mystart();
	
	$('#flower1').droppable('disable');
	$('#flower2').droppable('enable');
	
	}

function handleDropEvent2( event, ui ) {
	var draggable = ui.draggable;

	score(20);
	parrot_sound();
	hideDivs('flower2');
	showDivs('flower3');
	
	$('#flower2').droppable('disable');
	$('#flower3').droppable('enable');
	
	}

function handleDropEvent3( event, ui ) {
	var draggable = ui.draggable;

	score(30);
	vulture_sound();
	hideDivs('flower3');
	showDivs('flower4');
	
	$('#flower3').droppable('disable');
	$('#flower4').droppable('enable');
	
	}

function handleDropEvent4( event, ui ) {
	var draggable = ui.draggable;

	score(50);
	elephant_angry_sound();
	hideDivs('flower4');
	showDivs('flower5');
	$('#flower4').droppable('disable');
	$('#flower5').droppable('enable');
	
	}

function handleDropEvent5( event, ui ) {
	var draggable = ui.draggable;
  
	score(100);
	canary_sound();
	hideDivs('flower5');
	showDivs('flower1');
	
	$('#flower5').droppable('disable');
	$('#flower1').droppable('enable');
	
	}


//Score Functions 


	
/*function score1(){

   currentScore = currentScore +10;
	
	startTheGameScore = currentScore;

  document.getElementById("score").innerHTML = ("Score <br /><br /> " + currentScore);
  
	}*/




function score(increment){

   currentScore= currentScore + increment;
   
   startTheGameScore = currentScore;

  document.getElementById("score").innerHTML = ("Score<br /><br />" + currentScore);

}


//Sounds Functions

function playSound(str, vol) {
	  var snd = new Audio();
	  snd.src = str;
	  snd.volume = vol;
	  snd.play();
	}
	
function cockerl_sound() {
	
	  playSound('./sounds/cockerl.wav', 0.5);
	}
 
function parrot_sound() {
	
	  playSound('./sounds/parrot.wav', 0.5);
	}

function vulture_sound() {
	
	  playSound('./sounds/vulture.wav', 0.5);
	}
	
function pig_sound() {
	
	  playSound('./sounds/pig.wav', 0.5);
	}
	

function elephant_angry_sound() {
	
	  playSound('./sounds/elephant_angry.wav', 0.5);
	}

function cow_moo_sound() {
	
	  playSound('./sounds/cow_moo.wav', 0.5);
	}
	
function canary_sound() {
	
	  playSound('./sounds/canary.wav', 0.5);
	}


// Hide Div

function hideDivs(myflower) {
          
              document.getElementById(myflower).style.visibility = 'hidden';
      }
	  
//Show Div	  
function showDivs(myflower) {
          
              document.getElementById(myflower).style.visibility = 'visible';
      }
	  

//Start the Game Function

function mystart() {
  
	if (startTheGameScore == 10 ) {
		showDivs('counter');
		countdown ();
		}
		}

 
 // countdown
function countdown(){
	var count = setTimerTime;
	countdown = setInterval(function(){
	$("#counter").html( "Time <br /> <br />" + count);
	if (count == 0) {
		   
		    clearInterval(countdown); 
			hideDivs('theDragonFly');
			hideDivs('flower1');
			hideDivs('flower2');
			hideDivs('flower3');
			hideDivs('flower4');
			hideDivs('flower5');
			popup_window();
			document.getElementById("finalscore").innerHTML = (currentScore);
			}
			
		count--;
	  }, 1000);
	};  
	
//Pop-up Window 
function popup_window() {
	 
      var div = document.getElementById('popup_window').style.display = 'block';
	  
	  };
	
