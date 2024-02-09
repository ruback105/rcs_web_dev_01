const form = document.querySelector("form");

const inputFields = document.querySelectorAll("#register-form input");

if (form) {
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    (inputFields as unknown as HTMLInputElement[]).forEach((input) => {});
  });
}
