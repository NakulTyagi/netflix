const youtubeKey = process.env.REACT_APP_YOUTUBE_API_KEY;
const tmdbKey = process.env.REACT_APP_TMDB_API_KEY;
const rapidApiKey = process.env.REACT_APP_RAPIDAPI_KEY;

const movieService = {
    getMovieTitles: async () => {
        const url = 'https://movies-api14.p.rapidapi.com/shows';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            }
        };
    
        const response = await fetch(url, options);
        return response.json();
      },

      getShowsTitles: async () => {
        const url = 'https://movies-api14.p.rapidapi.com/shows';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            }
        };
    
        const response = await fetch(url, options);
        return response.json();
      },

      getSearchTitles: async (inputText='') => {
        const url = 'https://movies-api14.p.rapidapi.com/search?query='+inputText;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            },
        };
    
        const response = await fetch(url, options);
        return response.json();
      },

      getYoutubeSearch: async (searchQuery='zoo') => {
        if (!youtubeKey) {
          return { items: [] };
        }
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}&type=video&key=${youtubeKey}`;
        const response = await fetch(url);
        return response.json();
      },

      getSearchMovies: async (text,sortBy='popularity', releaseYear=2023, page=1) => {
        if (!tmdbKey) {
          return { results: [], total_pages: 0 };
        }
        const url =  `https://api.themoviedb.org/3/search/movie?api_key=${tmdbKey}&query=${text}&sort_by=${sortBy}.desc&primary_release_year=${releaseYear}&page=${page}&vote_count.gte=100`;
    
        const response = await fetch(url);
        return response.json();
      },

}

export default movieService;
