function preload() {
}

function setup() {
    canvas = createCanvas(1040, 880);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    circle(50, 50, 100)
    circle(990, 50, 100)
    circle(50, 830, 100)
    circle(990, 830, 100)
    rect(100, 25, 840, 50);
    rect(25, 100, 50, 680);
    rect(100, 800, 840, 50);
    rect(965, 100, 50, 680);
}

function draw() {
    image(video, 100, 90, 840, 680);
}

function take_snapshot() {
    save("student_name.png");
}