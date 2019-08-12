export const filmsListBlock = (
    filmsListTitle,
    modifier = ``
) => `<section class="films-list${modifier}">
  <h2 class="films-list__title visually-hidden">${filmsListTitle}</h2>
</section>`;
