function isBalanced(code) {

    const bracketMatch = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
  
    const leftBracket = new Set(['(', '[', '{']);
    const rightBracket = new Set([')', ']', '}']);
  
    const leftBracketStack = [];
  
    for (let i = 0; i < code.length; i++) {
      let char = code.charAt(i);
  
      if (leftBracket.has(char)) {
        leftBracketStack.push(char);
      } else if (rightBracket.has(char)) {
        if (!leftBracketStack.length) {
          return false;
        } else {
          const lastUnclosedLeft = leftBracketStack.pop();
  
          if (bracketMatch[lastUnclosedLeft] !== char) {
            return false;
          }
        }
      }
    }
    return leftBracketStack.length === 0;
  }