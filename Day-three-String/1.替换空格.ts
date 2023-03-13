const replaceSpace1 = function(s: string): string {
    let ans = ''
    for (const char of s) {
        if (char === ' ') ans += '%20'
        else ans += char
    }
    return ans
}

console.log(replaceSpace1('We are happy'));
