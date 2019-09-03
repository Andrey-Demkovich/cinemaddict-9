import {STEP_FILMS_SHOW, MAX_FILMS_LIST} from "./components/constants.js";
import {
  filmsData,
  generateProfileRating,
  filtersData
} from "./components/data.js";
import {headerSearchBlock} from "./components/search.js";
import {headerProfileBlock} from "./components/profile.js";
import {mainNavigationSortBlock as mainMenuBlock} from "./components/menu.js";
import {filmsBlock} from "./components/films.js";
import {filmsListBlock} from "./components/films-list.js";
import {filmsListContainerBlock} from "./components/films-list-container.js";
import {filmCardBlock} from "./components/film-card.js";
import {showMoreBlock} from "./components/show-more.js";
import {filmDetailsBlock} from "./components/film-details.js";

const footerStatisticsElement = document.querySelector(`.footer__statistics p`);
footerStatisticsElement.innerHTML = `${MAX_FILMS_LIST} movies inside`;

const renderHtmlElement = (block, elementToInsert) =>
  elementToInsert.insertAdjacentHTML(`beforeend`, block);

const renderHtmlHeader = () => {
  const headerElement = document.querySelector(`.header`);
  renderHtmlElement(headerSearchBlock(), headerElement);
  renderHtmlElement(headerProfileBlock(generateProfileRating()), headerElement);
};

const renderHtmlMain = () => {
  const mainElement = document.querySelector(`.main`);
  renderHtmlElement(mainMenuBlock(filtersData), mainElement);
  renderHtmlElement(filmsBlock(), mainElement);
};

const renderHtmlFilmsSection = () => {
  const filmsElement = document.querySelector(`.films`);
  renderHtmlElement(filmsListBlock(`All movies. Upcoming`), filmsElement);
  renderHtmlElement(filmsListBlock(`Top rated`, `--extra`), filmsElement);
  renderHtmlElement(filmsListBlock(`Most commented`, `--extra`), filmsElement);
};

const renderHtmlFilmsListSections = () => {
  const filmsListElements = document.querySelectorAll(`.films section`);
  const filmsListTitle = filmsListElements[0].querySelector(
      `.films-list__title`
  );
  filmsListTitle.insertAdjacentHTML(`afterend`, filmsListContainerBlock());
  renderHtmlElement(showMoreBlock(), filmsListElements[0]);
  renderHtmlElement(filmsListContainerBlock(), filmsListElements[1]);
  renderHtmlElement(filmsListContainerBlock(), filmsListElements[2]);
};

const renderHtmlFilmsListContainers = () => {
  const filmsListContainerElements = document.querySelectorAll(
      `.films-list__container`
  );
  const LoadMoreElement = document.querySelector(`.films-list__show-more`);

  let countFilmsShow = 0;

  const renderFilmsList = () =>
    filmsData
      .slice(countFilmsShow, (countFilmsShow += STEP_FILMS_SHOW))
      .forEach((filmData) => {
        renderHtmlElement(
            filmCardBlock(filmData),
            filmsListContainerElements[0]
        );
      });

  const renderFilmsExtraList = (property, element) =>
    filmsData
      .slice()
      .sort((a, b) => b[property] - a[property])
      .slice(0, 2)
      .forEach((filmData) => {
        renderHtmlElement(
            filmCardBlock(filmData),
            filmsListContainerElements[element]
        );
      });

  const onLoadMoreClick = () => {
    renderFilmsList();

    if (countFilmsShow >= filmsData.length) {
      LoadMoreElement.style.display = `none`;
      LoadMoreElement.removeEventListener(`click`, onLoadMoreClick);
    }
  };

  renderFilmsList();
  renderFilmsExtraList(`rating`, 1);
  renderFilmsExtraList(`coments`, 2);
  LoadMoreElement.addEventListener(`click`, onLoadMoreClick);
};

renderHtmlHeader();
renderHtmlMain();
renderHtmlFilmsSection();
renderHtmlFilmsListSections();
renderHtmlFilmsListContainers();
// renderHtmlElement(filmDetailsBlock(filmsData[0]), document.body); // для просмотра попапа детальной информации -  раскоментировать строку
