import search from './search.js'
const labels = ['Montreal', 'Canada', 'Collective', 'Table', 'Interior', 'Chair', 'Coffee Shop', 'Coffee Machine', 'Coffee', 'Cafe' ]
export default function populatelabels(){
    const labelElements = labels.map(label =>{
        return `<button class="label-btn">${label}</button>`;
    }

    );
    document.querySelector('.labels-wrap').innerHTML = labelElements.join("");
    document.querySelectorAll('.label-btn').forEach(button=>{

button.addEventListener('click' , async(event)=>{
    const query = event.target.textContent;
    await search(query);
    
})
})
}


