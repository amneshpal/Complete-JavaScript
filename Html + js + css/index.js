// Install NodeJs
// FOR RUN-->    node filename.js
// </ex-->   node a.js

// previous notes write here 







// chapter 11  ---> Event Handling 
// 4 way to write event in js 
// EVENT-

// * change in the 'state' of an "object" is called event.
// * when js is used in html pages then js can react on these event.

// ex-

// an html button was clicked.
// an html input field was changed.
// when web page was fineshed loaded.


// Event obj.

// MouseEvant in JS 
// Keyboard event in js 
// InputEvent in js 



// Section 1: -->
// 4 ways to writting event in js /
// 1) using inline event alert();
// 2) by calling the function 
// 3) using inline even (HTML onclick= " " prperty and element.onclick)
// 4) using event listner 

// go to -----> a.html 


// Section 2: -----> what is event object?-----------------> goto  onclickevent.html
// Event obj is the parent object of the event object. 
// for Example 
// MouseEvent, FocusEvent, KeyboardEvent etc





// Section 3: ----->
// MouseEvent in java script 
// event that occur when the mouse interacts with the html documents belongs to the mouse event object.

// mouseDown
// mouseUP
// mouseenter
// mouseleave

// go to html file and search mouse event----------->
 


// Section 4: ----->

// keyboardevent in javascript--------->
// that event when occur user presses a key on the keyboard.
// blongs to the keyboard object.
 
// 1)onkeypress.
// 2)onkeyup.
// 3)onkeydown.

// section 5:-------------->

// inputevent in js.
// the onchange event occurs when the value of an element has been changed.

//  for radiobuttons and checkboxes, the onchange event occour when the checked state has been change. 

// go to  a.html----------->and find input events



// interview question ----->

// diffrence b/w onclick, addEventListener. 
// 

// addEventListener does not overwrite. existing event handlerd,
// whareas onclick overrides any existing onclick = fn event handlers.


// onclick will always Worke, whereas addEventListner does not work in internet explorer before version 9.










// ################################################################     chapter 11    #####################################################
//                                                             timing based event in js ------------->

// 1}setTimeout()
// 2}setInterval()
// 3}clearTimeout()
// 4}clearInterval()




// the window obj allows execution of code at specified time intervals.
// these time intervals are called timing event. 



// settimeout()---------->
// setTimeout(function,milliseconds)
//  execute the num after the specific num of milisecond 




// 3}clearTimeout()-----------> event ko rokna clear time out hota h like- -> loadding stop



// setInterval ----------->

// setInterval(function,milliseconds)
// same as set timeout(), repeat the execution of funcation <div ------------> 




// Q8 interview question -------->
// difference b/w setTimeOut and setIntervel();
// set time out ak bar fun execut karta h.
// setintervel continious function ko execute karta h.


// ############################################################################Oops in js ####################################################################################

// what is object litrals. 
// what is this object. 

// what is object litrals?
// obj literal is simple a key:value pair data structure.

// storing variable and funcation together in one container,

// how to create an object

// 1st way 
// let biodata = {
//     myName : "amneshpal",
//     myAge:26,
//     getData : function(){
//     console.log(`My name is ${biodata.myName } my age id ${biodata.myAge}`);
//     }

// }
// // console.log(biodata.getData());
// biodata.getData();


// NOTE : object ke andar funcation ko call karna method hota h. 
// : (colon) se phle vala key or bad vala value hota h. 


// 2st way 

// no need to write function as well as es6. 

// let biodata = {
//     myName : "amneshpal",
//     myAge:26,
//     getData (){       // no need to write : & function.
//     console.log(`My name is ${biodata.myName } my age id ${biodata.myAge}`);
//     }

//  }//       idi ko obj litrals khte h 
// // console.log(biodata.getData());






// what if we want object as a value inside an object{obj ke andar dusra obj}

// let biodata = {
//     myName : {
//         realName : "amnesh",
//         channelName:"pal"
//     },
//     myAge:26,
//     getData : function(){
//     console.log(`My name is ${biodata.myName } my age id ${biodata.myAge}`);
//     }

// }
// console.log(biodata.myName.channelName);


// what is this ❤ object.

// it contain the current context. 
// this object can have diffrent values depending on where it is placed. 

// for example  1
// console.log(this);
// it refers to the current context and that is window "global object". 



// ex 2: 

// function myName(){
//     console.log(this);
    
// }
// myName(); \\\\ iska bhi current context window hi h function nahi h. 


// ex 3------------>

// var myNames ='vinod';    //<--------- global variable
// function myName(){
//     console.log(this.myNames);
// }
// myName();


const obj ={
    myAge: 26,
    myName(){
        console.log(this.myAge);
    }
}
Obj.myName();
















































// 1) 

















console.log('hello');