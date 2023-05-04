import { initialPage } from "./page-load";
import { createHomeContent } from "./home";
import { createMenuContent } from "./menu";
import { createContactContent } from "./contact";

const container = document.querySelector("#content");
const main = document.createElement("main");

const handleTabSwitch = (event) => {
  const clickedTab = event.target.textContent;

  main.innerHTML = "";

  switch (clickedTab) {
    case "Home":
      main.appendChild(createHomeContent());
      break;
    case "Menu":
      main.appendChild(createMenuContent());
      break;
    case "Contact":
      main.appendChild(createContactContent());
      break;
    default:
      break;
  }
};

initialPage(container, main, handleTabSwitch);
