Vue.component('navbar',{
    props:{
        title:String
    },
    template:"<h3>{{title}}</h3>"
})

Vue.component('difficulty-button',{
    data:function(){return {clicked:false}},
    props:{difficulty:String},
    methods:{toggleFunction: function(){this.clicked=!this.clicked;},
            difficultySelected:function(){app.setDifficulty(this.difficulty);
            app.setFrequencies();
            app.renderKeyboard();
            app.playInterval();
            app.clearDifficultyButtons();}},
    template:"<button @click='difficultySelected'>{{difficulty}}</button>"
})

Vue.component('key',{
    props:{notename:String},
    methods:{printName:function(){
        console.log(this.notename);
    }},
    template:"<div @click='printName'>{{notename}}</div>"
})

Vue.component('play-interval-button',{
    methods:{playAgain:function(){
        app.playInterval();
    }},
    template:"<button @click='playAgain'>Play the interval again!</button>"
})

var app=new Vue({
    el:"#app",
    data:{
        mainTitle:"MusicIntervals",
        render:false,
        difficulty:String,
        frequencies:[],
        noteLabels:[],
        endingNoteFreq:[],
        startingNoteFreq:[]
    },
    methods:{setDifficulty:function(difficulty){this.difficulty=difficulty;},
clearDifficultyButtons:function(){document.getElementById("button-container").remove();},
renderKeyboard:function(){this.render=true},
setFrequencies:function(){if(this.difficulty=="easy"){
    this.frequencies=[261.63,293.66,329.63,349.23,392.00,440.00,493.88,523.25];
    console.log(this.frequencies);
    console.log(this.frequencies.length);
    this.initialiseInterval();
    this.initialiseNoteLabels();
    return;
  }
  var currentNote=261.63;
  var endingNote=523.25;
  temp=(Math.pow(2,1/12));
  if(this.difficulty=="hard"){
    currentNote=16.35;
    endingNote=7902.13;
  }
  while(currentNote<=endingNote){
      this.frequencies.push(currentNote);
      currentNote=currentNote*temp;
  }
  console.log(this.frequencies);
  console.log(this.frequencies.length);
  //this.endingNoteFreq.push(261.63);
  this.initialiseInterval();
  this.initialiseNoteLabels();
},
playInterval:function(){var audioCtx=new AudioContext();
var noteDuration=1.0;
//var endingNote=261.63;
var endingNote=this.endingNoteFreq[0]
var oscillatorNode=audioCtx.createOscillator();
var gainNode=audioCtx.createGain();
oscillatorNode.connect(gainNode)
gainNode.connect(audioCtx.destination)
gainNode.gain.value=0;
var startTime=audioCtx.currentTime;
oscillatorNode.frequency.setValueAtTime(this.startingNoteFreq[0],startTime);
oscillatorNode.start();
gainNode.gain.setValueAtTime(0,startTime);
gainNode.gain.linearRampToValueAtTime(1,startTime+noteDuration/2);
gainNode.gain.linearRampToValueAtTime(0,startTime+noteDuration);

oscillatorNode.frequency.setValueAtTime(endingNote,startTime+noteDuration);
gainNode.gain.linearRampToValueAtTime(1,startTime+noteDuration*3/2);
gainNode.gain.linearRampToValueAtTime(0,startTime+noteDuration*2);
},
initialiseInterval:function(){var index=Math.round(Math.random()*(this.frequencies.length-1));
this.endingNoteFreq.push(this.frequencies[index]);
if(this.difficulty=="easy"){
    this.startingNoteFreq.push(440);
}
else{
    var index=Math.round(Math.random()*(this.frequencies.length-1));
    this.startingNoteFreq.push(this.frequencies[index]);
}},
initialiseNoteLabels:function(){
    if(this.difficulty=="easy"){
        this.noteLabels=["C4","D4","E4","F4","G4","A4","B4"];
        return
    }
    if(this.difficulty=="medium"){
        var startingIndex=4;
    }
    else{var startingIndex=0;}
    var notes=["C","D","E","F","G","A","B"]
    for(var octave=0;octave<this.frequencies.length/12;octave++){
        for(var note=0;note<notes.length;note++){
            console.log(notes[note]+startingIndex);
            this.noteLabels.push(notes[note]+startingIndex);
            console.log(notes[note]+startingIndex+"#");
            this.noteLabels.push(notes[note]+startingIndex+"#");
        }
        startingIndex++;
    }
}
}})