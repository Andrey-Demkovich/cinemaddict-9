export const filmCardBlock = (filmData) => `<article class="film-card">
  <h3 class="film-card__title">${filmData.name}</h3>
  <p class="film-card__rating">${filmData.rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${filmData.year}</span>
    <span class="film-card__duration">${filmData.duration}</span>
    <span class="film-card__genre">${filmData.ganre}</span>
  </p>
  <img src="./images/posters/${filmData.postFail}" alt="${filmData.name}"
   class="film-card__poster">
  <p class="film-card__description">${filmData.description}</p>
  <a class="film-card__comments">${filmData.coments} comments</a>
  <form class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
  </form>
</article>`;
