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
    
    const parenthesesMap = {
        '}': '{',
        ']': '[',
        ')': '('
    };
    
    const storeParentheses = [];
    
    for (let i = 0; i < length; i++) {
        if (parenthesesMap[s[i]]) {
            const lastParentheses = storeParentheses.pop();
            if (lastParentheses !== parenthesesMap[s[i]]) {
                return false;
            }
        } else {
            storeParentheses.push(s[i]);
        }
    }
    
    return storeParentheses.length === 0;
};
