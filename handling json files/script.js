document.getElementById('button1').addEventListener('click',loadUser);
function loadUser(){
    const xhr=new XMLHttpRequest();
    xhr.open('GET','user.json',true);
    xhr.onload=()=>{
        if(xhr.readyState==4 && xhr.status==200){
            var user=JSON.parse(xhr.responseText);
            console.log(user);
            var output='';
            output+='<ul>' +
            '<li> ID: '+user.id+'</li>'+
            '<li> Name: '+user.name+'</li>'+
            '<li> Email: '+user.email+'</li>'+
           '</ul>' ;
            document.getElementById('user').innerHTML=output;
        }
    }
    xhr.send();
}
document.getElementById('button2').addEventListener('click',loadUsers);
function loadUsers(){
    const xhr=new XMLHttpRequest();
    xhr.open('GET','users.json',true);
    xhr.onload=()=>{
        if(xhr.readyState==4 && xhr.status==200){
            var users=JSON.parse(xhr.responseText);
            console.log(users);
            
            var output='';
            for( var i in users){
                output+='<ul>' +
                '<li> ID: '+users[i].id+'</li>'+
                '<li> Name: '+users[i].name+'</li>'+
                '<li> Email: '+users[i].email+'</li>'+
               '</ul>' ;
            }
           
            document.getElementById('users').innerHTML=output;
        }
    }
    xhr.send();
}