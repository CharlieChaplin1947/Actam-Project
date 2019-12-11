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
        frequencies:[]
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
  console.log(this.frequencies.length);}}
})