fetch("https://api.nasa.gov/planetary/apod?api_key=4RfRckfBr273HjxoOlMnSPbzwqLanvJaQC559f2d")
    .then(res => res.json())
    .then(data => {
        console.log(data.date)
        console.log(data.explanation)
        console.log(data.hdurl)
        console.log(data.url)
        console.log(data.title)
        document.querySelector('.title-of-image').innerHTML = data.title
        document.querySelector('img').src = data.url
        document.querySelector('.date').innerHTML = data.date
        document.querySelector('.description').innerHTML = data.explanation
    })
    .catch(err => console.log(`error ${err}`))