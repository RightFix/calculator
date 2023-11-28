let name = " CALC 1.0"; 
document.write(name);
document.write(Date());
window.onload = function(){
    let one = document.getElementById("on");
    let two = document.getElementById("tw");
    let three = document.getElementById("th");
    let four = document.getElementById("fou");
    let five = document.getElementById("fiv");
    let equal = document.getElementById("eq");
    let six = document.getElementById("si");
    let seven = document.getElementById("se");
    let eight = document.getElementById("ei");
    let nine = document.getElementById("ni");
    let zero = document.getElementById("ze");
    let point = document.getElementById("do");
    let bropen = document.getElementById("bro");
    let brclose = document.getElementById("brc");
    let minus = document.getElementById("mi");
    let plus = document.getElementById("pl");
    let divide = document.getElementById("div");
    let multiply = document.getElementById("mul");
    let clear = document.getElementById("clear");
    let sine = document.getElementById("sine");
    one.onclick = function(){
        ans.result.value += 1 ;
    };
    two.onclick = function(){
        ans.result.value += 2 ;
    };
    three.onclick     = function(){
    ans.result.value += 3  ;  
    };
    four.onclick = function(){
        ans.result.value += 4 ;
    };
    five.onclick = function(){
      ans.result.value += 5 ;  
    };
    equal.onclick = function(){
      ans.result.value = eval(ans.result.value);
      if (eval(ans.result.value) === Infinity ) {
      ans.result.value = "MATH ERROR";
      };
    };
    six.onclick = function(){
      ans.result.value += 6 ;  
    };
    seven.onclick = function(){
        ans.result.value += 7 ;
    };
    eight.onclick = function(){
        ans.result.value += 8 ;
    };
    nine.onclick = function(){
        ans.result.value += 9 ;
    };
    zero.onclick = function(){
      ans.result.value += 0 ;  
    };
    bropen.onclick = function(){
        ans.result.value += "(" ;
    };
    brclose.onclick = function(){
        ans.result.value += ")" ;
    };
    point.onclick = function (){
      ans.result.value += "." ;  
    };
    minus.onclick = function(){
        ans.result.value += "-" ;
    };
    divide.onclick = function(){
        ans.result.value += "/" ;
    };
    multiply.onclick = function(){
        ans.result.value += "*" ;
    };
    plus.onclick = function(){
        ans.result.value += "+" ;
    };
    clear.onclick = function(){
        ans.result.value  = " " ;
        };
    sine.onclick = function(){
      ans.result.value = Math.sin(ans.result.value);
    };
};
