import { getLocalStorage, setLocalStorage } from "./utils.mjs";

const a = document.querySelector(".list");
a.innerHTML = ``;
function addProductToList(event) {
    const eventList = getLocalStorage("so-events") || [];
    eventList.push(event)
    setLocalStorage("so-events", eventList)
}
function renderCartContents() {
    const cartItems = getLocalStorage("so-events") || [];
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    a.innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
    const newItem = `<li class="cart-card divider">
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
</li>`;
    return newItem;
}
let ev = {
    "Name": "newEvent",
    "Date": "N/A",
    "FinalMovie": "???",
    "MovieList": ["The+Peanuts+movie", "Up", "luca", "Ice+Age"]
}

addProductToList(ev)
renderCartContents()
