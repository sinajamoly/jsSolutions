
const promises = [];

const URL = 'https://jsonplaceholder.typicode.com/todos/1'; // correct url
const URL2 = 'https://jsonplaceholer.typicode.com/todos/1'; //wrong url

const payload = {
    name: 'sina',
    lastName: 'jamoly',
    age: '27'
};

const payload2 = {
    name: 'alex',
    lastName: 'jonson',
    age: '34'
};



const getWeather = (url, payload) => {
    return {
        fetch: fetch(url),
        payload
    };
};

const addFetch = (promise) => {
    promises.push(promise);
};




// getWeather(URL);
// getWeather(URL);
// getWeather(URL2);
// getWeather(URL);
// getWeather(URL2);
// getWeather(URL);


addFetch(getWeather(URL, payload));
addFetch(getWeather(URL2, payload2));
addFetch(getWeather(URL, payload));
addFetch(getWeather(URL, payload2));
addFetch(getWeather(URL2, payload));

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

Promise.all(promises.map(p => p.fetch.catch((err) => {
    return {
        err,
        status: 'failed',
        payload: p.payload
    }
})))
    .then((res) => {
        res.map(r => {
            if(r.status === 'failed') {
                console.log(r.status, r.payload);
            }
        })
    });
