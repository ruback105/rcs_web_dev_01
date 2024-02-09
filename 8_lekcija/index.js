"use strict";
// const aboutMeSection = document.getElementById("about-me");
// const contactMeSection = document.getElementsByClassName("contact-me")[0];
function createDog(dogInfo) {
    // 1 step - create a new card
    const dogCard = document.createElement("div");
    dogCard.classList.add("dog");
    dogCard.innerHTML = `
    <img src="${dogInfo.imgSrc}" alt="" />
    <div class="description">
        <h2>${dogInfo.name}</h2>
        <p>${dogInfo.price}$</p>
    </div>
  `;
    // 2 step - find wrapper, where new card will be added
    const dogsWrapper = document.querySelector("div.dogs");
    // 3 step - add new card to the wrapper
    dogsWrapper === null || dogsWrapper === void 0 ? void 0 : dogsWrapper.append(dogCard);
}
const dogsInfo = [
    {
        name: "Shiba Inu",
        price: 700,
        imgSrc: "images/shiba-inu.webp",
    },
    {
        name: "Chihuahua",
        price: 500,
        imgSrc: "images/chihuahua.jpeg",
    },
    {
        name: "Dachshund",
        price: 300,
        imgSrc: "images/dachshund-dog.webp",
    },
];
dogsInfo.forEach((dog) => {
    createDog(dog);
});
const dogsWrapper = document.querySelector("div.dogs");
if (dogsWrapper) {
    Array.from(dogsWrapper.children).forEach((dogCard) => { });
}
