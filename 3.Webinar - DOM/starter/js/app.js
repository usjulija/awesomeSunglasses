//the array of objects holding the data for the store cards
const cardsArray = [
  {
    name: "Beauty",
    imgUrl: "./images/beauty.jpg",
    price: 2299,
    longDescription: "The awesome sunglassess will make your day brighter!👓 You are going to see the World from the better side!🌟 You are going to feel like a rock-star!😎 You may be even taken to Hollywood!👌 Buy our sunglasses and follow your dreams!🚀⚡",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 4,
    id: 1
  }, {
    name: "Dreams",
    imgUrl: "./images/dreams.jpg",
    price: 2599,
    longDescription: "The awesome sunglassess will make your day brighter!👓 You are going to see the World from the better side!🌟 You are going to feel like a rock-star!😎 You may be even taken to Hollywood!👌 Buy our sunglasses and follow your dreams!🚀⚡",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 3,
    id: 2
  }, {
    name: "Inspiration",
    imgUrl: "./images/inspiration.jpg",
    price: 3599,
    longDescription: "The awesome sunglassess will make your day brighter!👓 You are going to see the World from the better side!🌟 You are going to feel like a rock-star!😎 You may be even taken to Hollywood!👌 Buy our sunglasses and follow your dreams!🚀⚡",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 5,
    id: 3
  }, {
    name: "Motivation",
    imgUrl: "./images/motivation.jpg",
    price: 1599,
    longDescription: "The awesome sunglassess will make your day brighter!👓 You are going to see the World from the better side!🌟 You are going to feel like a rock-star!😎 You may be even taken to Hollywood!👌 Buy our sunglasses and follow your dreams!🚀⚡",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 3,
    id: 4
  }, {
    name: "Chance",
    imgUrl: "./images/chance.jpg",
    price: 1989,
    longDescription: "The awesome sunglassess will make your day brighter!👓 You are going to see the World from the better side!🌟 You are going to feel like a rock-star!😎 You may be even taken to Hollywood!👌 Buy our sunglasses and follow your dreams!🚀⚡",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 2,
    id: 5
  }, {
    name: "Fun",
    imgUrl: "./images/fun.jpg",
    price: 2345,
    longDescription: "The awesome sunglassess will make your day brighter!👓 You are going to see the World from the better side!🌟 You are going to feel like a rock-star!😎 You may be even taken to Hollywood!👌 Buy our sunglasses and follow your dreams!🚀⚡",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 5,
    id: 6
  }, {
    name: "Happiness",
    imgUrl: "./images/happiness.jpg",
    price: 2285,
    longDescription: "The awesome sunglassess will make your day brighter!👓 You are going to see the World from the better side!🌟 You are going to feel like a rock-star!😎 You may be even taken to Hollywood!👌 Buy our sunglasses and follow your dreams!🚀⚡",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 4,
    id: 7
  }, {
    name: "Journey",
    imgUrl: "./images/journey.jpg",
    price: 2935,
    longDescription: "The awesome sunglassess will make your day brighter!👓 You are going to see the World from the better side!🌟 You are going to feel like a rock-star!😎 You may be even taken to Hollywood!👌 Buy our sunglasses and follow your dreams!🚀⚡",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 3,
    id: 8
  }, {
    name: "Joy",
    imgUrl: "./images/joy.jpg",
    price: 2345,
    longDescription: "The awesome sunglassess will make your day brighter!👓 You are going to see the World from the better side!🌟 You are going to feel like a rock-star!😎 You may be even taken to Hollywood!👌 Buy our sunglasses and follow your dreams!🚀⚡",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 5,
    id: 9
  }
];

//function that takes the price in cents and converts it to euros
function priceConverter(cents) {
  return (cents / 100).toLocaleString("FR", {
    style: "currency",
    currency: "EUR"
  });
}

//function that adds stars based on the rating
function addStars(rating) {
  const ratingContainer = document.createElement("div");
  ratingContainer.classList.add("rating");
  //creates icons for the given rating
  for (let i = 0; i < rating; i++) {
  	const icon = document.createElement("i");
    icon.className = "fa fa-star";
    ratingContainer.appendChild(icon);
  }
  const blankStarsNumber = 5 - rating; //conts how many stars should be without color
  //creates icons for blank stars
  for (let i = 0; i < blankStarsNumber; i++) {
    const blankIcon = document.createElement("i");
    blankIcon.className = "fa fa-star-o";
    ratingContainer.appendChild(blankIcon);
  }
  return ratingContainer;
}

//TODO loop over the array of objects and create cards on the page
//1. Grab the element with id="gallery"
//2. Using forEach method create divs with class item and appropriate content, hint index.html has one card created
  //create div with class item
  //create div with class item-heading, it should have two children: <h1> with class name and <p> with class price
  //append heading to the item

  //create image with class item-img
  //append image to item

  //create div with class item-description, it has to have two children: <div> with class rating and <p> with short text
  //hint  to add <div> with class rating use addStars function
  //append description to item

  //create div with class item-buttons, the div should have two children: <button> with class openModal and <button> with class addToCart; both buttons should have data-key attribute eaual to id
  //append buttons to item
  //append item to the gallery


//TODO count the items in the cart
//1.Grab the element with id cartCounter
//2.Create a variable that will store the counted number
//3. Create a funcion that would increase the variable by one
//4.grab all the buttons with class "addToCart" and add event listener

//TODO make the cart section visible when cart button is clicked
//1.Grab the element with id cartButton
//2.Grab the element with id cartSection
//3.Create a function that would: if the cartSection does not contain class visible - add it
//if the cartSection has class visible - remove it

//4.add event listener to the cartButton

//TODO add items to the cart section
//1.Grab element with id cartGallery

//2.Create function addItemsToCart that:
//- takes an id as the argument
  //- filters the cardsArray based on the provided id
  //- creates new div element with class cart-item. This element has to have 3 children:

  //--image
  //--paragraph with name
  //--paragraph with price
  //--button with icon X
//(hint: the function should be invoked from the counter function, in order to grab the id you kan use e.target.dataset.key)

//TODO remove items from the cart section
//1. create removeCartItem function, the function should start when the button with icon X in the cart section is clicked
//the functon should get the clicked element as the argument
  //-decrease the counter variable by one, update what is shown on the page
  //-grab the parent of the clicked element, and store it to itemToRemove variable
  //-remove the itemToRemove from cartGallery

//TODO make the modal appear
//1. Grab the element with id modal
//2. Create a function that adds visible class to the modal
//3. Grab all the buttons with class openModal and add event listener to them

//TODO close the modal
//1.Grab the element with id closeModal
//2.Create a function that would remove the class visible from the modal
//3.Add event listener to the button

//TODO update the modal content
//1. create a function that would take modal id as the argument
//(hint: the function should be invoked from openModal function, in order to grab the id you kan use e.target.dataset.key)
  //-filters the cardsArray based on the id
  //-changes the source of image with id modalImg
  //-changes the content of paragraph with id modalPrice
  //-changes the content of heading with id modalName
  //changes the content of paragraph with id modalText
