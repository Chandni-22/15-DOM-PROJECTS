document.addEventListener('DOMContentLoaded',function(){

    document.getElementById('play').addEventListener('click',function(){
        document.getElementById('video').play();
    });

    document.getElementById('pause').addEventListener('click',function(){
        document.getElementById('video').pause();
    });
});