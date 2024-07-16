const imgs=[{img:'img/1.jpeg',alts:'Image 1 is loading....',},
            {img:'img/2.jpeg',alts:'Image 2 is loading....',},
            {img:'img/3.jpeg',alts:'Image 3 is loading....',},
            {img:'img/4.jpeg',alts:'Image 4 is loading....',},
            {img:'img/5.jpeg',alts:'Image 5 is loading....',},
            {img:'img/6.jpeg',alts:'Image 6 is loading....',},
            {img:'img/7.jpeg',alts:'Image 7 is loading....',},
            {img:'img/8.jpeg',alts:'Image 8 is loading....',},
            {img:'img/9.jpeg',alts:'Image 9 is loading....',},
            {img:'img/10.jpeg',alts:'Image 10 is loading....',},
        ];

let index=0;
const pic=document.getElementById('pic');

// Initial load
window.addEventListener('DOMContentLoaded',function(){
    showDetails(index);
});

function showDetails(index){
    const show=imgs[index];
    pic.src=show.img;
    pic.alt=show.alts;
}

// Right button click
document.getElementById('right').addEventListener('click',function(){
    index++;
    if (index>=imgs.length){
        index=0;
    }
    slideImage('next');
});

// Left button click
document.getElementById('left').addEventListener('click',function(){
    index--;
    if (index<0){
        index=imgs.length-1;
    }
    slideImage('prev');
});

// Function to slide image
function slideImage(direction){
    const offset=direction==='next'?10:-10;
    pic.style.transition='transform 0.5s ease';
    pic.style.transform=`translateX(${offset}%)`;
    
    setTimeout(()=>{
        pic.style.transition='none';
        showDetails(index);
        pic.style.transform=`translateX(${-offset}%)`;
        
        setTimeout(()=>{
            pic.style.transition='transform 0.5s ease';
            pic.style.transform='translateX(0)';
        }, 50);
    }, 500);
}