let sampleArray = [                                                                // test array
   {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book 
     of The Hunger Games', libraryID: 3245}
];

sampleArr.sort((a, b) => {                                                        // using array sort function
  
  if(a.title > b.title) {                                                         // if the title value of a is greater than b's title value, we return 1 so a's title is placed after b's title
    return 1;
  }
  if(a.title < b.title) {                                                         // if the title value of a is lesser than b's title value, we return -1 so a's title is placed before b's title
    return -1;
  }
  else {                                                                          // if both title values are the same, they remain in their position
    return 0;
  }
});

console.log(sampleArray);                                                         // I print the sorted array



/*    OUTPUT               


[[object Object] {
  author: "Suzanne Collins",
  libraryID: 3245,
  title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
  author: "Bill Gates",
  libraryID: 1254,
  title: "The Road Ahead"
}, [object Object] {
  author: "Steve Jobs",
  libraryID: 4264,
  title: "Walter Isaacson"
}]




*/
