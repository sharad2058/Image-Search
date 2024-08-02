
import populatelabels from './labels.js';
import search from './search.js';
import { getQuery } from './localstorage.js';
populatelabels();




    document.querySelector('form').addEventListener('submit', async function (event) {
        event.preventDefault();
        
        const query = document.querySelector("#search").value;
       await search(query);
    
    });

   

    (async()=> {
       const query =  getQuery();
        await search(query);
    }
    )()



