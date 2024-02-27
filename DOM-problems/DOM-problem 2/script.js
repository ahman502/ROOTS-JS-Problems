function showURL() {                                                         // function declaration
    let link = document.getElementById("link").getAttribute("href");         // first, I get the element with the id of 'link' then I get the attribute of 'href' of that element and assign it to link variable
    document.getElementById("p2").innerHTML = link;                          // Next, I get the paragraph element using it's id of 'p2' and assign the link variable's content to it
}                                                                   