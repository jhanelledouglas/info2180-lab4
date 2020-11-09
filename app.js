window.addEventListener('load', function() {

    let loadBtn = document.querySelector('#loadTextBtn');

    loadBtn.addEventListener('click', function(element) {

        element.preventDefault();

        fetch("superheroes.php")


        .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            .then(data => {
                let search = document.querySelector('#search');
                search.innerHTML = data;
                alert(data);
            })

        .catch(error => console.log('There was an error: ' + error));


    });
});