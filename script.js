// Get references to the image and audio elements
const cowImage = document.getElementById('cow');
const cowSound = document.getElementById('cow-sound');
const sheepImage = document.getElementById('sheep');
const sheepSound = document.getElementById('sheep-sound');
const pigImage = document.getElementById('pig');
const pigSound = document.getElementById('pig-sound');
const chickenImage = document.getElementById('chicken');
const chickenSound = document.getElementById('chicken-sound');

// Add click event listeners to the images

cowImage.addEventListener('click', function() {
    cowSound.play();
});

sheepImage.addEventListener('click', function() {
    sheepSound.play();
});

pigImage.addEventListener('click', function() {
    pigSound.play();
});

chickenImage.addEventListener('click', function() {
    chickenSound.play();
});
