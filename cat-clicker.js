function clickTracker() {
    catPictureOne = document.getElementById('catPictureOne').onclick = function() { clickerOne() };
    catPictureTwo = document.getElementById('catPictureTwo').onclick = function() { clickerTwo() };
    counterOne = document.getElementById('counterOne');
    counterTwo = document.getElementById('counterTwo');
    let clickCounter1 = 0;
    let clickCounter2 = 0;


    function clickerOne() {
        counterOne.innerHTML = ` ${clickCounter1 += 1}`;
    }

    function clickerTwo() {
        counterTwo.innerHTML = ` ${clickCounter2 += 1}`;
    }

}

clickTracker();

//Programatically adding Cat Names to our DOM
function addTheNames() {
    //array of our cat names
    catNames = ["Kitty", "Blue"];
    //getElementsByClassName returns a HTML Collection 
    catNamesHTML = document.getElementsByClassName('catNames');
    //We have to use .item to specify what element to select since 
    //HTML Collection is not an array but a list of nodes
    catNameOnes = catNamesHTML.item(0).innerHTML = catNames[0];
    catNameTwo = catNamesHTML.item(1).innerHTML = catNames[1];
}
//calls function
addTheNames();