function outputItem() {                                                                                         // function declaration
    let numOfItems = document.getElementById("drop-down").options.length;                                       // getting the length of the drop-down menu
    document.getElementById("p1").innerHTML = "There are " + numOfItems + " options in the dropdown.";          // displaying the length of the drop-down menu in p1 paragraph element
     
    let optionsArray = [];                                                                                      // declaraing an array to push drop-down menu's values to
    let options = document.getElementById("drop-down");

    for(i = 0; i < options.length; i++) {                                                                       // for loop to go through th length of the drop-down menu
        optionsArray.push(options.options[i].text);                                                             // pushing teh text of each option at each index to the array
    }
    optionsArray.toString();                                                                                    // converting the array into a string
    document.getElementById("p2").innerHTML = "Options are: " + optionsArray;                                   // displaying the string in p2 paragraph element
}