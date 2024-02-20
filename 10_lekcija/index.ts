type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

function createUserCard(user: User) {
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("user-card");

  const { name, username, address } = user;
  const { city, street, suite } = address;

  cardWrapper.innerHTML = `
    <div class="user-name">
        <h3>${name}</h3>
        <h6>${username}</h6>
    </div>
    <div class="user-address">
        <p>${city} - ${street} - ${suite}</p>    
    </div>
  `;

  return cardWrapper;
}

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((userData: User[]) => {
//     const userList = document.querySelector(".user-list");

//     if (userList) {
//       userData.forEach((user) => {
//         const userCard = createUserCard(user);
//         userList.appendChild(userCard);
//       });
//     }
//   })
//   .catch((error) => {
//     alert("Failed to fetch users.");
//   });

const usersApiKey = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
  const response = await fetch(usersApiKey);
  const userData: User[] = await response.json();

  return userData;
}

async function renderUsers() {
  try {
    const userData = await fetchUsers();

    const userList = document.querySelector(".user-list");
    if (userList) {
      userData.forEach((user) => {
        const userCard = createUserCard(user);
        userList.appendChild(userCard);
      });
    } else {
      throw new Error("User list not found");
    }
  } catch (error) {
    console.log(error);
  }
}

renderUsers();

const form = document.querySelector("form");
const nameInput =
  document.querySelector<HTMLInputElement>('input[name="name"]');
const emailInput = document.querySelector<HTMLInputElement>(
  'input[name="email"]'
);

async function createNewUser(newUser: User) {
  fetch(usersApiKey, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

async function changeUserName(userId: number, newName: string) {
  fetch(`${usersApiKey}/${userId}`, {
    method: "PATCH",
    body: JSON.stringify({
      name: newName,
    }),
  });
}

async function overrideUser(userId: number, newUserData: Partial<User>) {
  fetch(`${usersApiKey}/${userId}`, {
    method: "PUT",
    body: JSON.stringify(newUserData),
  });
}

async function deleteUser(userId: number) {
  fetch(`${usersApiKey}/${userId}`, {
    method: "DELETE",
  });
}

if (form && nameInput && emailInput) {
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const userName = nameInput.value;
    const userEmail = emailInput.value;

    const newUser: User = {
      id: 11,
      name: userName,
      username: "",
      email: userEmail,
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    };

    createNewUser(newUser);
  });
}
