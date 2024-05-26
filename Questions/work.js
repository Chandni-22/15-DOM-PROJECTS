document.querySelectorAll('.question').forEach(function(question){
    question.querySelector('.btn').addEventListener('click',function(){
        document.querySelectorAll('.main-div').forEach(function(item){
            if (item!==question.parentElement){
                item.classList.remove('show-text');
            };
        });
        question.parentElement.classList.toggle('show-text');
    });
});