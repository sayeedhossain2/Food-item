const loadMeals = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};
loadMeals("a");

const displayMeals = (meals) => {
  console.log(meals);
  const allMeal = document.getElementById("allMeal");
  allMeal.innerHTML = "";
  meals.forEach((meal) => {
    const allmealDiv = document.createElement("div");
    allmealDiv.classList.add("col");
    allmealDiv.innerHTML = `
    
    <div onclick="loadMealDetails('${meal.idMeal}')" class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">
        ${meal.strInstructions.slice(0, 150)}
      </p>
    </div>
  </div>
    
    `;
    allMeal.appendChild(allmealDiv);
  });
};

const foodSearch = () => {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;
  loadMeals(inputText);
  inputField.value = "";
};

const loadMealDetails = (code) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => mealDetails(data.meals[0]));
};

const mealDetails = (details) => {
  const mealDetails = document.getElementById("mealDetails");
  mealDetails.innerHTML = "";
  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("card");
  detailsDiv.innerHTML = `
          <img src="${details.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">NAME:  ${details.strMeal}</h5>
              <h6 class="card-title">ID:  ${details.idMeal}</h6>
             
              <a href="#" class="btn btn-primary">Order Now</a>
            </div>
  `;
  mealDetails.appendChild(detailsDiv);
};
