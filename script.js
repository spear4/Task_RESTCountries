//XML HTTP Request
//1.Creating a XHR object
 var request = new XMLHttpRequest();
 //2.open a connection(specify the URL)
 request.open('GET','https://restcountries.com/v2/all',true);
 //3.sending a connection
 request.send();
 //4.once the serverr responded successfully, then we have to process the data
 request.onload = function(){
    var data = JSON.parse(this.response);

    for (let i=0;i<data.length;i++){
       console.log(data[i].name+" "+data[i].capital+" "+data[i].flag);

    }
console.log(data);
 }