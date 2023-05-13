import { createHomeContent } from "./home";

const initialPage = (container, main, handleTabSwitch) => {
  //HEADER
  const header = document.createElement("header");
  header.classList.add("header");

  const title = document.createElement("h1");
  title.classList.add("title");

  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");

  title.textContent = "Salads Paradise";

  const list = document.createElement("ul");
  list.classList.add("nav-list");

  const listElement1 = document.createElement("li");
  const listElement2 = document.createElement("li");
  const listElement3 = document.createElement("li");

  header.appendChild(title);
  header.appendChild(navbar);
  navbar.appendChild(list);
  list.appendChild(listElement1);
  list.appendChild(listElement2);
  list.appendChild(listElement3);

  listElement1.textContent = "Home";
  listElement2.textContent = "Menu";
  listElement3.textContent = "Contact";

  listElement1.addEventListener("click", handleTabSwitch);
  listElement2.addEventListener("click", handleTabSwitch);
  listElement3.addEventListener("click", handleTabSwitch);

  //MAIN
  main.appendChild(createHomeContent());

  //FOOTER
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.classList.add("copyright");

  copyright.textContent = "Copyright Aq4rius";
  footer.appendChild(copyright);
  //footer content

  container.appendChild(header);
  container.appendChild(main);
  container.appendChild(footer);
};

export { initialPage };
