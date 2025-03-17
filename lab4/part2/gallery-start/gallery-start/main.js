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
const filenames = [pic1.jpg, pic2.jpg, pic3.jpg, pic4.jpg, pic5.jpg];

/* Declaring the alternative text for each image file */
const alternativeText = ["Closeup of a human eye", "Closeup of sand", "Closeup of purple and white flowers", "Egyption drawings and hyroglyphics", "A brown butterfly"];

/* Looping through images */
for (let i = 0; i < filenames.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', filenames[i]);
    newImage.setAttribute('alt', alternativeText[i]);
    thumbBar.appendChild(newImage);   
   
}


/* Wiring up the Darken/Lighten button */
