//model

//difficulty of the game
var difficulty="";

//frequencies from which to select notes
var frequencies=[];

//name of black keys
bKeys=['C#','D#','F#','G#','A#']

//name of white keys
wKeys=['C','D','E','F','G','A','B']

//view

//clear all initial buttons and headline
function clear_all(){
document.querySelector('#headline').remove(); elements=document.querySelectorAll("div.button");
  document.querySelector('#container').remove();
 elements.forEach(function(currentValue){
   currentValue.remove();
 },'myarg');
};

//render keyboard and some buttons
function mainRender(){
  //first the black keys
  for(var i=0;i<bKeys.length;i++){
    var key=document.createElement("div");
    key.id=bKeys[i];
    key.className='black_key';
    console.log(key); 
    document.body.appendChild(key);
    console.log(key);
  }
}


//controller

//set difficulty to easy
function setEasy(){
  difficulty="easy";
  clear_all();
  setPossibleFrequencies();
  mainRender();
}

//set difficulty to normal
function setNormal(){
  difficulty="normal";
  clear_all();
  setPossibleFrequencies();
  mainRender();
}

//set difficulty to hard
function setHard(){
  difficulty="hard";
  clear_all();
  setPossibleFrequencies();
  mainRender();
}

//initialise the frequencies array
function setPossibleFrequencies(){
  if(difficulty=="easy"){
    frequencies=[261.63,293.66,329.63,349.23,392.00,440.00,493.88,523.25];
    return;
  }
  var currentNote=261.63;
  var endingNote=523.25;
  temp=(Math.pow(2,1/12));
  if(difficulty=="hard"){
    currentNote=16.35;
    endingNote=7902.13;
  }
  while(currentNote<=endingNote){
    frequencies.push(currentNote);
    currentNote=currentNote*temp;
  }
  console.log(frequencies);
  console.log(frequencies.length);
}