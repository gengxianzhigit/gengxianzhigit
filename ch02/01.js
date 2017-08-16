// 变量(赋值用=号)
  var book,shopping_cart,
  spa='helloworld',
  purchase_book=true,
  tell_friends=true,
  leave_mean_comment=false;

  // 对象(赋值用:号)
  var spa={
    title:'Single page web application',//属性
    authors:['Mike Mikowski','Josh powell'],//数字
    buy_now:function(){//函数
      console.log('book is purchased');
    }
  }

  // 变量作用域
  function prison(){
    prisoner_1='I have escaped';//由于前面没有写var，这个变量就作创建为全局变量了
    var prisoner_2='I am locked';
  }
  prison();
  // console.log(prisoner_2);//这一句会出错，因为无法访问到局部变量
  console.log(prisoner_1);

  //变量提升
  console.log(v);//变量声明都是自动提升到头部，但初始化值的位置不变，所有输出的v=undefined
  var v=10;
  console.log(v);

  // javascript在作用域中对代码进行两轮处理
  // 第一轮：
  // 声明并初始化函数参数
  // 声明局部变量，包括将匿名函数赋给一个局部变量，但不初始化他们
  // 声明并初始化他们
  // 第二轮：执行代码
  // 函数在调用时，会产生一个新的执行环境，叫做运行中的函数
  // 属于执行环境部分的变量和函数，被保存为执行环境对象
  var regular_joe="hello world"
  function prison2(){
    console.log(regular_joe);//输出undefined，在查找全局作用域之前，提升了该变量声明
    var regular_joe;
  }
  //prison2();

  var regular_joe="hello world"
  function prison3(regular_joe){
    console.log(regular_joe);//函数参数已经被赋值了，这里的声明多余了
    var regular_joe;
    console.log(regular_joe);
  }
  prison3(regular_joe);

// 类和原型的比较
public class Prisoner{
  public int sentence =4;
  public int probation =2;
  public string name='Joe';
  public int id=1234;
}
Prisoner prisoner=new Prisoner();
//原型
var prisoner ={
  sentence:4,
  probation:2,
  name:'Joe',
  id:1234
};