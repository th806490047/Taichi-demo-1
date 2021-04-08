let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `
/*你好，我是一个萌新的小前端，请允许我给你表演下好吗？
 *首先我准备一个div
 */
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个太极
 * 请看！
 * 我得把 div 变成一个圆
 */
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*太极是阴阳形成得
 *所以⚪理应是一黑一白得
 *请看效果
 */
 #div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);}
/* 还要加两个神秘的小球，这样看起来更像太极 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/*看呐！一个太极就这样做出来了，我还想给它做一个效果
 *没错！转动的太极！
 *请看！
 */
 #div1{
    -webkit-transition-property: -webkit-transform;
    -webkit-transition-duration: 1s;
    -moz-transition-property: -moz-transform;
    -moz-transition-duration: 1s;
    -webkit-animation: rotate 3s linear infinite;
    -moz-animation: rotate 3s linear infinite;
    -o-animation: rotate 3s linear infinite;
    animation: rotate 3s linear infinite;
}
`

let string2 = "";
let n = 0;

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 0);
};

step();