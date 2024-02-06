// no 1 līdz 10
for (let i = 1; i < 11; i++) {
  //   console.log(i);
}

// no 100 līdz 0
for (let i = 100; i > -1; i -= 4) {
  //   console.log(i);
}

const phones = [
  {
    model: "Galaxy S21",
    make: "Samsung",
    price: 799,
    features: ["5G", "128GB storage", "Water resistant"],
  },
  {
    model: "iPhone 12",
    make: "Apple",
    price: 699,
    features: ["5G", "64GB storage", "Face ID"],
  },
  {
    model: "Pixel 5",
    make: "Google",
    price: 699,
    features: ["5G", "128GB storage", "Night Sight"],
  },
  {
    model: "OnePlus 9",
    make: "OnePlus",
    price: 729,
    features: ["5G", "128GB storage", "Fast charging"],
  },
  {
    model: "Xperia 5 II",
    make: "Sony",
    price: 949,
    features: ["4G", "128GB storage", "High-Resolution Audio"],
  },
  {
    model: "Moto G Power",
    make: "Motorola",
    price: 249,
    features: ["4G", "64GB storage", "Battery life"],
  },
  {
    model: "Nokia 8.3",
    make: "Nokia",
    price: 479,
    features: ["5G", "64GB storage", "Zeiss optics"],
  },
  {
    model: "Xiaomi Mi 11",
    make: "Xiaomi",
    price: 749,
    features: ["5G", "128GB storage", "108MP camera"],
  },
  {
    model: "Oppo Find X3",
    make: "Oppo",
    price: 1149,
    features: ["5G", "256GB storage", "Billion color display"],
  },
  {
    model: "Huawei P40 Pro",
    make: "Huawei",
    price: 999,
    features: ["5G", "256GB storage", "50x SuperSensing Zoom"],
  },
];

// Izvadīt visus ierakstus no phones massīva
// phones.forEach((phone) => {
//   console.log(phone);
// });

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = numberArray.map((number) => {
  return number * number;
});

// console.log(newArray);

// Cena mazāka vai vienāda ar 500 eur
// const filteredPhones = phones.filter((phone) => {
//   return phone.price <= 500;
// });
// console.log(filteredPhones);

// Cena lielāka vai vienāda ar 600 UN iekšā ir 5g fīča
const filteredPhones = phones.filter((phone) => {
  const isValid = phone.price >= 600 && phone.features.includes("5G");

  return isValid;
});
console.log(filteredPhones);
