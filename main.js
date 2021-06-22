function setup(){

canvas = createCanvas(500,350)
canvas.position(500,300)
video = createCapture(VIDEO)
video.hide()
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/c6qbHxGES/model.json",modelloaded)
}
function modelloaded(){

console.log("model loaded successfully")

}
//https://teachablemachine.withgoogle.com/models/c6qbHxGES/
function draw() { 
    image(video,0,0,500,350)

classifier.classify(video,gotResult)

}

function gotResult(error,result){

if(error){console.error(error)}

else {

console.log(result)
document.getElementById("OName").innerHTML=result[0].label;
document.getElementById("AName").innerHTML=result[0].confidence.toFixed(3)

}

}