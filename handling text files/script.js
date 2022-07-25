const btn= document.getElementById('button');
// create event listener
btn.addEventListener('click',()=>{
    // create XHR object
var xhr= new XMLHttpRequest();
// open has three parameters the request type/method, file/url, whether it is synchronous or not 
xhr.open('GET','sample.txt',true)

// HTTP Status codes
// 200 - OK
// 403- Forbidden
// 500- Not found

xhr.onload= function (){
    // onload occurs when response is ready and request is finished(ready state 4) while onreadystatechange occurs during state change ie:1 to 4
    console.log(xhr.readyState)
    if(this.status==200){
        console.log(this.responseText);
    }
}
// error handler
xhr.onerror=()=>{
    console.log('Request Error.......');
}



//onprogress is used for loaders
// It occurs during processing request (ready state 3)
xhr.onprogress=()=>{
    console.log(xhr.readyState)
    
} 


xhr.onreadystatechange= function (){
    console.log(xhr.readyState)
    if(xhr.readyState==4 && xhr.status==200){
        console.log(this.responseText);
        document.getElementById('text').innerHTML=xhr.responseText;
    }
    else if(this.status==404){
        document.getElementById('text').innerHTML='Sorry File Not Found';

    }
    else{
        
    }
}

// readystate values
// 0 - request not initialized
// 1- server connection established
// 2- request retrieved
// 3-processing request
// 4- request dinished and response is ready 




// sends request
xhr.send();
})