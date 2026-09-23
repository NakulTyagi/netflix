const tmdbKey = process.env.REACT_APP_TMDB_API_KEY;

const fancodeService = {
    getMovieTitles: async (sortBy='popularity', releaseYear=2023, page=1) => {
        if (!tmdbKey) {
          return { results: [] };
        }
        const url =  `https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&sort_by=${sortBy}.desc&primary_release_year=${releaseYear}&page=${page}&vote_count.gte=100`;
    
        const response = await fetch(url);
        return response.json();
      },

      getGenres: async () => {
        if (!tmdbKey) {
          return { genres: [] };
        }
        const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key='+tmdbKey;
    
        const response = await fetch(url);
        return response.json();
      },

}

export default fancodeService;
