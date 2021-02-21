const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

async function getTop100Campers() {
    const response = await fetch(apiUrl); // wait until it completes
    const json = await response.json(); // another async call. will not run until first is resolved

    console.log(json[0]);
}

// function getTop100Campers() {
//     fetch(apiUrl) // fetching a promise
//     .then((r) => r.json()) // when promise delivered, continue
//     .then(json => {
//         console.log(json[0])
//     }).catch((error) => {
//         console.log('failed')
//     });
// }

getTop100Campers()