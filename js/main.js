//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// let userDrink = document.querySelector('input').value

// console.log(userDrink)

document.querySelector('button').addEventListener('click', searchMovie)

document.querySelector('#movie1').addEventListener('click', displayTrailer)

let movie1;
let movie2;
let movie3;

function searchMovie() {
    let userSearch = document.querySelector('input').value;
    let userSearchClean = userSearch.replace(/\s/g, '%20')

    fetch(`https://imdb-api.com/en/API/SearchMovie/k_oc1edjb6/${userSearchClean}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('#movie1').src = data.results[0].image
      movie1 = data.results[0].id
      document.querySelector('#secondChoice').innerHTML = `<img id='movie2' src=${data.results[1].image}>`
      document.querySelector('#thirdChoice').innerHTML = `<img id='movie3' src=${data.results[2].image}>`
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function displayTrailer() {
  fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_oc1edjb6/${movie1}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    let videoUrlClean = 'https://www.youtube-nocookie.com/embed/' + data.videoUrl.slice(32);
    // document.querySelector('#trailerContainer').classList.toggle('hidden');
    document.querySelector('#trailerContainer').src = videoUrlClean
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}

