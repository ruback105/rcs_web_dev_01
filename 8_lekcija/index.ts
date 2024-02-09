// const aboutMeSection = document.getElementById("about-me");
// const contactMeSection = document.getElementsByClassName("contact-me")[0];

// const aboutMeSection = document.querySelector("#about-me");
// const contactMeSection = document.querySelector(".contact-me");

// const firstDescriptionElement =
//   document.querySelector<HTMLElement>("p.description");
// const descriptionElements = document.querySelectorAll("p.description");

// if (firstDescriptionElement) {
//   firstDescriptionElement.classList.toggle("selected");

//   firstDescriptionElement.parentElement?.remove();
// }

type Dog = {
  name: string;
  price: number;
  imgSrc: string;
};

function createDog(dogInfo: Dog) {
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
  dogsWrapper?.append(dogCard);
}

const dogsInfo: Dog[] = [
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

const dogsWrapper = document.querySelector<HTMLElement>("div.dogs");

if (dogsWrapper) {
  Array.from(dogsWrapper.children as unknown as HTMLElement[]).forEach(
    (dogCard) => {}
  );
}
