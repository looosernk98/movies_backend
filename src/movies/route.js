const express = require('express');
const API_ENDPOINTS = require('../integration');
const { getApi, postApi } = require('../service');
const router = express.Router();
// const { createUser, updateUser, getUserById, getAllUsers } = require('./controller');

router.get('/top-rated', async(req, res) => {
    const { page } = req.query
    const response = await getApi(API_ENDPOINTS.topRatedMovies, { page})
    res.send(response)
});
router.get('/now_playing', async(req, res) => {
    const { page } = req.query
    const response = await getApi(API_ENDPOINTS.currentWatchingMovies, {page})
    res.send(response)
});
router.get('/popular', async(req, res) => {
    const { page } = req.query
    const response = await getApi(API_ENDPOINTS.popularMovies, {page})
    res.send(response)
});
router.get('/upcoming', async(req, res) => {
    const { page } = req.query
    const response = await getApi(API_ENDPOINTS.upcoming, { page})
    res.send(response)
});
router.get('/trending', async(req, res) => {
    const { page } = req.query
    const response = await getApi(API_ENDPOINTS.trendingMovies(), { page})
    res.send(response)
});

router.get('/:id', async(req, res) => {
    const { id } = req.params;
    const response = await getApi(API_ENDPOINTS.movieDetailsById(id), req.query)
    res.send(response)
});
router.get('/:id/recommendations', async(req, res) => {
    const { id } = req.params;
    const response = await getApi(API_ENDPOINTS.recommendations(id))
    res.send(response)
});
router.post('/:account_id/favorite', async(req, res) => {
    const payload = req.body
    const { account_id } = req.params;
    const response = await postApi(API_ENDPOINTS.addTofavourite(account_id), payload)
    console.log('response: ', response);
    res.json(response.data)
});
router.post('/:account_id/watchlist', async(req, res) => {
    const payload = req.body
    const { account_id } = req.params;
    const response = await postApi(API_ENDPOINTS.addToWatchlist(account_id), payload)
    res.json(response.data)
});


module.exports = router