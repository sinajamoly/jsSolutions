
const promises = [];

const URL = 'https://jsonplaceholder.typicode.com/todos/1';
const URL2 = 'https://jsonplaceholer.typicode.com/todos/1';


const getWeather = (url) => {
    promises.push(fetch(url));
}


getWeather(URL);
getWeather(URL);
getWeather(URL2);
getWeather(URL);
getWeather(URL2);
getWeather(URL);


// Promise.all(promises).then((response) => {
//     console.log(response);
// }).catch((err) => {
//     console.log(err);
//
// });

// Promise.all(promises.map((p) => {p.catch(() => {
//     console.log('failed');
// })})).then((res) => {
//     console.log(res);
// });

Promise.all(promises.map(p => p.catch((err) => err)))
    .then((res) => console.log(res));
