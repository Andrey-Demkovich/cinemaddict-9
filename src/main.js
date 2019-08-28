import {filmsDatas} from "./components/data.js";
import {headerSearchBlock} from "./components/search.js";
import {headerProfileBlock} from "./components/profile.js";
import {mainNavigationSortBlock as mainMenuBlock} from "./components/menu.js";
import {filmsBlock} from "./components/films.js";
import {filmsListBlock} from "./components/films-list.js";
import {filmsListContainerBlock} from "./components/films-list-container.js";
import {filmCardBlock} from "./components/film-card.js";
import {showMoreBlock} from "./components/show-more.js";

const renderHtmlElement = (block, elementToInsert) =>
  elementToInsert.insertAdjacentHTML(`beforeend`, block);

const renderHtmlHeader = () => {
  const headerElement = document.querySelector(`.header`);
  renderHtmlElement(headerSearchBlock(), headerElement);
  renderHtmlElement(headerProfileBlock(), headerElement);
};

const renderHtmlMain = () => {
  const mainElement = document.querySelector(`.main`);
  renderHtmlElement(mainMenuBlock(), mainElement);
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
  console.log(filmsDatas);
  filmsDatas.slice(0, 5).forEach((filmData, i) => {
    renderHtmlElement(filmCardBlock(filmData), filmsListContainerElements[0]);

    // if (i > 1) {
    //   return;
    // }
    // renderHtmlElement(filmCardBlock(filmData), filmsListContainerElements[1]);
    // renderHtmlElement(filmCardBlock(filmData), filmsListContainerElements[2]);
  });

  filmsDatas
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice()
    .forEach((filmData, i) => {
      renderHtmlElement(filmCardBlock(filmData), filmsListContainerElements[1]);
    });

  filmsDatas
    .slice()
    .sort((a, b) => b.coments - a.coments)
    .slice(0, 2)
    .forEach((filmData, i) => {
      renderHtmlElement(filmCardBlock(filmData), filmsListContainerElements[2]);
    });
};

renderHtmlHeader();
renderHtmlMain();
renderHtmlFilmsSection();
renderHtmlFilmsListSections();
renderHtmlFilmsListContainers();
