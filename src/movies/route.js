const express = require('express');
const API_ENDPOINTS = require('../integration');
const { getApi } = require('../service');
const router = express.Router();
// const { createUser, updateUser, getUserById, getAllUsers } = require('./controller');

router.get('/top-rated', async(req, res) => {
    const response = await getApi(API_ENDPOINTS.topRatedMovies)
    res.send(response)
});
router.get('/now_playing', async(req, res) => {
    const response = await getApi(API_ENDPOINTS.currentWatchingMovies)
    res.send(response)
});
router.get('/popular', async(req, res) => {
    const response = await getApi(API_ENDPOINTS.popularMovies)
    res.send(response)
});
router.get('/upcoming', async(req, res) => {
    const response = await getApi(API_ENDPOINTS.upcoming)
    res.send(response)
});
router.get('/trending', async(req, res) => {
    const response = await getApi(API_ENDPOINTS.trendingMovies())
    res.send(response)
});

router.get('/movie/:id', async(req, res) => {
    console.log(req?.query)
    console.log(req?.params)
    const response = await getApi(API_ENDPOINTS.upcoming)
    res.send(response)
});

module.exports = router