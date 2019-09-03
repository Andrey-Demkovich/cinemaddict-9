import {
  DURATION_FILMS_MIN,
  DURATION_FILMS_MAX,
  FILM_YEAR_START,
  FILM_YEAR_END,
  MIN_RATING,
  MAX_RATING,
  MIN_COMENTS,
  MAX_COMENTS,
  MAX_FILMS_LIST,
  MAX_FILMS_WATCHED,
  PROFILE_NOVICE,
  PROFILE_FAN,
  MIN_AGE,
  MAX_AGE
} from "./constants.js";

import {shuffle, getRandomInteger, getRandomBoolean} from "./utils.js";

const filmsNames = [
  `The Shawshank Redemption `,
  `The Green Mile`,
  `Forrest Gump`,
  `Schindler's List`,
  `Intouchables`,
  `Léon`,
  `Inception`,
  `The Lion King`,
  `Fight Club`,
  `La vita è bella`,
  `Knockin' on Heaven's Door`,
  `The Godfather`,
  `Pulp Fiction`,
  `The Prestige`,
  `A Beautiful Mind`
];

const postsFails = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`
];

const descriptionsFilms = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const filmsGanres = [
  `Short film`,
  `Action`,
  `Adventure`,
  `Comedy`,
  `Drama`,
  `Crime`,
  `Horror`,
  `Fantasy`,
  `Romance`,
  `Thriller`,
  `Animation`,
  `Family`,
  `Documentary`,
  `Musical`,
  `Western`,
  `Sci-fi`
];

const generateFilmDuration = () => {
  const minutDuration = getRandomInteger(
      DURATION_FILMS_MIN,
      DURATION_FILMS_MAX
  );
  const hourDuration = minutDuration / 60;
  let filmDuration;
  if (hourDuration > 1) {
    filmDuration = `${Math.floor(hourDuration)}h ${Math.round(
        minutDuration % 60
    )}m`;
  } else {
    filmDuration = `${minutDuration}m`;
  }

  return filmDuration;
};

const generateFilmData = () => {
  return {
    name: filmsNames[getRandomInteger(0, filmsNames.length - 1)],
    postFail: postsFails[getRandomInteger(0, postsFails.length - 1)],
    description: shuffle(descriptionsFilms)
      .slice(0, getRandomInteger(1, 3))
      .join(` `),
    year: getRandomInteger(FILM_YEAR_START, FILM_YEAR_END),
    ganre: filmsGanres[getRandomInteger(0, filmsGanres.length - 1)],
    rating: (MIN_RATING + (MAX_RATING - MIN_RATING) * Math.random()).toFixed(1),
    duration: generateFilmDuration(),
    coments: getRandomInteger(MIN_COMENTS, MAX_COMENTS),
    isWatchlist: getRandomBoolean(),
    isWatched: getRandomBoolean(),
    isFavorite: getRandomBoolean(),
    age: getRandomInteger(MIN_AGE, MAX_AGE)
  };
};

const generateFilmsDataList = () => {
  const filmsDataList = [];
  for (let i = 0; i < MAX_FILMS_LIST; i++) {
    filmsDataList.push(generateFilmData());
  }

  return filmsDataList;
};

export const generateProfileRating = () => {
  const filmsWatched = getRandomInteger(0, MAX_FILMS_WATCHED);

  let profileRating;

  if (filmsWatched === 0) {
    profileRating = ``;
  } else if (filmsWatched <= PROFILE_NOVICE) {
    profileRating = `novice`;
  } else if (filmsWatched <= PROFILE_FAN) {
    profileRating = `fan`;
  } else {
    profileRating = `movie buff`;
  }

  return profileRating;
};

const generateFiltersData = (filmsData) => {
  const watchlistFilms = filmsData.slice().filter((film) => film.isWatchlist);
  const historyFilms = filmsData.slice().filter((film) => film.isWatched);
  const favoritesFilms = filmsData.slice().filter((film) => film.isFavorite);

  return [
    {title: `Watchlist`, count: watchlistFilms.length},
    {title: `History`, count: historyFilms.length},
    {title: `Favorites`, count: favoritesFilms.length}
  ];
};

export const filmsData = generateFilmsDataList();
export const filtersData = generateFiltersData(filmsData);
