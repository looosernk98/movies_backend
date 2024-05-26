 
 const API_ENDPOINTS = {
    topRatedMovies : '/movie/top_rated',
    popularMovies: '/movie/popular',
    currentWatchingMovies: '/movie/now_playing',
    upcoming: '/movie/upcoming',
    trendingMovies: (time_window) => `/trending/movie/${time_window}`,

    movieDetailsById: (id) => `/movie/${id}`
}

module.exports = API_ENDPOINTS;