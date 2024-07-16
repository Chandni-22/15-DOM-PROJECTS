function createList(text){
    const li=document.createElement('li');
    li.innerHTML=`${text} <button class="delete-btn">Delete</button>`;
    document.getElementById('list').appendChild(li);
};

//Add item function:
document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();
    const itemInput=document.getElementById('item');
    const itemText=itemInput.value.trim();
    if (itemText !== ''){
        createList(itemText);
        document.getElementById('item').value= '';
        showMessage('Item added successfully!!','green');
    }else{
        showMessage('Please enter an item!!','red');
    };
});

//Delete item function:
document.getElementById('list').addEventListener('click',function(e){
    if (e.target.classList.contains('delete-btn')){
        e.target.parentElement.remove();
    };
});

//List clear function:
document.getElementById('clear-btn').addEventListener('click',function(){
    document.getElementById('list').innerHTML='';
    showMessage('List cleared successfully','green');
});

//Display message function:
function showMessage(text,color){
    document.getElementById('message').textContent=text;
    document.getElementById('message').style.color=color;
};