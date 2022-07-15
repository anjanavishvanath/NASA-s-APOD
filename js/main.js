document.querySelector('button').addEventListener('click',getData)

function getData(){
    let date = document.querySelector('input').value
    console.log(date)

    fetch(`https://api.nasa.gov/planetary/apod?api_key=4RfRckfBr273HjxoOlMnSPbzwqLanvJaQC559f2d&date=${date}`)
        .then(res => res.json())
        .then(data => {
            document.querySelector('.title-of-image').innerHTML = data.title
            document.querySelector('img').src = data.url
            document.querySelector('.date').innerHTML = data.date
            document.querySelector('.description').innerHTML = data.explanation
        })
        .catch(err => console.log(`error ${err}`))
}