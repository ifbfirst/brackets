module.exports = function check(str, bracketsConfig) {
    
    let openS= {
        '[': ']',
        '{': '}',
        '(': ')',
      };
  
      let stack = [];
      let ret = '';
  
      for(let i = 0; i < str.length; i++){
        let s = str[i];
  
        if(openS[s]){
          stack.push(s);
        } else {
          let br = stack.pop();
          s = openS[br];
        }
  
        ret += s;
      }
      if (stack.length > 0){
        return false
      } else {return true}
    }

  

