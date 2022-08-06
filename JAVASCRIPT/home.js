// Creating Dynamic Project Card
const imageContainer = document.querySelector('.Model-Gallery-Container');
class myProjects {
    // Abstraction
    constructor(name, tags, image) {
        // New Instances/objects of myProjects class
        this.name = name;
        this.tags = tags;
        this.image = image;
    }
}
// Instantiation
// Each object of the same type is a unique entity aka object.
item1 = new myProjects('Fayn Ahnn?', '#Ariiaaann', '/IMG/OK.jpg');
item2 = new myProjects('USA Paddle', '#Salonefunnybad', '/IMG/Tiki.jpg');
item3 = new myProjects('Blessing Bengeh', '#Heyden Adama', '/IMG/Salone.jpg');
item4 = new myProjects('Keke', '#PalmerSudios', '/IMG/keke-palmer-skin-care-products.jpg');
myProjectsArray = [item1, item2, item3, item4];
myProjectsArray.forEach(project => {
    imageContainer.innerHTML += `
            <div class="Gallery-Image data-tags="#all, ${project.tags}">
                <img src="${project.image}" alt="">
                <div class="content">
                    <h1 class="image-name">${project.name}</h1>
                    <span class="tags">${project.tags}</span>
                </div>
            </div>
    `;
})

function fetchYouTubeData() {
    console.log('Hello')
    fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCG7azEZJY5PCsjcUCOdvOPw&q=kekepalmerwebsite&key=AIzaSyDGeGModc2NY9nw5vfL3SWm1jAiBZEpSts')
    .then(res => {
        if(!res.ok) {
            throw Error('Error Please Try Again Later...');
        } 
        else {
            return res.json();
        }
    })
    // .then(res => {
    //     return JSON.stringify(res);
    // })
    .then(res => {
        const subs = res.items[0].statistics.subscriberCount;
        const videos = res.items[0].statistics.videoCount;
        const views = res.items[0].statistics.viewCount;
        document.querySelector('#fetchedYouTubeData').innerHTML = `
        <span class="videoCount">Videos: ${videos}</span>
        <span class="subCount">Subscribers: ${subs}</span>
        <span class="viewCount">Views: ${views}</span>`;
    })
    .catch(error => {
        console.log(error);
    })
}
fetchYouTubeData();

function fetchWeatherData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=39.2908816&lon=-76.610759&units=imperial&limit=1&appid=4de5b9b05ea00402efaa87dba6e0268f')
    .then(res => {
        if(!res.ok) {
            throw Error('Error Please Try Again Later...')
        }
        else {
            return res.json();
        }
    })
    .then(collectData => {
        weatherStatistics = {
            City: collectData.name,
            Temperature: collectData.main,
            Description: collectData.weather[0],
            Coordinates: collectData.coord,
            Wind: collectData.wind
        }
        console.log(weatherStatistics);
        document.querySelector('#fetchedWeatherData').innerHTML = `
        <h3>${weatherStatistics.City}, US<svg class="weatherIcon" style="width:50px;height:50px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M3,15H13A1,1 0 0,1 14,16A1,1 0 0,1 13,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15M16,15H21A1,1 0 0,1 22,16A1,1 0 0,1 21,17H16A1,1 0 0,1 15,16A1,1 0 0,1 16,15M1,12A5,5 0 0,1 6,7C7,4.65 9.3,3 12,3C15.43,3 18.24,5.66 18.5,9.03L19,9C21.19,9 22.97,10.76 23,13H21A2,2 0 0,0 19,11H17V10A5,5 0 0,0 12,5C9.5,5 7.45,6.82 7.06,9.19C6.73,9.07 6.37,9 6,9A3,3 0 0,0 3,12C3,12.35 3.06,12.69 3.17,13H1.1L1,12M3,19H5A1,1 0 0,1 6,20A1,1 0 0,1 5,21H3A1,1 0 0,1 2,20A1,1 0 0,1 3,19M8,19H21A1,1 0 0,1 22,20A1,1 0 0,1 21,21H8A1,1 0 0,1 7,20A1,1 0 0,1 8,19Z" />
    </svg></h3>
        <h1>${weatherStatistics.Temperature.temp}F</h1>
        <p>Feels like ${weatherStatistics.Temperature.feels_like}F. ${weatherStatistics.Description.description}</p>
        <p>Humidity: ${weatherStatistics.Temperature.humidity}%</p>
        <p>High: ${weatherStatistics.Temperature.temp_max}</p>
        <p>Low: ${weatherStatistics.Temperature.temp_min}</p>
        <p>Wind Speed: ${weatherStatistics.Wind.speed}</p>
        <a href="https://openweathermap.org/city/4347778">Learn More</a>`;
    })
}
fetchWeatherData();
