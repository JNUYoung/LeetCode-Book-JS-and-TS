var replaceSpace1 = function (s) {
    var ans = '';
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (char === ' ')
            ans += '%20';
        else
            ans += char;
    }
    return ans;
};
console.log(replaceSpace1('We are happy'));
