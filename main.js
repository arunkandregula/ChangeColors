const randomColors = [];
const getRandomColor = ()=>{
    let randomColor = null;
    do {
        randomColor = "#" + Math.random().toString(16).substr(2,6);
    }while(randomColors.includes(randomColor));
    return randomColor;
};


for(let i = 0 ; i < 10; i++){
    randomColors.push(getRandomColor());
}

let index  = 0;
let timerId = setInterval(()=>{
    if(index === 10){
        clearInterval(timerId);
    }
    document.body.style.backgroundColor = randomColors[index++];
}, 1000);