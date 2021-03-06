Vue.component('navbar',{
    props:{
        title:String
    },
    template:"<h3>{{title}}</h3>"
})

Vue.component('repeat-button',{methods:{
    repeatSolfeggio:function(){
    if(noteNumber==8){app.flag=true};
    noteNumber=0;
    x=app.scoresheet_width;}
},
    template:"<button @click='repeatSolfeggio'>Repeat current Solfeggio</button>"
})

Vue.component('generate-button',{methods:{
    newGeneration:function(){
        app.generatedNotes=[];
        app.generateSolfeggio();
        if(noteNumber==8){app.flag=true};
        noteNumber=0;
        x=app.scoresheet_width;
    }
},
template:"<button @click='newGeneration'>Generate a new Solfeggio</button>"})

var app=new Vue({
    el:"#app",
    data:{
        scoresheet_width:300,
        scoresheet_heigth:150,
        frequencies:[],
        generatedNotes:[],
        noteLabels:[],
        flag:false,
        indications:String
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

function drawSolfeggio(){
    requestAnimationFrame(drawSolfeggio);
    if(app.flag==true){
    ctx.beginPath();
    ctx.clearRect(0,0,app.scoresheet_width,app.scoresheet_heigth);
    var noteSize=app.scoresheet_heigth/7/2;
    if(noteNumber<8){
        var index=app.frequencies.indexOf(app.generatedNotes[noteNumber]);
        var noteHeigth=app.scoresheet_heigth-index*noteSize-noteSize*2;
        ctx.arc(x,noteHeigth,noteSize,0,2*Math.PI);
        ctx.stroke();
        x-=vx;
    };
    if(index==0){
        ctx.moveTo(x-20,noteHeigth);
        ctx.lineTo(x+20,noteHeigth);
        ctx.stroke();
    }
    if(x==0){
        if(noteNumber==7){app.flag=false;
        app.indications="Solfeggio finished"}
        noteNumber++;
        x=app.scoresheet_width;
    };
    var i;
    for (i=1;i<6;i++){
        ctx.moveTo(0,app.scoresheet_heigth/7*i);
        ctx.lineTo(app.scoresheet_width,app.scoresheet_heigth/7*i);
        ctx.stroke();}
    };
}

app.initialiseFrequencies();
app.generateSolfeggio();
app.initialiseLabels();

drawSolfeggio();

var audio_ctx=new AudioContext();
var source;
var analyser=audio_ctx.createAnalyser();
//the following catches stream from the microphone
const handleSuccess=function(stream){
    if(window.URL){
         var source=audio_ctx.createMediaStreamSource(stream);
         source.connect(analyser);
         app.flag=true;       
    }
    else{}
}

navigator.mediaDevices.getUserMedia({audio:true, video:false}).then(handleSuccess);

var bufferLength=analyser.frequencyBinCount;
var dataArray=new Uint8Array(bufferLength);
analyser.getByteFrequencyData(dataArray);

function clipFrequencies(array){
    var temp=new Uint8Array(array.length);
    for(var i=0;i<array.length;i++){
        var current_frequency=i/array.length*audio_ctx.sampleRate/2;
        if(current_frequency>261){
            if(current_frequency<494){
            temp[i]=array[i];}
        }
    };
    return temp;
}

function checkFrequency(){
    analyser.getByteFrequencyData(dataArray);
    dataArray=clipFrequencies(dataArray);
    var tolleranceRange=20;
    //the frequency range in the array is linear from 0 to half the sample rate of audio_ctx
    var sungFrequency=dataArray.indexOf(Math.max(...dataArray))/dataArray.length*audio_ctx.sampleRate/2;
    console.log("la frequenza cantata è:");
    console.log(sungFrequency);
    lowerLimit=app.generatedNotes[noteNumber]-tolleranceRange;
    upperLimit=app.generatedNotes[noteNumber]+tolleranceRange;
    if(sungFrequency<lowerLimit){
        if(app.flag==false){app.indications="";}
        else{
        app.indications="you have to go Higher!"}
    }else{
    if(sungFrequency>upperLimit){
        app.indications="you have to go lower!"
    }else{
        if(app.flag==false){app.indications="Solfeggio finished";}else{
        app.indications="that's exactely right!!";}
    }
        }
    
}

setInterval(checkFrequency,100);