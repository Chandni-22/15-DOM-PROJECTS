const ids=[{name:'Snake',img:'img/snake.jpeg',review:'Many people fear snakes for their potential venom. However, most snakes are non-venomous and vital for controlling pests like rodents.',},
           {name:'Sharks',img:'img/shark.jpg',review:'Feared due to their portrayal in media, shark attacks on humans are rare. Sharks play a crucial role in ocean ecosystems by maintaining the balance of marine life.',},
           {name:'Spiders',img:'img/spiders.jpeg',review:'Often feared for their appearance and potential venom, most spiders are harmless and help control insect populations.',},
           {name:'Crocodiles',img:'img/crocodiles.jpeg',review:'Known for their powerful jaws and aggressive behavior, crocodiles can be dangerous. They are important apex predators in their habitats.',},
           {name:'Bats',img:'img/bats.jpeg',review:'Feared for their association with diseases and darkness, bats are essential for pollination, seed dispersal, and insect control.',},
           {name:'Wolves',img:'img/wolves.jpeg',review:'Often seen as dangerous predators, wolves generally avoid humans. They are key to maintaining healthy ecosystems by controlling prey populations.',},
          ];

let id=0;

window.addEventListener('DOMContentLoaded',function(){
    showDetails(id);
});

function showDetails(id){
    const item=ids[id];
    document.getElementById('pic').src=item.img;
    document.getElementById('name').innerText=item.name;
    document.getElementById('reviews').innerText=item.review;
};

// Right button:
document.getElementById('right').addEventListener('click',function(){
    id++;
    if (id>(ids.length-1)){
        id=0;
    };
    showDetails(id);
});

// Left button:
document.getElementById('left').addEventListener('click',function(){
    id--;
    if (id<0){
        id=(ids.length-1);
    };
    showDetails(id);
});