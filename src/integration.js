 
 const API_ENDPOINTS = {
    topRatedMovies : '/movie/top_rated',
    popularMovies: '/movie/popular',
    currentWatchingMovies: '/movie/now_playing',
    upcoming: '/movie/upcoming',
    trendingMovies: (time_window) => `/trending/movie/week`,
    movieDetailsById: (id) => `/movie/${id}`,
    recommendations: (id) => `/movie/${id}/recommendations`,
    addTofavourite: (account_id) => `/account/${account_id}/favorite`,
    addToWatchlist: (account_id) => `/account/${account_id}/watchlist`
}

module.exports = API_ENDPOINTS;