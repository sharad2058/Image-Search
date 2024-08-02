
import populatelabels from './labels.js';
import search from './search.js';
import {getCookie} from './cookies.js';
populatelabels();




    document.querySelector('form').addEventListener('submit', async function (event) {
        event.preventDefault();
        
        const query = document.querySelector("#search").value;
       await search(query);
    
    });

   

    (async()=> {
       const query =  getCookie();
        await search(query);
    }
    )()



