const createContactContent = () => {
  const contactContent = document.createElement("div");

  const phone = document.createElement("p");
  phone.textContent = "123 456 789";

  const address = document.createElement("p");
  address.textContent =
    "Salads Paradise, 123 Main Street, Greenville, CA 90210";

  contactContent.appendChild(phone);
  contactContent.appendChild(address);
  return contactContent;
};

export { createContactContent };
