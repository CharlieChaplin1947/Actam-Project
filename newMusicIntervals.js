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

var app=new Vue({
    el:"#app",
    data:{
        mainTitle:"MusicIntervals",
        render:false,
        difficulty:String,
        frequencies:[],
    },
    methods:{setDifficulty:function(difficulty){this.difficulty=difficulty;},
clearDifficultyButtons:function(){document.getElementById("button-container").remove();},
renderKeyboard:function(){this.render=true},
setFrequencies:function(){if(this.difficulty=="easy"){
    this.frequencies=[261.63,293.66,329.63,349.23,392.00,440.00,493.88,523.25];
    console.log(this.frequencies);
    console.log(this.frequencies.length);
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
},
playInterval:function(){var audioCtx=new AudioContext();
var noteDuration=1.0;
var endingNote=261.63;
var oscillatorNode=audioCtx.createOscillator();
var gainNode=audioCtx.createGain();
oscillatorNode.connect(gainNode)
gainNode.connect(audioCtx.destination)
gainNode.gain.value=0;
var startTime=audioCtx.currentTime;
oscillatorNode.frequency.setValueAtTime(440,startTime);
oscillatorNode.start();
gainNode.gain.setValueAtTime(0,startTime);
gainNode.gain.linearRampToValueAtTime(1,startTime+noteDuration/2);
gainNode.gain.linearRampToValueAtTime(0,startTime+noteDuration);

oscillatorNode.frequency.setValueAtTime(endingNote,startTime+noteDuration);
gainNode.gain.linearRampToValueAtTime(1,startTime+noteDuration*3/2);
gainNode.gain.linearRampToValueAtTime(0,startTime+noteDuration*2);
}
}
})