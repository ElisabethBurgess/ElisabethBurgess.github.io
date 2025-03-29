/*
Author: Elisabeth Burgess (and MDN)
File: main.js
Date: March 17, 2025
Description: Image gallery
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const alternativeText = ["Closeup of a human eye", "Closeup of sand", "Closeup of purple and white flowers", "Egyption drawings and hyroglyphics", "A brown butterfly"];

/* Looping through images */
for (let i = 0; i < filenames.length; i++){

    const newImage = document.createElement('img');
    newImage.setAttribute('src', filenames[i]);
    newImage.setAttribute('alt', alternativeText[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", (newImage) => {
        displayedImage.setAttribute('src', filenames[i]);
        displayedImage.setAttribute('alt', alternativeText[i]);
    });   
   
}

/* Wiring up the Darken/Lighten button */

function changeMode(){
    const btnClass = btn.getAttribute("class");
    if (btnClass === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }

}

btn.addEventListener("click", changeMode);
