const wrapper = document.querySelector('#wrapper');
let result = document.querySelector('#result');
function BgColor(){
        let val1 = document.querySelector('#in1').value;
        let val2 = document.querySelector('#in2').value;
        let deg = document.querySelector('#in3').value;
        let res = `linear-gradient(${deg}deg, ${val1}, ${val2})`;
        wrapper.style.background = res;
        result.innerHTML  = res;         
}
BgColor();