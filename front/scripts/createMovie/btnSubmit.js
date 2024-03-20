const {postMovie}= require('../handler');
const resetForm = require('./btnReset')

const btnSubmit = document.getElementById('submitMoviebtn');

btnSubmit.addEventListener('click', postMovie);
btnSubmit.addEventListener('click', resetForm);