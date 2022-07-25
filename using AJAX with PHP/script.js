document.getElementById('button').addEventListener('click',getName);
function getName(){
    var xhr=new XMLHttpRequest();
    var parameters='name=JohnDoe';
    xhr.open('GET','fetch.php?'+parameters,true);
    xhr.onreadystatechange=()=>{
        if(xhr.status==200 && xhr.readyState==4){
            console.log(xhr.responseText);
        }
    }
    xhr.send();
}