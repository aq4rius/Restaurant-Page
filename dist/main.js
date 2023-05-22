(()=>{"use strict";const e=()=>{const e=document.createElement("div");e.classList.add("home-content");const t=document.createElement("p");return t.classList.add("description"),t.textContent="Welcome to Salads Paradise, where healthy eating meets delicious flavors. Our mission is to provide our customers with fresh, nutritious, and flavorful salads that satisfy both their taste buds and their wellness goals. Whether you're a health enthusiast, a foodie, or someone who simply loves salads, Salads Paradise is the perfect destination for you!",e.appendChild(t),e};function t(e,t,a){const n=document.createElement("div");n.classList.add("salad-div");const s=document.createElement("h2");s.classList.add("salad-name"),s.textContent=e;const d=document.createElement("p");d.classList.add("salad-igredients"),d.textContent=t;const i=document.createElement("img");return i.classList.add("salad-img"),i.src=a,i.alt=e,i.width=150,n.appendChild(s),n.appendChild(d),n.appendChild(i),n}const a=document.querySelector("#content"),n=document.createElement("main");n.classList.add("main"),((t,a,n)=>{const s=document.createElement("header");s.classList.add("header");const d=document.createElement("h1");d.classList.add("title");const i=document.createElement("nav");i.classList.add("navbar"),d.textContent="Salads Paradise";const o=document.createElement("ul");o.classList.add("nav-list");const l=document.createElement("li"),c=document.createElement("li"),r=document.createElement("li");s.appendChild(d),s.appendChild(i),i.appendChild(o),o.appendChild(l),o.appendChild(c),o.appendChild(r),l.textContent="Home",c.textContent="Menu",r.textContent="Contact",l.addEventListener("click",n),c.addEventListener("click",n),r.addEventListener("click",n),a.appendChild(e());const p=document.createElement("footer");p.classList.add("footer");const m=document.createElement("p");m.classList.add("copyright"),m.textContent="Copyright Aq4rius",p.appendChild(m),t.appendChild(s),t.appendChild(a),t.appendChild(p)})(a,n,(a=>{const s=a.target.textContent;switch(n.innerHTML="",s){case"Home":n.appendChild(e());break;case"Menu":n.appendChild((()=>{const e=document.createElement("div");return e.classList.add("menu-content"),e.appendChild(t("Caeser Salad","Romaine lettuce, croutons, lemon juice, olive oil. Egg. Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper","/dist/images/Caesar.png")),e.appendChild(t("Caprese Salad","Sliced mozzarella, sliced tomatoes, sweet basil, olive oil, salt","/dist/images/Caprese.png")),e.appendChild(t("Cobb Salad","Chopped salad greens, tomato, crispy bacon, grilled or roasted chicken breast, hard-boiled eggs, avocado, chives, Roquefort cheese and red wine vinaigrette","/dist/images/Cobb.png")),e.appendChild(t("Waldorf Salad","Celery, apples, walnuts, grapes, lettuce, and mayonnaise","/dist/images/Waldorf.png")),e.appendChild(t("Greek Salad","Tomatoes, cucumber, onion, feta cheese, olives, salt, origins and olive oil","/dist/images/Greek.png")),e.appendChild(t("Olivier Salad","Diced boiled potatoes, carrots, dill pickles, peas, eggs, celeriac, onions, diced boiled chicken (or bologna sausage), tart apples, salt, pepper, mustard and mayonnaise","/dist/images/Olivier.png")),e})());break;case"Contact":n.appendChild((()=>{const e=document.createElement("div");e.classList.add("contact-content");const t=document.createElement("p");t.classList.add("phone"),t.textContent="📞 123 456 789";const a=document.createElement("p");a.classList.add("address"),a.textContent="🏠 Salads Paradise, 123 Main Street, Greenville, CA 90210";const n=document.createElement("img");return n.src="/dist/images/map.jpg",n.alt="Salads Paradise location",e.appendChild(t),e.appendChild(a),e.appendChild(n),e})())}}))})();