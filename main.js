var song_1 = ""
var song_2 = ""

function preload(){

song_1 = loadSoud("music.mp3")
song_2 = loadSoud("music2.mp3")

}

function setup(){
canvas = createCanvas(600,500)

canvas.center();

video = createCapture(VIDEO);
video.hide();


posenet = ml5.poseNet(webcam, modelLoaded)
posenet.on('pose',gotPoses )
}

function draw(){

    image(video,0,0,600,500)

}