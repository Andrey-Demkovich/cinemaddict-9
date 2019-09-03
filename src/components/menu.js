const generateMainNavigationItem = (filtersData) =>
  filtersData
    .map(
        (it) =>
          `<a href="#${it.title}" class="main-navigation__item">
            ${it.title}
            <span class="main-navigation__item-count">${it.count}</span>
          </a>`
    )
    .join(``);

export const mainNavigationSortBlock = (filtersData) =>
  `<nav class="main-navigation">
  <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
  ${generateMainNavigationItem(filtersData)}
  <a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>
</nav>

<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button">Sort by rating</a></li>
</ul>`;
