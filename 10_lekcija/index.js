"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function createUserCard(user) {
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
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(usersApiKey);
        const userData = yield response.json();
        return userData;
    });
}
function renderUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userData = yield fetchUsers();
            const userList = document.querySelector(".user-list");
            if (userList) {
                userData.forEach((user) => {
                    const userCard = createUserCard(user);
                    userList.appendChild(userCard);
                });
            }
            else {
                throw new Error("User list not found");
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
renderUsers();
const form = document.querySelector("form");
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
function createNewUser(newUser) {
    return __awaiter(this, void 0, void 0, function* () {
        fetch(usersApiKey, {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
    });
}
function changeUserName(userId, newName) {
    return __awaiter(this, void 0, void 0, function* () {
        fetch(`${usersApiKey}/${userId}`, {
            method: "PATCH",
            body: JSON.stringify({
                name: newName,
            }),
        });
    });
}
function overrideUser(userId, newUserData) {
    return __awaiter(this, void 0, void 0, function* () {
        fetch(`${usersApiKey}/${userId}`, {
            method: "PUT",
            body: JSON.stringify(newUserData),
        });
    });
}
function deleteUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        fetch(`${usersApiKey}/${userId}`, {
            method: "DELETE",
        });
    });
}
if (form && nameInput && emailInput) {
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        const userName = nameInput.value;
        const userEmail = emailInput.value;
        const newUser = {
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
