const createMenuContent = () => {
  const menuContent = document.createElement("div");
  menuContent.appendChild(
    createSalad(
      "Ceaser Salad",
      "Romaine lettuce, croutons, lemon juice, olive oil. Egg. Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper"
    )
  );

  menuContent.appendChild(
    createSalad(
      "Caprese Salad",
      "Sliced mozzarella, sliced tomatoes, sweet basil, olive oil, salt"
    )
  );

  menuContent.appendChild(
    createSalad(
      "Cobb Salad",
      "Chopped salad greens, tomato, crispy bacon, grilled or roasted chicken breast, hard-boiled eggs, avocado, chives, Roquefort cheese and red wine vinaigrette"
    )
  );

  menuContent.appendChild(
    createSalad(
      "Waldorf Salad",
      "Celery, apples, walnuts, grapes, lettuce, and mayonnaise"
    )
  );

  menuContent.appendChild(
    createSalad(
      "Greek Salad",
      "Tomatoes, cucumber, onion, feta cheese, olives, salt, origins and olive oil"
    )
  );

  menuContent.appendChild(
    createSalad(
      "Olivier Salad",
      "Diced boiled potatoes, carrots, dill pickles, peas, eggs, celeriac, onions, diced boiled chicken (or bologna sausage), tart apples, salt, pepper, mustard and mayonnaise"
    )
  );

  return menuContent;
};

function createSalad(name, igredients) {
  const salad = document.createElement("div");

  const saladName = document.createElement("h2");
  saladName.textContent = name;

  const saladIgredients = document.createElement("p");
  saladIgredients.textContent = igredients;

  salad.appendChild(saladName);
  salad.appendChild(saladIgredients);

  return salad;
}

export { createMenuContent };
