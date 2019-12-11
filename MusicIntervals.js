Vue.component('navbar',{
    props:{
        title:String,
        difficulty:String
    },
    template: "<h3>{{title}}  ({{difficulty}})</h3>"
})

Vue.component('difficulty-button',{
    data: function(){
        return {
            clicked: false
        }
    },
    props:{
        difficulty: String
    },
    methods:{
        toggleFunction: function(){
            this.clicked=!this.clicked;
            app.changeDifficulty(this.difficulty);
            app.setFrequencies(this.difficulty);
            app.renderKeyboard();
            app.clearDifficultyButtons();
        }
    },
    template:"<button @click='toggleFunction'>{{difficulty}} {{clicked ? 'ON':'OFF'}}</button>"
})

Vue.component('black-key',{
    data: function(){
        return{
            pressed: false,
            render: false
        }
    },
    props:{
        note:String
    },
    methods:{
        toggleFunction:function(){
            this.pressed=!this.pressed;
        }
    },
    template:"<div class='black_key' @click='toggleFunction'>{{note}} {{pressed ? 'ON':'OFF'}}</div>"
})

Vue.component('white-key',{
    data: function(){
        return{
            pressed: false,
            render:false
        }
    },
    props:{
        note:String
    },
    methods:{
        toggleFunction:function(){
            this.pressed=!this.pressed;
        }
    },
    template:"<div class='white_key' @click='toggleFunction'>{{note}}  {{pressed ? 'ON':'OFF'}}</div>"
})

var app=new Vue({
  el: "#app",
  data:{
    mainTitle: "Music Intervals",
    easy:"easy",
    medium:"medium",
    hard:"hard",
    chosen_difficulty:"",
    frequencies:[]
  },
  methods:{
      changeDifficulty:function(newDifficulty){
          this.chosen_difficulty=newDifficulty;
      },
      clearDifficultyButtons:function(){
          document.getElementById("easy_button").remove();
          document.getElementById("medium_button").remove();
          document.getElementById("hard_button").remove();
        },
      setFrequencies:function(difficulty){
          if(difficulty=="easy"){
            this.frequencies=[261.63,293.66,329.63,349.23,392.00,440.00,493.88,523.25];
            console.log(this.frequencies);
            console.log(this.frequencies.length);
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
              this.frequencies.push(currentNote);
              currentNote=currentNote*temp;
          }
          console.log(this.frequencies);
          console.log(this.frequencies.length);
      },
      renderKeyboard:function(){
          black_keys=document.getElementsByClassName("black_key");
          black_keys.forEach(function(currentValue){
            currentValue.render=true;
          });
          white_keys=document.getElementsByClassName("white_keys");
          white_keys.forEach(function(currentValue){
              currentValue.render=true;
          })
      }
    },
})