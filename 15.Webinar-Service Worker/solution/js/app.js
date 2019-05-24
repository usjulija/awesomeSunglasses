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
const gallery = document.getElementById("gallery");
//2. Using forEach method create divs with class item and appropriate content, hint index.html has one card created
cardsArray.forEach(card => {
  //create div with class item
  const item = document.createElement("div");
  item.classList.add("item");
  //create div with class item-heading, it should have two children: <h1> with class name and <p> with class price
  const heading = document.createElement("div");
  heading.classList.add("item-heading");
  heading.innerHTML = `
    <h1 class="name">${card.name}</h1>
    <p class="price">${priceConverter(card.price)}</p>
  `;
  //append heading to the item
  item.appendChild(heading);
  //create image with class item-img
  const image = document.createElement("img");
  image.classList.add("item-img");
  image.src = card.imgUrl;
  image.alt = "sunglasses";
  //append image to item
  item.appendChild(image);
  //create div with class item-description, it has to have two children: <div> with class rating and <p> with short text
  const description = document.createElement("div");
  description.classList.add("item-description");
  //hint  to add <div> with class rating use addStars function
  const ratingStars = addStars(card.rating);
  const paragraph = document.createElement("p");
  paragraph.innerHTML = card.shortDescription;
  description.appendChild(ratingStars);
  description.appendChild(paragraph);
  //append description to item
  item.appendChild(description);
  //create div with class item-buttons, the div should have two children: <button> with class openModal and <button> with class addToCart; both buttons should have data-key attribute eaual to id
  const buttons = document.createElement("div");
  buttons.classList.add("item-buttons");
  buttons.innerHTML =`
    <button class="openModal" data-key=${card.id}>More Info</button>
    <button class="addToCart" data-key=${card.id}>Add To Cart</button>
  `;
  //append buttons to item
  item.appendChild(buttons);
  //append item to the gallery
  gallery.appendChild(item);
});

//TODO count the items in the cart
//1.Grab the element with id cartCounter
const cartCounter = document.getElementById("cartCounter");
//2.Create a variable that will store the counted number
let counter = 0;
//3. Create a funcion that would increase the variable by one
function counterFunc(event) {
  counter ++;
  cartCounter.innerHTML = counter;
  addItemsToCart(event.target.dataset.key);
}
//4.grab all the buttons with class "addToCart" and add event listener
document.querySelectorAll(".addToCart").forEach(button => button.addEventListener("click", counterFunc));

//TODO make the cart section visible when cart button is clicked
//1.Grab the element with id cartButton
const cartButton = document.getElementById("cartButton");
//2.Grab the element with class cartSection
const cartSection = document.querySelector(".cartSection");
//3.Create a function that would: if the cartSection does not contain class visible - add it
//if the cartSection has class visible - remove it
function toggeleCartVisibility() {
  if (cartSection.classList.contains("visible")) {
    cartSection.classList.remove("visible");
  } else {
    cartSection.classList.add("visible");
  }
}
//4.add event listener to the cartButton
cartButton.addEventListener("click", toggeleCartVisibility);
//TODO add items to the cart section
//1.Grab element with id cartGallery
const cartGallery = document.getElementById("cartGallery");
//2.Create function addItemsToCart that:
//- takes an id as the argument
function addItemsToCart(id) {
  //- filters the cardsArray based on the provided id
  const newItem = cardsArray.filter(card => card.id == id);
  console.log(newItem);
  //- creates new div element with class cart-item. This element has to have 4 children:
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `
    <img src=${newItem[0].imgUrl} alt="sunglasses">
    <p>${newItem[0].name}</p>
    <p>${priceConverter(newItem[0].price)}</p>
    <button onclick="removeCartItem(event.target)" aria-label="close button"><i class="fa fa-close"></i></button>
  `;
  //--image
  //--paragraph with name
  //--paragraph with price
  //--button with icon X
  cartGallery.appendChild(cartItem);
}
//(hint: the function should be invoked from the counter function, in order to grab the id you kan use e.target.dataset.key)

//TODO remove items from the cart section
//1. create removeCartItem function, the function should start when the button with icon X in the cart section is clicked
//the functon should get the clicked element as the argument
function removeCartItem(element) {
  //-decrease the counter variable by one, update what is shown on the page
  counter --;
  cartCounter.innerHTML = counter;
  //-grab the parent of the clicked element, and store it to itemToRemove variable
  const itemToRemove = element.parentNode.parentNode;
  //-remove the itemToRemove from cartGallery
  cartGallery.removeChild(itemToRemove);
}

//TODO make the modal appear
//1. Grab the element with id modal
const modal = document.getElementById("modal");
//2. Create a function that adds visible class to the modal
//find all focusable elements on the page
const focusableElementsString = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex='0'], [contenteditable]";
function modalVisible(event) {
  modal.classList.add("visible");
  //select all the focusable elements on the page
  const focusableElements = modal.querySelectorAll(focusableElementsString);

  //solution using tabIndex
  //focusableElements.forEach(button => button.tabIndex = "-1");
  //modal.querySelectorAll(focusableElementsString).forEach(modalButton => modalButton.tabIndex = "0");

  //solution using .focus()
  const focusableElementsArray = Array.from(focusableElements);
  const firstTabStop = focusableElementsArray[0];
  const lastTabStop = focusableElementsArray[focusableElementsArray.length - 1];

  //drives focus to the first button
  firstTabStop.focus();
  //for each focusable element in the modal add event listener and call trapKey function
  focusableElementsArray.forEach(button => button.addEventListener("keydown", (e)=> trapKey(e, firstTabStop, lastTabStop)));

  updateModal(event.target.dataset.key);
}
//3. Grab all the buttons with class openModal and add event listener to them
document.querySelectorAll(".openModal").forEach(button => button.addEventListener("click", modalVisible));

//traps the tab within the modal
function trapKey(event, firstTabStop, lastTabStop) {
  //if tab is pressed
  if (event.keyCode === 9) {
    //if it is pressed with shift
    if (event.shiftKey) {
      //and if the user has reached the top of the modal
      if (document.activeElement === firstTabStop) {
        event.preventDefault(); //prevent defaul action
        lastTabStop.focus(); //and drive focus to the last focussable element in the modal
      }
    } else { //if the user did not press shift
      //and has reached the bottom of the modal
      if (document.activeElement === lastTabStop) {
        event.preventDefault();//prevent defaul action
        firstTabStop.focus();//and drive focus to the first focussable element in the modal
      }
    }
  }
}

//TODO close the modal
//1.Grab the element with id closeModal
const closeModal = document.getElementById("closeModal");
//2.Create a function that would remove the class visible from the modal
function hideModal() {
  modal.classList.remove("visible");
  //document.querySelectorAll(focusableElementsString).forEach(button => button.tabIndex = "0");
}
//3.Add event listener to the button
closeModal.addEventListener("click", hideModal);

//TODO update the modal content
//1. create a function that would take modal id as the argument
function updateModal(id) {
  //(hint: the function should be invoked from openModal function, in order to grab the id you kan use e.target.dataset.key)
  //-filters the cardsArray based on the id
  const newItem = cardsArray.filter(card => card.id == id);
  //-changes the source of image with id modalImg
  document.getElementById("modalImg").src = newItem[0].imgUrl;
  //-changes the content of paragraph with id modalPrice
  document.getElementById("modalPrice").innerHTML = priceConverter(newItem[0].price);
  //-changes the content of heading with id modalName
  document.getElementById("modalName").innerHTML = newItem[0].name;
  //changes the content of paragraph with id modalText
  document.getElementById("modalText").innerHTML = newItem[0].longDescription;
}

//Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoianVsbGlpIiwiYSI6ImNqdnhxZnM4MDA3Njg0YXFodjFpa2t2ajgifQ.134Av5h2PrHz9b3rnYFriQ';
const map = new mapboxgl.Map({
  container: 'mapContainer', //container for the map id
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [25.28333, 54.68333], //coordinates [lng, lat]
  zoom: 9 //starting zoom
});

const popup = new mapboxgl.Popup()
.setHTML('<h3>Our Awesome Store!</h3>');

const popup2 = new mapboxgl.Popup()
.setHTML('<h3>Our Awesome Partners!</h3>');

let customMark = document.createElement("div");
customMark.className = "marker";

new mapboxgl.Marker(customMark)
  .setLngLat([25.28333, 54.68333])
  .setPopup(popup)
  .addTo(map);

const marker2 = new mapboxgl.Marker()
  .setLngLat([25.291518, 54.686668])
  .setPopup(popup2)
  .addTo(map);

map.addControl(new mapboxgl.NavigationControl());

const inputs = document.getElementById("map-menu").querySelectorAll("input");

function switchStyle(styleName) {
  const styleId = styleName.target.id;
  map.setStyle('mapbox://styles/mapbox/' + styleId);
}

inputs.forEach(input => input.addEventListener("click", switchStyle));


//Service worker registration
if ('serviceWorker' in navigator) {
    window.addEventListener("load", function() {
      console.log("CLIENT: Service Worker registration in progress");
      navigator.serviceWorker.register("./sw.js").then(function(registration) {
        console.log("CLIENT: Service Worker registration complete, with scope:", registration.scope);
      }, function(error) {
        console.log("CLIENT: Service Worker registration failed, error:", error);
      });
    });
} else {
  console.log("CLIENT: Service Worker is not supported");
}
