const matt = {
    firstName: 'Matt',
    lastName: 'Bickell',
    age: 26,
    isVegetarian: false,
    hobbies: ['Witchcraft', 'Wizardy', 'Hufflepuff memorabilia']
}
const shea = {
    firstName: "Shea",
    lastName: "Murphy",
    age: 27,
    isVegetarian: true,
    hobbies: ["JS", "Telling people I'm VEGAN"]
}
const ollie = {
    firstName: "Ollie",
    lastName: "Holden",
    age: 27,
    isVegetarian: true,
    hobbies: ["naming furniture", "Eating Leon bouquet of chicken"]
}
const coaches = [shea, matt, ollie];


// LOG OUT WHETHER OLLIE IS VEGGIE

console.log(coaches[2].isVegetarian);

// LOG OUT MATT'S SECOND HOBBY

console.log(coaches[1].hobbies[1]);

// LOG OUT ALL OF SHEA'S HOBBIES

console.log(coaches[0].hobbies);
