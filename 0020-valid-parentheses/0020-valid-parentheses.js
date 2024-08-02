/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const length = s.length;
    if (length === 0) {
        return true;
    }
    if (length === 1) {
        return false;
    }
    
    const stack = [];
    const parMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i = 0; i < length; i++) {
        if (parMap[s[i]]) {
            if (stack.pop() !== parMap[s[i]]) {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length === 0;
};