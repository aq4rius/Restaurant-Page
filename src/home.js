const createHomeContent = () => {
  const homeContent = document.createElement("div");
  const description = document.createElement("p");
  description.textContent =
    "Welcome to Salads Paradise, where healthy eating meets delicious flavors. Our mission is to provide our customers with fresh, nutritious, and flavorful salads that satisfy both their taste buds and their wellness goals. Whether you're a health enthusiast, a foodie, or someone who simply loves salads, Salads Paradise is the perfect destination for you.";
  homeContent.appendChild(description);

  return homeContent;
};

export { createHomeContent };
