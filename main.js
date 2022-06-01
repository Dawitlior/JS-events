function myFirstEvent(){
    var myh1 = document.getElementById("my_h1");
    myh1 = alert("hello world");
}

function mySecondEvent(){
var myP = document.getElementById("my_p");
myP = console.log("lior dawit");
}

function myThirdEvent(){
var mySpan = document.getElementById("my_span")
mySpan.style.color = "red"
}

function myFourEvent(){
    var myH3 = document.getElementById("my_h1-2");
    myH3.style.width = "20vw";
}

function myFifthEvent(){
    var tar5 = document.getElementById("id_h5");
    tar5 = document.body.innerHTML = "champions"
}

function mySixEvent(){
    var userName = prompt("type sone name");
    document.write(userName)
}

function mySevenEvent(){
    var myTime = new Date()
    if(myTime <12){
        document.body.style.backgroundColor = "yellow";
        document.body.innerHTML = "<h1>"+"good day"+"<h1/>"
    }
    else{
        document.body.style.backgroundColor = "blue";
   
    }
}