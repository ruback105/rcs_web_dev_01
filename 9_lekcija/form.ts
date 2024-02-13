const form = document.querySelector<HTMLFormElement>("form");

const inputFields = document.querySelectorAll<HTMLInputElement>(
  "#register-form input"
);

type InputFieldNames = "name" | "email" | "password";

const validationRules: Record<
  InputFieldNames,
  {
    required: boolean;
    minLength?: number;
    maxLength?: number;
    customValidate?: (value: string) => {
      message: string;
      valid: boolean;
    };
  }
> = {
  name: {
    required: true,
    minLength: 4,
    maxLength: 16,
  },
  email: {
    required: true,
    customValidate: (emailValue) => {
      const pattern = new RegExp(
        "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
      );
      const isValid = pattern.test(emailValue);

      return {
        message: "Please enter a valid email address",
        valid: isValid,
      };
    },
  },
  password: {
    required: true,
    customValidate: (passwordValue) => {
      const pattern = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
      );
      const isValid = pattern.test(passwordValue);

      return {
        message:
          "Password should include at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character(@$!%*?&)",
        valid: isValid,
      };
    },
  },
};

/**
 * Create error element (paragraph with error class) with message that we pass in
 *
 * @param message - Error message that will be displayed
 * @returns Created paragraph element with error class and with message
 */
function createErrorElement(message: string) {
  const errorElement = document.createElement("p");
  errorElement.classList.add("error");
  errorElement.textContent = message;

  return errorElement;
}

/**
 * Check if input fields parent has paragraph with error class
 *
 * @param inputField - Input field that we are checking
 * @returns Paragraph element with error class or null if it doesn't exist
 */
function checkIfErrorExists(inputField: HTMLInputElement) {
  const inputParent = inputField.parentElement;
  return inputParent?.querySelector("p.error");
}

/**
 * Display error message below the input field
 *
 * @param message - Error message that will be displayed
 * @param inputField - Input field that we are displaying error message for
 */
function displayError(message: string, inputField: HTMLInputElement) {
  // 1: Create error element
  const errorElement = createErrorElement(message);
  // 2: Get input fields parent, where we will append error element
  const inputParent = inputField.parentElement;

  if (inputParent) {
    // 3: Check if error element already exists
    const errorExistsAlready = checkIfErrorExists(inputField);

    if (!errorExistsAlready) {
      // 4: If all good, display error message
      inputParent.appendChild(errorElement);
    }
  }
}

if (form) {
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    (inputFields as unknown as HTMLInputElement[]).forEach((input) => {
      const inputId = input.name;

      if (inputId !== "name" && inputId !== "email" && inputId !== "password") {
        return;
      }

      const inputValidation = validationRules[inputId];
      const inputValue = input.value;

      if (inputValidation.required && !inputValue) {
        displayError("Please fill in this field!", input);
        return;
      }
      if (
        inputValidation.minLength &&
        inputValidation.minLength > inputValue.length
      ) {
        displayError(
          `This should be at least ${inputValidation.minLength} characters long`,
          input
        );
        return;
      }
      if (
        inputValidation.maxLength &&
        inputValidation.maxLength < inputValue.length
      ) {
        displayError(
          `This should be less or equal than ${inputValidation.maxLength} characters long`,
          input
        );
        return;
      }
      if (inputValidation.customValidate) {
        const { valid, message } = inputValidation.customValidate(inputValue);

        if (!valid) {
          displayError(message, input);
          return;
        }
      }
    });
  });
}

inputFields.forEach((input) => {
  input.addEventListener("input", () => {
    const errorElement = checkIfErrorExists(input);

    if (errorElement) {
      errorElement.remove();
    }
  });
});
