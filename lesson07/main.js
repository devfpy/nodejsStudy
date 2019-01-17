var util = require("util");

function Base(){
    this.name = "Base";
    this.base = 1991;
    this.sayHello = ()=>{
        console.log(this.name+" say Hello");
    }
}

Base.prototype.showName = function() { 
    console.log(this.name);
}; 

function Sub(){
    this.name = "sub";
}

util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
// objSub.sayHello();
console.log(objSub);



//注意：Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。