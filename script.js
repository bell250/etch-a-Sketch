function createSquares(size) {
    const container = document.querySelector('#container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let sizes = Math.floor(480 / size);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let div = document.createElement('div');
            div.classList.add('sq');
            div.style.height = `${sizes}px`;
            div.style.width = `${sizes}px`;
            container.appendChild(div);
        }
    }
    let square = document.querySelectorAll('.sq');
    square.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = randomBgColor();
        });

    });

}
function randomBgColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`
}
let newGrid= document.querySelector('#newGrid');
newGrid.addEventListener('click',()=>{
let num = prompt("enter number os squares not greater than 100");
  num= parseInt(num);
  if( isNaN(num) || num < 0 || num > 100){
  alert("Please enter number between 0 and 100")
  } else{
createSquares(num);}
});
createSquares(16);