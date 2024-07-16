document.getElementById('menu-btn').addEventListener('click',function(){
    const sidebar=document.getElementById('sidebar');
    if (sidebar.style.display=='none'){
        sidebar.style.display='block';
    }else{
        sidebar.style.display='none';
    };
});
  
// document.getElementById('menu-btn').addEventListener("click",function(){
//     document.getElementById('modal').style.display='none';
// });