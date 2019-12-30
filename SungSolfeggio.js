Vue.component('navbar',{
    props:{
        title:String
    },
    template:"<h3>{{title}}</h3>"
})

var app=new Vue({
    el:"#app",
    data:{
        scoresheet_width:300,
        scoresheet_heigth:150,
        frequencies:[],
        generatedNotes:[],
        noteLabels:[]
    },
    methods:{
        initialiseFrequencies: function(){
            this.frequencies=[261.63,293.66,329.63,349.23,392.00,440.00,493.88];
        },
        generateSolfeggio: function(){
            var i;
            for(i=0;i<8;i++){
                this.generatedNotes.push(this.frequencies[Math.round(Math.random()*(this.frequencies.length-1))]);
            }
            console.log(this.generatedNotes);
        },
        initialiseLabels: function(){
            this.noteLabels=["C","D","E","F","G","A","B"];
        }
    }
})

scoresheet=document.querySelector("#scoresheet");
ctx=scoresheet.getContext("2d");
x=app.scoresheet_width;
y=100;
noteNumber=0;
vx=1;
vy=0;

function draw(){
    requestAnimationFrame(draw);
    ctx.beginPath();
    ctx.clearRect(0,0,app.scoresheet_width,app.scoresheet_heigth);
    ctx.arc(x,app.scoresheet_heigth/7,app.scoresheet_heigth/7/2,0,2*Math.PI);
    var i;
    for (i=1;i<6;i++){
        ctx.moveTo(0,app.scoresheet_heigth/7*i);
        ctx.lineTo(app.scoresheet_width,app.scoresheet_heigth/7*i);
        ctx.stroke();
    }
    x-=vx;
}

function drawSolfeggio(){
    requestAnimationFrame(drawSolfeggio);
    ctx.beginPath();
    ctx.clearRect(0,0,app.scoresheet_width,app.scoresheet_heigth);
    var noteSize=app.scoresheet_heigth/7/2;
    if(noteNumber<8){
        var index=app.frequencies.indexOf(app.generatedNotes[noteNumber]);
        ctx.arc(x,app.scoresheet_heigth-index*noteSize-noteSize*2,noteSize,0,2*Math.PI);
        ctx.stroke();
        x-=vx;
        console.log(app.noteLabels[index]);
    };
    if(x==0){
        noteNumber++;
        x=app.scoresheet_width;
    };
    var i;
    for (i=1;i<6;i++){
        ctx.moveTo(0,app.scoresheet_heigth/7*i);
        ctx.lineTo(app.scoresheet_width,app.scoresheet_heigth/7*i);
        ctx.stroke();
    };
}

app.initialiseFrequencies();
app.generateSolfeggio();
app.initialiseLabels();

drawSolfeggio();