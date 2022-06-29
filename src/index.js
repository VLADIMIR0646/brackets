module.exports =
function check(str, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    let brackets = bracketsConfig[i].join('');
    if (str.includes(brackets)) {
      str = str.replaceAll(brackets, '');
      i = -1;
    }
  }
  return !str; 
}

//  module.exports =
// function check(str, bracketsConfig) {
//   let openBrackets = [];
//   let bracketsPair = {};
//   bracketsConfig.map(el => {openBrackets.push(el[0]); bracketsPair[el[1]] = el[0]})
//   let stack = [];
//   for (let i = 0; i < str.length; i++) {
//     if (openBrackets.includes(str[i])) {      
//       stack.push(str[i])
//     } else {
  
//       if (stack.length === 0) return false;
//       if (bracketsPair[str[i]] === stack[stack.length - 1]) {
//         stack.pop()
//       } else {
//         return false
//       }
//     }
//   }
//   return stack.length === 0
// }
// такая функция не срабатывает в случае если открывающая и закрывающая скобка равны.