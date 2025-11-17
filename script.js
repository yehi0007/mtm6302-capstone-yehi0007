const dateInput = document.getElementById("dateInput");
const getApodBtn = document.getElementById("getApodBtn");

const standardImage = document.getElementById("standardImage");
const hdImage = document.getElementById("hdImage");

const titleStandard = document.getElementById("titleStandard");
const dateStandard = document.getElementById("dateStandard");
const explanationStandard = document.getElementById("explanationStandard");

const titleHd = document.getElementById("titleHd");
const dateHd = document.getElementById("dateHd");
const explanationHd = document.getElementById("explanationHd");

async function getApodByDate(date) {
  try {
    const response = await fetch("./apod_data.json");
    const data = await response.json();

    const apodItem = data.find((item) => item.date === date);
    if (!apodItem) {
      alert("No data found for this date.");
      return;
    }

    standardImage.src = apodItem.image;
    hdImage.src = apodItem.image || apodItem.image;

    titleStandard.textContent = apodItem.title;
    dateStandard.textContent = apodItem.date;
    explanationStandard.textContent = apodItem.description;
    titleHd.textContent = apodItem.title;
    dateHd.textContent = apodItem.date;
    explanationHd.textContent = apodItem.description;
  } catch (error) {
    console.error("Error fetching APOD data:", error);
  }
}

if (getApodBtn) {
  getApodBtn.addEventListener("click", () => {
    const date = dateInput.value;
    if (date) {
      getApodByDate(date);
    } else {
      alert("Please select a date.");
    }
  });
}

function addToFavorites() {
  const favorite = {
    title: titleStandard ? titleStandard.textContent : "Unknown",
    date: dateStandard
      ? dateStandard.textContent
      : new Date().toISOString().split("T")[0],
    explanation: explanationStandard ? explanationStandard.textContent : "",
    url: standardImage ? standardImage.src : "",
  };

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const exists = favorites.some((item) => item.date === favorite.date);
  if (!exists) {
    favorites.push(favorite);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Added to favorites!");
  } else {
    alert("This item is already in favorites.");
  }
}

function displayFavorites() {
  const container = document.getElementById("favoritesContainer");
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!container) return;

  if (favorites.length === 0) {
    container.innerHTML = "<p>No favorites saved.</p>";
    return;
  }

  container.innerHTML = "";
  favorites.forEach((fav, index) => {
    const card = document.createElement("div");
    card.classList.add("image-card");

    card.innerHTML = `
      <button class="delete-btn" onclick="removeFavorite(${index})">🗑️</button>
      <img src="${fav.url}" alt="Favorite APOD">
      <h3>${fav.title}</h3>
      <p>${fav.date}</p>
    `;
    container.appendChild(card);
  });
}

function removeFavorite(index) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.splice(index, 1);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  displayFavorites();
}
