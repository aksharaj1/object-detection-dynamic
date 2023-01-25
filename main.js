
status = "";
objects = [];

function preload(){

}
function setup(){
canvas = createCanvas(380,380);
canvas.center();
video = createCapture(VIDEO);
video.size(380,380);
video.hide();
}

function start(){
    objectdetector = ml5.objectDetector("cocossd", modelLoaded);

}

function modelLoaded(){
    console.log("Model is Loaded!");
    status = true;
    
}

function draw(){
image(video,0,0,380,380);
if(status != ""){
    r = random(255);
    g = random(255);
    b = random(255); 
objectdetector.detect(video, result);
for(i=0;i < objects.length;i++){

document.getElementById("status").innerHTML = "Status : Object Detected";
document.getElementById("number_of_objects").innerHTML = "Number of Objects Detected are = " + objects.length; 
fill(r,g,b);
percent = floor(objects[i].confidence * 100);
text(objects[i].label + "" + percent + "%",objects[i].x , objects[i].y);
noFill();
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
stroke(r,g,b);
strokeWeight(2);


}
}
}

function result(error,result){
if(error){
console.log(error);
}
else{
    console.log(result);
    objects= result;
}
}

