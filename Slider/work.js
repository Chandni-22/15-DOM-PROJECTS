const imgs=[{img:'img/1.jpeg',alts:'Image 1 is lodding....',},
            {img:'img/2.jpeg',alts:'Image 2 is lodding....',},
            {img:'img/3.jpeg',alts:'Image 3 is lodding....',},
            {img:'img/4.jpeg',alts:'Image 4 is lodding....',},
            {img:'img/5.jpeg',alts:'Image 5 is lodding....',},
            {img:'img/6.jpeg',alts:'Image 6 is lodding....',},
            {img:'img/7.jpeg',alts:'Image 7 is lodding....',},
            {img:'img/8.jpeg',alts:'Image 8 is lodding....',},
            {img:'img/9.jpeg',alts:'Image 9 is lodding....',},
            {img:'img/10.jpeg',alts:'Image 10 is lodding....',},
        ];

        
let index=0;

window.addEventListener('DOMContentLoaded',function(){
    showDetails(index);
});

function showDetails(index){
    const show=imgs[index];
    document.getElementById('pic').src=show.img;
    document.getElementById('pic').alt=show.alts;
};

// Right button:
document.getElementById('right').addEventListener('click',function(){
    index++;
    if (index>(imgs.length-1)){
        index=0;
    };
    showDetails(index);
});

// Left button:
document.getElementById('left').addEventListener('click',function(){
    index--;
    if (index<0){
        index=(imgs.length-1);
    };
    showDetails(index);
});