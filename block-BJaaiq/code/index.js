let root = document.querySelector('ul');

let max = 300 ;
let index = 0;

function addQuotes(){
    for (let i = 0; i < max; i++) {
        let li = document.createElement('li');
        let blackquote = document.createElement('blockquote');
        let cite = document.createElement('cite');
        blackquote.innerText = quotes[index].quoteText;
        blackquote.innerText = quotes[index].quoteAuthor;
        li.append(blackquote,cite);

        root.append(li);
        index++;
    }
}

addQuotes();

document.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;

    if(scrollTop  + clientHeight >= scrollHeight && index < quotes.length){
        addQuotes();
    }
})

window.addEventListener('DOMContentLoaded',() => {
    alert(`the dom content is loaded`);
});