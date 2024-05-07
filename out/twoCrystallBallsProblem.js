var twoCrystallBalls = function (breaks) {
    var jumpAmount = Math.floor(Math.sqrt(breaks.length));
    var i = jumpAmount;
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            // so the first crystall ball has reached a ceiling point at which it breaks, we now have to chek between this point and the prior jump we did
            break;
        }
    }
    i -= jumpAmount;
    for (var j = i + 1; j <= i + jumpAmount; j++) {
        if (breaks[j]) {
            return j;
        }
    }
    return -1;
};
twoCrystallBalls([
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
]);
console.log(twoCrystallBalls([
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
]));
//# sourceMappingURL=twoCrystallBallsProblem.js.map