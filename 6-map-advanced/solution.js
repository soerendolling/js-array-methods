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

const movieTitles = tvShows.map((titles) => {
  return titles.title;
});

console.log(movieTitles);

const titleRating = tvShows.map((rating) => {
  return {
    title: rating.title,
    rating: rating.rating,
  };
});

console.log(titleRating);

const title2 = tvShows.map((title2) => {
  if (title2.rating >= 9) {
    return title2.title.toUpperCase();
  } else {
    return title2.title.toLowerCase();
  }
});

console.log(title2);
