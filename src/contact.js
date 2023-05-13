const createContactContent = () => {
  const contactContent = document.createElement("div");
  contactContent.classList.add("contact-content");

  const phone = document.createElement("p");
  phone.classList.add("phone");

  phone.textContent = "123 456 789";

  const address = document.createElement("p");
  address.classList.add("address");

  address.textContent =
    "Salads Paradise, 123 Main Street, Greenville, CA 90210";

  contactContent.appendChild(phone);
  contactContent.appendChild(address);
  return contactContent;
};

export { createContactContent };
