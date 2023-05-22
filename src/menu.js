const createMenuContent = () => {
  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content");

  menuContent.appendChild(
    createSalad(
      "Caeser Salad",
      "Romaine lettuce, croutons, lemon juice, olive oil. Egg. Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper",
      "images/Caesar.png"
    )
  );

  menuContent.appendChild(
    createSalad(
      "Caprese Salad",
      "Sliced mozzarella, sliced tomatoes, sweet basil, olive oil, salt",
      "images/Caprese.png"
    )
  );

  menuContent.appendChild(
    createSalad(
      "Cobb Salad",
      "Chopped salad greens, tomato, crispy bacon, grilled or roasted chicken breast, hard-boiled eggs, avocado, chives, Roquefort cheese and red wine vinaigrette",
      "images/Cobb.png"
    )
  );

  menuContent.appendChild(
    createSalad(
      "Waldorf Salad",
      "Celery, apples, walnuts, grapes, lettuce, and mayonnaise",
      "images/Waldorf.png"
    )
  );

  menuContent.appendChild(
    createSalad(
      "Greek Salad",
      "Tomatoes, cucumber, onion, feta cheese, olives, salt, origins and olive oil",
      "images/Greek.png"
    )
  );

  menuContent.appendChild(
    createSalad(
      "Olivier Salad",
      "Diced boiled potatoes, carrots, dill pickles, peas, eggs, celeriac, onions, diced boiled chicken (or bologna sausage), tart apples, salt, pepper, mustard and mayonnaise",
      "images/Olivier.png"
    )
  );

  return menuContent;
};

function createSalad(name, igredients, imgSrc) {
  const salad = document.createElement("div");
  salad.classList.add("salad-div");

  const saladName = document.createElement("h2");
  saladName.classList.add("salad-name");
  saladName.textContent = name;

  const saladIgredients = document.createElement("p");
  saladIgredients.classList.add("salad-igredients");
  saladIgredients.textContent = igredients;

  const saladImg = document.createElement("img");
  saladImg.classList.add("salad-img");
  saladImg.src = imgSrc;
  saladImg.alt = name;
  saladImg.width = 150;

  salad.appendChild(saladName);
  salad.appendChild(saladIgredients);
  salad.appendChild(saladImg);

  return salad;
}

export { createMenuContent };
