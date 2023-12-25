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
}

export default movieService;