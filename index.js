// Get references to the button and textarea elements
const firstButton = document.getElementById('first-button');
const myTextarea = document.getElementById('myTextarea');
const secondButton = document.getElementById('second-button');
const ixiImg = document.getElementById('ixi');
const ixiText = document.getElementById('ixiText');
const jackImage = document.getElementById('jack');
const bananaImage = document.getElementById('banana');
const jackBananaImage = document.getElementById('jackbanana');
const caption = document.querySelector("figcaption");
const thirdButton = document.getElementById('third-button');
const pukeText = document.getElementById('puke');
const spinningImage = document.getElementById('spinningImage');

spinningImage.addEventListener("click", function () {
    if (spinningImage.style.display === "none") {
        spinningImage.style.display = "inline";
    } else {
        spinningImage.style.display = "none";
    }
})

// Add a click event listener to the button
firstButton.addEventListener('click', function() {
    // Toggle the visibility of the textarea
    if (myTextarea.style.display === 'none' || myTextarea.style.display === '') {
        myTextarea.style.display = 'block'; // Show the textarea
    } else {
        myTextarea.style.display = 'none'; // Hide the textarea
    }
});

secondButton.addEventListener('click', function() {
    if (ixiImg.style.display === 'none' || ixiImg.style.display === '') {
        ixiImg.style.display = 'block';
    } else {
        ixiImg.style.display = 'none';
    }
    if (ixiText.style.display === 'none' || ixiText.style.display === '') {
        ixiText.style.display = 'block';
    } else {
        ixiText.style.display = 'none';
    }
})

thirdButton.addEventListener('click', function () {
    if (pukeText.style.display === 'none' || pukeText.style.display === '') {
        pukeText.style.display = 'block';
    } else {
        pukeText.style.display = 'none';
    }
})

bananaImage.addEventListener("click", function () {
    jackImage.style.display = "none";
    bananaImage.style.display = "none";
    caption.style.display = "none";
    jackBananaImage.style.display = "inline-block";
})