const loadMeals = () => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};
loadMeals();

const displayMeals = (meals) => {
  // console.log(meals);
  const allMeal = document.getElementById("allMeal");
  meals.forEach((meal) => {
    console.log(meal);
    const allmealDiv = document.createElement("div");
    allmealDiv.classList.add("col");
    allmealDiv.innerHTML = `
    
    <div class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">
        This is a longer card with supporting text below as a
        natural lead-in to additional content. This content is a
        little bit longer.
      </p>
    </div>
  </div>
    
    `;
    allMeal.appendChild(allmealDiv);
  });
};
