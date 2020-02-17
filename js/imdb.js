var search = document.getElementById('search');

search.addEventListener('keyup', (e) => {
    var stext = e.target.value;
    getMovies(stext);
})

function getMovies(stext) { 
    const apple = `http://www.omdbapi.com/?s=${stext}&apikey=99aa9934`;
    window.fetch(apple)
        .then(data =>
            data.json()
            .then(info => {
                const data = info.Search;
                var output = [];
                for (let movie of data) {
                output += `
                <div class="container mari">
                <section id="movies">
                    <h3>${movie.Title}</h3>
                    <span class="badge badge-success">${movie.Year}</span>
                    <p>
                        <img  src="${movie.Poster}" alt="">
                        <p><button class="btn btn-dark btn-block">Watch</button></p>
                    </p>
                </section>
            </div>
                `
                    document.getElementById('template').innerHTML = output
                }



            })
            .catch(oopsie => console.log(oopsie)))
        .catch(oopsie => console.log(oopsie));
}