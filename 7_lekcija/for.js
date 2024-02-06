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

for (let i = 0; i < telefoni.length; i++) {
  if (
    telefoni[i] === "Apple" ||
    telefoni[i] === "Nokia" ||
    telefoni[i] === "Motorola"
  ) {
    continue;
  }
  console.log(telefoni[i]);
}

for (let i = 9; i > -100; i--) {
  //   console.log(i);
}
