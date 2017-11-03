function setup() {
  createCanvas(350,240);
  background(51);
  video = createCapture(VIDEO);
  video.size(350,240);
  //video.hide();
}

function draw() {
  tint(255,0,150);
  image(video,0,0,width,height):
}
