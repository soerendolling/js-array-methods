const tvShows = [
  {
    title: "True Detective",
    publishingYear: 2014,
    rating: 9,
    watched: false,
  },
  {
    title: "The Boys",
    publishingYear: 2019,
    rating: 8.7,
    watched: true,
  },
  {
    title: "Game of Thrones",
    publishingYear: 2011,
    rating: 9.3,
    watched: true,
  },
  {
    title: "Mr. Robot",
    publishingYear: 2015,
    rating: 8.5,
    watched: false,
  },
  {
    title: "Chernobyl",
    publishingYear: 2019,
    rating: 9.4,
    watched: true,
  },
  {
    title: "Money Heist",
    publishingYear: 2017,
    rating: 8.3,
    watched: true,
  },
  {
    title: "Dark",
    publishingYear: 2017,
    rating: 8.8,
    watched: false,
  },
];

// Your code below
const watchedShows = tvShows.filter((watchedTV) => {
  return watchedTV.watched === true;
});

console.log(watchedShows);

const highRating = tvShows.filter((rate9) => {
  return rate9.rating >= 9;
});

console.log(highRating);

const published = tvShows.filter((published2015) => {
  return published2015.publishingYear < 2015;
});

console.log(published);
