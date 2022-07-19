img="";
status="";
object=[];
function preload(){
    img=loadImage("room.jpg");
}
function setup(){
    canvas=createCanvas(700,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(700,500);
    
        model1=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="objects are detecting";
}
function modelloaded(){
    console.log("model has been loaded");
    status=true;


}
function draw(){
    image(video,0,0,700,500);
    if(status!=""){
        r=random(255);
        g=random(255);
        b=random(255);
        model1.detect(video,gotresults)
   for ( counter = 0; counter < object.length; counter++) {
    document.getElementById("status").innerHTML="status : objects are Detected";
    document.getElementById("n1").innerHTML="the number of objects detected are "+object.length;
    fill(r,g,b);
    glass=floor(object[counter].confidence*100);
    text(object[counter].label +" "+glass+"%",object[counter].x+15,object[counter].y+15);
    noFill();
    stroke(r,g,b);
    rect(object[counter].x,object[counter].y,object[counter].width,object[counter].height);
    
   }
    }
  

}
function gotresults(error,results){
    if(error){
    console.log(error)
    }
    console.log(results);
    object=results;
   }