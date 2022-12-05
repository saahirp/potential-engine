cocossdstatus = "";
function comeback(){
    window.location = "index.html";
}
function preload(){
    loadImage("EA351E6F-494B-4274-A8AF-801575D61511.jpeg");
}
function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}
function draw(){

}
function modelLoaded(){
    cocossdstatus = "true";
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}