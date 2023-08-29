import { sendGETRequestToSever } from './ExtraTools.js';
import {} from './Nav&Footer_Blueprint.js';
const apis = await sendGETRequestToSever('/apis');
fetchYouTubeData();
fetchWeatherData();

async function fetchYouTubeData() {
    try {
        const data = await sendGETRequestToSever(apis[0].Api);
        const subs = data.items[0].statistics.subscriberCount;
        const videos = data.items[0].statistics.videoCount;
        const views = data.items[0].statistics.viewCount;
        document.querySelector('#fetchedYouTubeData').innerHTML = `
        <span class="videoCount">Videos: ${videos}</span>
        <span class="subCount">Subscribers: ${subs}</span>
        <span class="viewCount">Views: ${views}</span>`;
    } catch (err) { console.log(err) }
}

async function fetchWeatherData() {
    try {
        const data = await sendGETRequestToSever(apis[1].Api);
        const weatherStatistics = {
            City: data.name,
            Temperature: data.main,
            Description: data.weather[0],
            Coordinates: data.coord,
            Wind: data.wind
        }
        document.querySelector('#fetchedWeatherData').innerHTML = `
        <h3>${weatherStatistics.City}, US<svg class="weatherIcon" style="width:50px;height:50px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M3,15H13A1,1 0 0,1 14,16A1,1 0 0,1 13,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15M16,15H21A1,1 0 0,1 22,16A1,1 0 0,1 21,17H16A1,1 0 0,1 15,16A1,1 0 0,1 16,15M1,12A5,5 0 0,1 6,7C7,4.65 9.3,3 12,3C15.43,3 18.24,5.66 18.5,9.03L19,9C21.19,9 22.97,10.76 23,13H21A2,2 0 0,0 19,11H17V10A5,5 0 0,0 12,5C9.5,5 7.45,6.82 7.06,9.19C6.73,9.07 6.37,9 6,9A3,3 0 0,0 3,12C3,12.35 3.06,12.69 3.17,13H1.1L1,12M3,19H5A1,1 0 0,1 6,20A1,1 0 0,1 5,21H3A1,1 0 0,1 2,20A1,1 0 0,1 3,19M8,19H21A1,1 0 0,1 22,20A1,1 0 0,1 21,21H8A1,1 0 0,1 7,20A1,1 0 0,1 8,19Z" />
        </svg></h3>
        <h1>${weatherStatistics.Temperature.temp}F</h1>
        <p>Feels like ${weatherStatistics.Temperature.feels_like}F. ${weatherStatistics.Description.description}<p>
        <p>Humidity: ${weatherStatistics.Temperature.humidity}%</p>
        <p>High: ${weatherStatistics.Temperature.temp_max}</p>
        <p>Low: ${weatherStatistics.Temperature.temp_min}</p>
        <p>Wind Speed: ${weatherStatistics.Wind.speed}</p>
        <a href="https://openweathermap.org/city/4347778">Learn More</a>`;
    }
    catch (error) { console.log(error) }
}