// Primary colors:
function primaryColors(){
    let colors=["red","yellow","blue","white"];
    let color=colors[Math.floor(Math.random()*colors.length)];
    return(color);
};
document.getElementById('btn-1').addEventListener('click',function(){
    let primary_color=primaryColors();
    document.body.style.backgroundColor=primary_color;
    document.getElementById('show').innerText=(`Background Color: ${primary_color}`);
});


// Hex colors:
function hexColor(){
    let color='#';
    const sets="0123456789ABCDEF";
    for(let i=0;i<6;i++){
        color+=sets[Math.floor(Math.random()*sets.length)];
    };
    return(color);
};
document.getElementById('btn-2').addEventListener('click',function(){
    let hex_Color=hexColor();
    document.body.style.backgroundColor=hex_Color;
    document.getElementById('show').innerText=(`Background Color: ${hex_Color}`);
});