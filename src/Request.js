const KEY = "bdb6d12f58b0fe3fcceb027ea99c7f23";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US&page=1`,
};

export default requests;
