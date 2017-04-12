$(document).ready(function(){
	$("#my-button").click(function(e){
		console.log("event:        ", e);
		console.log("event.target: ", e.target);
		console.log("this $:       ", $(this));
		console.log("this:         ", this)	
	});



});

// this.a = 37;
// console.log(window.a);

// var fubar = "42";

// function baz(){
// 	console.log("baz");
// 	bar();
// }

// function bar(){
// 	console.log("bar");
// 	foo();
// }

// function foo(){
// 	console.log("foo");
// 	var fubar = "13";
// 	console.error("this", this);
// 	console.error("fubar", this.fubar);
// }

// baz();

// ex 2
// var a = 3;
// function foo(){
// 	console.log("this", this); 
// 	console.log("a", this.a);
// }

// var obj = {
// 	a: 2,
// 	monkey: foo
// };

// obj.monkey();


//Ex: 3

// function foo(){
// 	console.log("this", this); 
// 	console.log("a", this.a);
// }

// var obj2 = {
// 	a: 32,
// 	monkey: foo
// };

// var obj1 = {
// 	a: 2,
// 	obj2: obj2
// }

// obj1.obj2.foo();

//Ex: 4

// function foo(){
// 	console.log("this", this); 
// 	console.log("a", this.a);
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// };

// var bar = obj.foo;

// var a = "global";

// // obj.foo();

// bar();

//ex: 5


function foo(){
	console.log("this", this); 
	console.log("a", this.a);
}

//call back function
function doFoo(fn){
	return fn();
}

var obj = {
	a: 2,
	foo: foo
};

var a = "global";

doFoo(obj.foo);




