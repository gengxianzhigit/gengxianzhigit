// 类和原型的比较
//基于类的实现
public class Prisoner{
  public int sentence =4;
  public int probation =2;
  public string name='Joe';
  public int id=1234;
}
public Prisoner(string name,string id){
  this.name=name;
  this.id=id;
}

Prisoner firstPrisoner=new Prisoner('Joe','12A');
Prisoner secondPrisoner=new Prisoner('Sam','2BC');

//基于原型的实现
// 第一种实现
var proto ={
  sentence:4,
  probation:2
};

var Prisoner =function(name,id){
  this.name=name;
  this.id=id;
};
Prisoner.prototype=proto;
var firstPrisoner=new Prisoner('Joe','12A');
var secondPrisoner=new Prisoner('Sam','2BC');

// 第二种实现
var proto ={
  sentence:4,
  probation:2
};
var firstPrisoner=Object.create(proto);
firstPrisoner.name='Joe';
firstPrisoner.id='12A';
var secondPrisoner=Object.create(proto);
secondPrisoner.name='Sam';
secondPrisoner.id='2BC';

// 第三种
var proto ={
  sentence:4,
  probation:2
};
var makePrisoner=function(name,id){
  var prisoner=Object.create(proto);
  prisoner.name=name;
  prisoner.id=id;
  return prisoner;
};
var firstPrisoner=makePrisoner('Joe','12A');
var secondPrisoner=makePrisoner('Sam','2BC');


console.log(firstPrisoner);//json对象
console.log(firstPrisoner.__proto__);//包含sentence和probation属性
console.log(firstPrisoner.__proto__.__proto__);//{}
console.log(firstPrisoner.__proto__.__proto__.__proto__);//null
//更改对象属性值
console.log(firstPrisoner.sentence);//输出4
console.log(firstPrisoner.__proto__.sentence);//输出4

firstPrisoner.sentence=10;
console.log(firstPrisoner.sentence);//输出10
console.log(firstPrisoner.__proto__.sentence);//输出4，对象的原型属性值不改变

delete firstPrisoner.sentence;//将属性从对象中删除，之后二者回到原型链上了
console.log(firstPrisoner.sentence);//输出4
console.log(firstPrisoner.__proto__.sentence);//输出4
// 更改原型值
proto.sentence=5;
// 之后所有的对象的sentence值都为5

// 函数是javascript第一类对象，可保存在变量中，以属性，参数传给调用函数
// 函数是一个对象
function prison(){};
var prison=function(){//右侧没有名字的函数为匿名函数，用左侧的局部变量存储
  console.log('prison called');
};
prison();//显示调用函数

// 自运行匿名函数
(function(){
  var private_var='private';
})();
console.log(private_var);//输出undefined

var eatFunction=function(what_to_eat){
  var sentence='I am going to eat a '+what_to_eat;
  console.log(sentence);
};
eatFunction('sandwich');
// is the same as
(function(what_to_eat){
  var sentence='I am going to eat a '+what_to_eat;
  console.log(sentence);
})('sandwich');

(function($){
  console.log($);
})(jQuery);

// 闭包是一种抽象概念，随着程序的运行，有各种东西占用内存，如保存变量的值，否则电脑会崩溃
// 当函数调用执行完毕后，垃圾回收器（GC）会将这些东西释放，我们也无法访问执行环境中的任何东西
// 闭包的作用：阻止gc将变量从内存中移除，使得创建变量的执行环境的外面能够访问到该变量
var prison=function(){
  var prisoner='josh powell';
};
prison();
// 类似于
(function(){
  var prisoner='josh powell';
})();
// 一旦该函数执行完毕，我们就不再需要访问prisoner变量了，josh也自由了

var prison=(function(){
  var prisoner='josh powell';
  return {prisoner:prisoner};
})();
console.log(prison.prisoner);//输出josh powell，但无法执行prisoner变量

var prison=(function(){
  var prisoner='josh powell';
  return {
    prisoner:function(){
      return prisoner;
    }
  }
})();
console.log(prison.prisoner());//输出josh powell，但在每次执行prison.prisoner时，都会访问prisoner变量，返回prisoner的当前值，如果gc将其移除了，就无法访问到了。
// 闭包的作用：阻止gc将变量从内存中移除，使得创建变量的执行环境的外面能够访问到该变量