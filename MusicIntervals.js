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
            app.clearDifficultyButtons();
        }
    },
    template:"<button @click='toggleFunction'>{{difficulty}} {{clicked ? 'ON':'OFF'}}</button>"
})

var app=new Vue({
  el: "#app",
  data:{
    mainTitle: "Music Intervals",
    easy:"easy",
    medium:"medium",
    hard:"hard",
    chosen_difficulty:""
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
    },
})