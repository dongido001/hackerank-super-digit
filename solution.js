function superDigit(n, k) {
    // Write your code here
    let nn = sum(n) * (!k ? 1 : k)

    function calc(nn) {
        if (nn.length <= 1) {
            return nn
        }
        nn = `${sum(nn)}`
        return calc(nn)
    }

    return calc(nn)
}

function sum(str) {
    return `${str}`.split('').reduce((acc, cur) => {
        return acc + parseInt(cur)
    }, 0)
}