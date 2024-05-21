let object={
    value:0,
    increment:function(){
        return (this.value=this.value+1);
    },
    decrement:function(){
        return (this.value=this.value-1);
    },
    reset:function(){
        return (this.value=0)
    },
};

// Increment function:
function plus(){
    let audio=new Audio('plus.mp3');
    audio.play();
};

document.getElementById('increase').addEventListener('click',function(){
    plus();
    document.getElementById('num').innerText=object.increment();
});

// Decrement function:
function negative(){
    let audio=new Audio('negative.mp3');
    audio.play();
};

document.getElementById('decrease').addEventListener('click',function(){
    negative();
    document.getElementById('num').innerText=object.decrement();
});

// Reset function:
document.getElementById('reset').addEventListener('click',function(){
    document.getElementById('num').innerText=object.reset();
});