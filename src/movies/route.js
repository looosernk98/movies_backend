const express = require('express');
const API_ENDPOINTS = require('../integration');
const { getApi } = require('../service');
const router = express.Router();
// const { createUser, updateUser, getUserById, getAllUsers } = require('./controller');

router.get('/top-rated', async(req, res) => {
    const response = await getApi(API_ENDPOINTS.topRatedMovies)
    res.send(response)
});

module.exports = router