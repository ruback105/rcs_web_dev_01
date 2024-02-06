const telefoni = [
  "Apple",
  "Samsung",
  "Huawei",
  "Lg",
  "Sony",
  "Xiaomi",
  "Nokia",
  "Motorola",
  "OnePlus",
  "Google",
];

// const telefoniArMazuBurtu = [];

// telefoni.forEach((telefons) => {
//   const telefonsArMazuBurtu = telefons.toLocaleLowerCase();
//   telefoniArMazuBurtu.push(telefonsArMazuBurtu);
// });

// console.log(telefoniArMazuBurtu);

const telefoniArMazuBurtu = telefoni.map((telefons) => {
  const telefonsArMazuBurtu = telefons.toLocaleLowerCase();

  return telefonsArMazuBurtu;
});

console.log(telefoniArMazuBurtu);
