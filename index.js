const wrapper = document.querySelector('#wrapper');
let result = document.querySelector('#result');
function BgColor(){
        let deg = Number(document.querySelector('#in3').value);
        if(isNaN(deg)){alert('enter a number'); return}
        let val1 = document.querySelector('#in1').value;
        let val2 = document.querySelector('#in2').value;
        let res = `linear-gradient(${deg}deg, ${val1}, ${val2})`;
        wrapper.style.background = res;
        result.innerHTML  = res; 
        
} 
let temp = document.querySelector('#temp')
function copy(e) {
      temp.value = result.textContent;   
      if (temp.select) {
        temp.select();
        try {
          document.execCommand('copy');
        } catch (err) {
          alert('please press Ctrl/Cmd+C to copy manually');   
        }
    
      }
      
      }
BgColor();