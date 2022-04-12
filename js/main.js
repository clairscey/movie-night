
let movie1;
let movie2;
let movie3;

document.querySelector('button').addEventListener('click', searchMovie)

document.querySelector('#movie1').addEventListener('click', displayTrailer1)
document.querySelector('#movie2').addEventListener('click', displayTrailer2)
document.querySelector('#movie3').addEventListener('click', displayTrailer3)
document.querySelector('#movieSearch').addEventListener('keyup', e => {
  if (e.keyCode === 13) {
      searchMovie();
  }
})



function searchMovie() {
    let userSearch = document.querySelector('input').value;
    let userSearchClean = userSearch.replace(/\s/g, '%20')

    fetch(`https://imdb-api.com/en/API/SearchMovie/k_oc1edjb6/${userSearchClean}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('#movie1').src = data.results[0].image
      movie1 = data.results[0].id
      document.querySelector('#movie2').src = data.results[1].image
      movie2 = data.results[1].id
      document.querySelector('#movie3').src = data.results[2].image
      movie3 = data.results[2].id
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function displayTrailer1() {
  fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_oc1edjb6/${movie1}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    let videoUrlClean = 'https://www.youtube-nocookie.com/embed/' + data.videoUrl.slice(32);
    document.querySelector('#trailerContainer').src = videoUrlClean
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}
function displayTrailer2() {
  fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_oc1edjb6/${movie2}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    let videoUrlClean = 'https://www.youtube-nocookie.com/embed/' + data.videoUrl.slice(32);
    document.querySelector('#trailerContainer').src = videoUrlClean
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}
function displayTrailer3() {
  fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_oc1edjb6/${movie3}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    let videoUrlClean = 'https://www.youtube-nocookie.com/embed/' + data.videoUrl.slice(32);
    document.querySelector('#trailerContainer').src = videoUrlClean
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}

