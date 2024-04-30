const form = document.getElementById('card-filter-form');
const cardContainer = document.getElementById('card-container');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const filter = document.getElementById('card-category-filter').value;
  const name = document.getElementById('card-name').value;
  const image = document.getElementById('card-image').value;
  const price = document.getElementById('card-price').value;
  const description = document.getElementById('card-description').value;

  const newCard = document.createElement('div');
  newCard.classList.add('card', 'mb-4');
  newCard.innerHTML = `
    <div class="card-header">
      <h5 class="card-title">${name}</h5>
    </div>
    <div class="card-body">
      <img src="${image}" class="card-img-top" alt="${name}">
      <p class="card-text">${description}</p>
      <p class="card-text">Precio: $${price}</p>
      <p class="card-text">Categoría: ${filter === '' ? 'Todas las categorías' : filter}</p>
    </div>
  `;

  // Clear the card container and add the new card
  cardContainer.innerHTML = '';
  cardContainer.appendChild(newCard);

  // Save the card data to local storage
  const cardData = {
    filter,
    name,
    image,
    price,
    description
  };
  localStorage.setItem('cardData', JSON.stringify(cardData));
});

// Load the card data from local storage and generate the card
const savedCardData = localStorage.getItem('cardData');
if (savedCardData) {
  const cardData = JSON.parse(savedCardData);

  const newCard = document.createElement('div');
  newCard.classList.add('card', 'mb-4');
  newCard.innerHTML = `
    <div class="card-header">
      <h5 class="card-title">${cardData.name}</h5>
    </div>
    <div class="card-body">
      <img src="${cardData.image}" class="card-img-top" alt="${cardData.name}">
      <p class="card-text">${cardData.description}</p>
      <p class="card-text">Precio: $${cardData.price}</p>
      <p class="card-text">Categoría: ${cardData.filter === '' ? 'Todas las categorías' : cardData.filter}</p>
    </div>
  `;

  cardContainer.appendChild(newCard);
}