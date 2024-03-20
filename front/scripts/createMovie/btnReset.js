const resetBtn = document.getElementById("resetMovieBtn")
const resetForm = ()=>{
    const form = document.getElementById("submitMovie")
    form.reset();
};
resetBtn.addEventListener('click', resetForm);

module.exports = resetForm;