const API_KEY = 'AIzaSyBl-ChvnSrM5GV226-z6O9Ckt4sXBxKSKc'

const movieService = {
    getMovieTitles: async () => {
        const url = 'https://movies-api14.p.rapidapi.com/shows';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1fffba5decmshc04e02bd7ba41d4p1bd287jsn0de02ee6c949',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            }
        };
    
        const response = await fetch(url, options);;
        return response.json();
      },

      getShowsTitles: async () => {
        const url = 'https://movies-api14.p.rapidapi.com/shows';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1fffba5decmshc04e02bd7ba41d4p1bd287jsn0de02ee6c949',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            }
        };
    
        const response = await fetch(url, options);;
        return response.json();
      },

      getSearchTitles: async (inputText='') => {
        const url = 'https://movies-api14.p.rapidapi.com/search?query='+inputText;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1fffba5decmshc04e02bd7ba41d4p1bd287jsn0de02ee6c949',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            },
        };
    
        const response = await fetch(url, options);;
        return response.json();
      },

      getYoutubeSearch: async (searchQuery='zoo') => {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}&type=video&key=${API_KEY}`;
        const response = await fetch(url);
        return response.json();
      },
}

export default movieService;