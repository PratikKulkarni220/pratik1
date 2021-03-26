leftHandX = "";
rightHandX = "";

leftHandY = "";
rightHandY = "";
music ="";
music_1 = "";

function preload(){
    music =loadSound("music.mp3");
    music_1 =loadSound('music_2.mp3');
}


function setup(){
    canvas = createCanvas(780, 600);

    canvas.position(440, 400);

     video = createCapture(VIDEO);

     video.hide();
}

function draw(){
    image(video, 0 , 0 , 780 , 600);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("Your PoseNet Model has loaded! you are ready to go");
}

function gotPoses(resluts){
    if (resluts.length > 0){
      lefthandX = resluts[0].pose.leftWrist.x;
      lefthandY = resluts[0].pose.leftWrist.y;

      righthandY = resluts[0].pose.rightWrist.y;
      righthandY = resluts[0].pose.rightWrist.x;

      console.log("LeftHandx=" + leftHandX + "LeftHandY="+ leftHandY);
      console.log("rightHandx=" + rightHandX + "rightHandY="+ rightHandY);
    }
}

function play(){

    if(rightHandY>=500 && rightHandY<=600){
        music.play();
        music.rate(2);
        music.volume(1); 
    }else if(rightHandY<=300 && rightHandY>=450){
        music_1.play();
        music_1.rate(2);
        music_1.volume(1);  
    }
}