const button = document.getElementById('submitButton');
button.addEventListener('click', function () {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(function (result) {
        console.log(result);
    })
    .catch(function (err) {
        console.error(err);
    });
});