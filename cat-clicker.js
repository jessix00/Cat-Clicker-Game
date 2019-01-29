//MODEL - Includes an array of 
//cat objects with properties for name, click count, and image URL with description
var catModel = {
    currentCat: null,
    cats: [{
            clickCount: 0,
            name: 'Mr.Paws',
            imgSrc: 'images/cat.jpg',
            alt: 'cat photo'
        },
        {
            clickCount: 0,
            name: 'Purrfecto',
            imgSrc: 'images/cat-Two.jpg',
            alt: 'cat photo'

        },
        {
            clickCount: 0,
            name: 'Meowster',
            imgSrc: 'images/cat-Three.jpg',
            alt: 'cat photo'
        },
        {
            clickCount: 0,
            name: 'Birdie',
            imgSrc: 'images/cat-Four.jpg',
            alt: 'cat photo'
        },
        {
            clickCount: 0,
            name: 'Mittens',
            imgSrc: 'images/cat-Five.jpg',
            alt: 'cat photo'
        }
    ]
}



//VIEW ONE - List of cats with a render function and a click handler for the list area



//VIEW TWO - List of Images with a render function and click handler



//OCTOPUS - does the following
// tells view to render list
//tells view to render images
// changes current cat in model - tells model to render
// keeps track of clicks by running a method first in model, then in view
// If new cat is clicked, changes model so current cat is set to clicked 
//object and tells view to re-render

// //List Creator
// function listGenerator(i) {

//     for (var i = 0; i < catNames.length; i++) {
//         var e = catNames[i];
//         console.log(e);
//         (function(currentCats) {
//            return document.getElementById('catList').innerHTML = `<li> <a href="#"> ${currentCats} </a></li>`;
//         });
//         (e);
//     }
// };


// // var getListItem = document.getElementById('catList').innerHTML = `<li class="classListStyle"> <a href="#"> ${catNames} </a></li>`;
// // // var generateList = getListItem.innerHTML = `<li> <a href="#"> ${catNames[0]} </a></li>`;

// //Adds images to our HTML Document
// function imageCreator() {
//     //target the parent element.
//     var photoTarget = document.getElementById("catPhotos");
//     //create an image element
//     var catImage = document.createElement("img");
//     catImage.setAttribute("src", cats[3]);
//     // photoTarget.setAttribute("class", "what ever class names");
//     photoTarget.appendChild(catImage);
// }
// imageCreator();

// //Creates text under our H1 
// function nameCreator() {
//     catNamesHTML = document.getElementById('catNames').innerHTML = catNames[3];
//     return catNamesHTML
// }
// nameCreator();
// function clickTracker() {
//     counterOne = document.getElementById('counterOne');
//     counterTwo = document.getElementById('counterTwo');
//     let clickCounter1 = 0;
//     let clickCounter2 = 0;
//     function clickerOne() {
//         counterOne.innerHTML = ` ${clickCounter1 += 1}`;
//     }
//     function clickerTwo() {
//         counterTwo.innerHTML = ` ${clickCounter2 += 1}`;
//     }
// }
// clickTracker();