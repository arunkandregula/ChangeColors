class backgroundColorChanger{

    // both args in seconds
    constructor(totalTime, timePerTransition){

        this.timePerTransition = timePerTransition;
        this.totalTime = totalTime;

        // I am not adding validation checks specifically as they were not part of spec and for simplicity.

        let num = totalTime/timePerTransition;
        let colorSet = [];

        this.generateRamdomColors(colorSet, num);

        Object.assign(this,{
            startChangingColors(){
                let index  = 0;
                let timerId = setInterval(()=>{
                    if(index === 10){
                        clearInterval(timerId);
                    }
                    document.body.style.backgroundColor = colorSet[index++];
                }, timePerTransition * 1000);
            }
        });
    }
    generateRamdomColors(set, n){
        // removing all elements from set and start fresh
        set.length = 0;
        for(let i = 0 ; i < n ; i++){
            set.push(this.getRandomColor(set));
        }
        return set;
    }
    getRandomColor(set){
        let randomColor = null;
        do {
            randomColor = "#" + Math.random().toString(16).substr(2,6);
        }while(set.includes(randomColor));
        return randomColor;
    }
}


var bgChanger = new backgroundColorChanger(10, 1);
bgChanger.startChangingColors();
