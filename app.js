let button = document.querySelector('#button')
let name = document.querySelector('#name')
let population = document.querySelector('#population')
let climate = document.querySelector('#climate')
let terrain = document.querySelector('#terrain')
let title = document.querySelector('#title')
let episode_id = document.querySelector('#episode_id')

function getInfo(){
let randomNumber = Math.floor((Math.random() * 61) + 1)   
let apiUrl = 'https://swapi.co/api/planets/' + randomNumber
    
axios.get(apiUrl).then(response =>{
    updateInfo(response.data)
    }).catch(e =>{
    updateInfoWithError() 
    })
}

function getInfoo(){
let randomNumber = Math.floor((Math.random() * 12) + 1)   
let apiUrll = 'https://swapi.co/api/films/'+ randomNumber
axios.get(apiUrll).then(response =>{
    updateInfoo(response.data)
    })
}

function updateInfo(data){
    name.innerText = data.name
    population.innerText ='População: ' + data.population
    climate.innerText = 'Clima: ' + data.climate
    terrain.innerText ='Terreno: ' +  data.terrain
    
}
function updateInfoo(data){
    title.innerText ='Filme: '+ data.title
    episode_id.innerText = 'Episódio: ' + data.episode_id
}

function updateInfoWithError(){
    name.innerText = 'Informação não está disponível'
    population.innerText = ''
    climate.innerText = ''
    terrain.innerText =''
    films.innerText = ''
    episode_id.innerText = ''
    
}

button.addEventListener('click',getInfo)
button.addEventListener('click',getInfoo)