const maxFloor = input => {
    // put your code here !!
    var floor = 0;
    const calc = (input, index) => {
        var result = input - index;
        if (result === 0) {
            console.log('floor', floor);
            return floor + 1;
        } else if (result < 0) {
            console.log('floor', floor);
            return floor;
        } else if (result > 0) {
            floor++;
            return calc(result, index + 1)
        }
    }
    return calc(input, 1)
};
module.exports = {maxFloor}