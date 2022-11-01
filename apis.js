import fetch from 'cross-fetch';

let randomDog = async function fetchARandomDog(feed) {
    const response = await fetch(feed);
    const data = await response.json();
    return data;
}

export { randomDog };