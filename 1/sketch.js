let song;
let peaks;
let canvasHeight;
let playButton;

function preload() {
  song = loadSound('songb.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  canvasHeight = height / 2;
  peaks = song.getPeaks(floor(5 * width));
  playButton = createButton('Play/Pause');
  playButton.position(10, 10);
  playButton.mousePressed(togglePlay);
}

function draw() {
  background(20);
  noFill();
  strokeWeight(2);

  beginShape();
  for (let i = 0; i < peaks.length; i++) {
    let x = map(i, 0, peaks.length, 0, width);
    let y = canvasHeight + peaks[i] * canvasHeight;
    stroke(255, 100, 150, 200);
    vertex(x, y);
  }
  endShape();

  noStroke();
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Static Visualization of Song Peaks", width / 2, 50);
  textSize(14);
  text("Amplitude data mapped to a waveform", width / 2, 80);
}

function togglePlay() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}