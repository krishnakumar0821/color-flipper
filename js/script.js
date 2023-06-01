const containerEl = document.querySelector('.container');
const bgColorEl = document.querySelector('.bg-color');
const flipColorBtnEl = document.querySelector('.flip-color-btn');
// const colorEl = document.querySelector('.flip-color-btn');


flipColorBtnEl.addEventListener("click", ()=>{
    bgColorEl.textContent = ` Background Color : ${colorFlipper()}`;
    containerEl.style.backgroundColor = colorFlipper();
});
flipColorBtnEl.addEventListener('mouseover', () => {
    
    // this line will also do the same thing as line written below
    // flipColorBtnEl.style.backgroundColor = `var(--bg-color, ${colorFlipper()})`;
    document.body.style.backgroundColor =  `var(--bg-color, ${colorFlipper()})`;
});
function colorFlipper(){
    //This wil generate random values for red, green and blue(values < 256)
    const red = Math.floor(Math.random()* 256);
    const green = Math.floor(Math.random()* 256);
    const blue = Math.floor(Math.random()* 256);
    
    //this variable has all the color values
    const color = `rgb(${red}, ${blue}, ${green})`;
    return color;
}
// console.log(colorFlipper())