let container = document.querySelector('.container');

for(let i=0;i<16;i++){
    let content = document.createElement('div');
    content.classList.add('grid-cell');
    container.appendChild(content);
}
