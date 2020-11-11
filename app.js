window.onload = function() {
    var form = document.getElementById('form');


    form.addEventListener('submit', function(event) {
        var formInput = document.getElementById('form-input').value;
        event.preventDefault();

        fetch('superheroes.php?' + new URLSearchParams({
                query: `${formInput}`
            }))
            .then(data => data.text())
            .then((text) => {

                document.getElementById('result').innerHTML = text;
            }).catch(function(error) {
                console.error('request failed', error)
            })



    })

}