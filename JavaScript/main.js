var div_list = document.getElementsByTagName("div")
for(var i=0; i<div_list.length; i++){
    var red =Math.floor(Math.random()*256); //0~255
    var green = Math.floor(Math.random()* 256);
    var blue = Math.floor(Math.random()* 256);

    // 자바에 없는 10진수를 16진수로 문자열로 바꾸는 과정
    //red= toHex(red);
    //green= toHex(green);
    //blue= toHex(blue);
    
    // 백그라운드-컬러 를
    // 자바스크립트로 쓸때는 camel case로 써줘야함 
    // 백틱!!! ```` 이거 ES2015이상에서만 사용가능한 연산자 
    // 3색이 랜덤으로 변함 
    var s ="rgb("+red +","+green +","+ blue+")"
    var color_string =`rgb( ${red},${green},${blue})`  
    div_list[i].style.backgroundColor  =color_string
    div_list[i].innerHTML =color_string
}