// You will be given a number and you will need to return it as a string in Expanded Form. For example:

function expandedForm(num) {
  // Your code here
  let str = num.toString();
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '0') {
      result.push(str[i] + '0'.repeat(str.length - i - 1));
    }
  }

  return result.join(' + ');
}
