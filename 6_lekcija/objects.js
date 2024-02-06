"use strict";
const me = {
    name: "Artūrs",
    surname: "Puško",
    age: 24,
    job: "fe dev",
};
const phone = {
    brand: "Samsung",
    model: "iPhone 12",
    color: "black",
    memory: 128,
    price: 499,
    available: false,
    camera: {
        front: 12,
        back: 12,
        features: ["portrait", "night mode", "panorama"],
    },
};
const carBrand = "Audi";
switch (carBrand) {
    case "Audi":
        console.log("Audi");
        break;
    case "BMW":
        console.log("BMW");
        break;
    case "Mercedes":
        console.log("Mercedes");
        break;
    case "Volkswagen":
        console.log("Volkswagen");
        break;
    case "Volvo":
        console.log("Volvo");
        break;
    case "Tesla":
        console.log("Tesla");
        break;
    default:
        console.log("Unknown");
}
// if (carBrands === "Audi") {
//   console.log("Audi");
// } else if (carBrands === "BMW") {
//   console.log("BMW");
// } else if (carBrands === "Mercedes") {
//   console.log("Mercedes");
// } else if (carBrands === "Volkswagen") {
//   console.log("Volkswagen");
// } else if (carBrands === "Volvo") {
//   console.log("Volvo");
// } else if (carBrands === "Tesla") {
//   console.log("Tesla");
// } else {
//   console.log("Unknown");
// }
