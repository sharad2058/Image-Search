import{ACCESS_KEY} from './constants.js';
import{setQuery} from './localstorage.js';

export default async function search(query){
   setQuery(query);
   const url =`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${ACCESS_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    const images = data.results;
    let imageElements = '';
    
    for(let image of images){
        const imageUrl = image.urls.regular;
        imageElements += `<img src="${imageUrl}" alt="">`;

    }
    document.querySelector('.images').innerHTML = imageElements;
 
};