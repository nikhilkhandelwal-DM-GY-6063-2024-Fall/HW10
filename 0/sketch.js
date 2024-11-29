let song, amplitude, fft, colorPicker, slider, stars = [];

function preload() {
    song = loadSound('song.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    amplitude = new p5.Amplitude();
    fft = new p5.FFT();
    colorPicker = createColorPicker('#00ff00');
    colorPicker.position(10, 10);
    slider = createSlider(1, 10, 5);
    slider.position(10, 40);
    noStroke();

    for (let i = 0; i < 150; i++) {
        stars.push({
            x: random(width),
            y: random(height),
            size: random(1, 3),
            speed: random(0.5, 1.5),
            brightness: random(50, 150),
        });
    }

    if (!song.isPlaying()) {
        song.loop(); // Start playing the song and keep it looping
    }
}

function draw() {
    drawStarryBackground();

    let volume = amplitude.getLevel();
    let spectrum = fft.analyze();
    let circleSize = map(volume, 0, 1, 50, 300);
    let baseColor = colorPicker.color();
    fill(red(baseColor), green(baseColor), blue(baseColor), 150);
    ellipse(width / 2, height / 2, circleSize);

    for (let i = 0; i < spectrum.length; i++) {
        let angle = map(i, 0, spectrum.length, 0, TWO_PI);
        let radius = map(spectrum[i], 0, 255, 100, width / 2);
        let x = width / 2 + cos(angle) * radius;
        let y = height / 2 + sin(angle) * radius;
        fill(red(baseColor), green(baseColor), blue(baseColor), random(50, 200));
        ellipse(x, y, slider.value());
    }
}

function drawStarryBackground() {
    background(0, 50);

    let volume = amplitude.getLevel();
    for (let star of stars) {
        fill(255, star.brightness * map(volume, 0, 1, 0.5, 2));
        ellipse(star.x, star.y, star.size);

        star.y += star.speed;
        if (star.y > height) {
            star.y = 0;
            star.x = random(width);
        }
    }
}