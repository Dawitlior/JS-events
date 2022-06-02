// function myFirstEvent(){
//     var myh1 = document.getElementById("my_h1");
//     myh1 = alert("hello world");
// }

// function mySecondEvent(){
// var myP = document.getElementById("my_p");
// myP = console.log("lior dawit");
// }

// function myThirdEvent(){
// var mySpan = document.getElementById("my_span")
// mySpan.style.color = "red"
// }

// function myFourEvent(){
//     var myH3 = document.getElementById("my_h1-2");
//     myH3.style.width = "20vw";
// }

// function myFifthEvent(){
//     var tar5 = document.getElementById("id_h5");
//     tar5 = document.body.innerHTML = "champions"
// }

// function mySixEvent(){
//     var userName = prompt("type sone name");
//     document.write(userName)
// }

// function mySevenEvent(){
//     var myTime = new Date();
//     var theTimeNow = myTime.getHours();
//     if(theTimeNow < myTime){
//         document.body.style.backgroundColor = "yellow";
//         document.body.innerHTML = "<h1>"+"good day"+"<h1/>"
//     }
//     else{
//         document.body.style.backgroundColor = "blue";
//         document.body.innerHTML = "<h1>" + "good evening" + "<h1/>";
//     }
// }
// mySevenEvent();



// function someFunctionOnEvent(){
// var clickMe = document.getElementById("my_p");
// clickMe.style = "cursor: pointer"

// clickMe.onclick = function(){
//     var userAge = prompt("what your age");
// if(userAge > 18){
//   clickMe.innerHTML = "<h1>" + "welcome" + "</h1>" 
//   clickMe.style.color = "red";
// }
// else{
//  clickMe.innerHTML = "<h3>" + "welcome" + "</h3>" 
//   clickMe.style.color = "blue";
// }
// }
// }
// function mouseOver1(){
//     var a1 = document.getElementById("my_p");
//     a1.style.color = "green";
// }


// 9.	צרו תוכנית לוטו, התוכנית מקבלת מהמשתמש מספר בין 0 ל - 56 ובעת לחיצה על כפתור מדפיסה אותו למסך, הפעולה קורית 5 פעמים. לאחר מכן, התוכנית מגרילה מספר בין 0 ל 56 ומדפיסה אותו למסך.

var myArray  = [];
function mainFunc() {
    if(myArray.length < 5){
        nums_user.innerText += "number : " + numberInput.value + ",";
        myArray.push(user_number.value);
        counter++        
    }
    else{
        alert("you can not type anymore numbers")
    }
}
function getAndPrintRandom(){
    var rndNum = Math.floor(Math.random()*57);
    var ranH3 = document.getElementById("rnd_h3");
    ranH3.innerText +=rndNum  
    for(var i = 0 ; i<myArray.length ; i++){
        if(rndNum == myArray[i]){
    document.getElementById("result").innerText = "you win";return;
}
    document.getElementById("result").innerText = "you lose";
    }
}








