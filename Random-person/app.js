import getElement from "./utlils/getElement.js";
import getUser from "./utlils/fetchUser.js";
import displayUser from "./utlils/displayUser.js";

const btn = getElement(".btn");

// console.log(btns);

// show user
const showUser = async () => {
  //   get user from api
  //   getUser().then((data) => console.log(data));
  const person = await getUser();
  console.log(person);

  // display user
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
