import{ACCESS_KEY} from './constants.js';
import{addCookie} from './cookies.js';

export default async function search(query){
   addCookie(query);
   console.log({query});
    
    const url =`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${ACCESS_KEY}`;
    console.log({url});
    const response = await fetch(url);
    const data = await response.json();
    const images = data.results;
    let imageElements = '';
    
    for(let image of images){
        const imageUrl = image.urls.regular;
        imageElements += `<img src="${imageUrl}" alt="">`;
        console.log({imageUrl});
    }
    document.querySelector('.images').innerHTML = imageElements;
    console.log({data});
};