video="";
status="";

function preload(){
video=createVideo('');
video.hide();
}

function setup(){
canvas=createCanvas(480,380);
canvas.center();
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status = Detecting Objects";
}

function modelLoaded(){
    console.log("modelLoaded  !  !  ! (:  ");
    status=true;
   
}

function draw(){
image(video,0,0,480,380);
}