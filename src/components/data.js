import {shuffle, getRandomInteger} from "./utils.js";

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
  let minutDuration = getRandomInteger(20, 110);
  let hourDuration = minutDuration / 60;
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
    year: getRandomInteger(1900, 2019),
    ganre: filmsGanres[getRandomInteger(0, filmsGanres.length - 1)],
    rating: (4 + (10 - 4) * Math.random()).toFixed(1),
    duration: generateFilmDuration(),
    coments: getRandomInteger(1, 9)
  };
};

const generateFilmsDataList = () => {
  const filmsDataList = [];
  for (let i = 0; i < 20; i++) {
    filmsDataList.push(generateFilmData());
  }

  return filmsDataList;
};

export const filmsDatas = generateFilmsDataList();
