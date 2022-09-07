nosex = 0
nosey = 0

function preload() {
lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on ('pose' , gotPoses);
}

function modelLoaded() {
  console.log("PoseNet is initialized");
  }

function gotPoses(results){
if (results.leangth > 0);
{
  nosex = results[0].pose.nose.x-20;
  nosey = results[0].pose.nose.y+20;
  console.log ("results");
  console.log(" nosex = " + nosex);
  console.log("nosey = " + nosey);
}
  }

function draw() {
image(video,0,0,300,300);
image(lipstick,nosex, nosey, 50,30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}