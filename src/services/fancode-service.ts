const api_key='2dca580c2a14b55200e784d157207b4d';
const fancodeService = {
    getMovieTitles: async (sortBy='popularity', releaseYear=2023, page=1) => {
        const url =  `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=${sortBy}.desc&primary_release_year=${releaseYear}&page=${page}&vote_count.gte=100`;
    
        const response = await fetch(url);;
        return response.json();
      },

      getGenres: async () => {
        const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key='+api_key;
    
        const response = await fetch(url);;
        return response.json();
      },

}

export default fancodeService;