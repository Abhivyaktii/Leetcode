/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (!Array.isArray(prices)) {
        throw new Error("Input must be an array");
    }

    if (prices.length === 0) {
        return 0;
    }

    let maxProfitSoFar = 0;
    let minSoFar = prices[0];

    for (let price of prices) {
        if (price < minSoFar) {
            minSoFar = price;
        } else {
            maxProfitSoFar = Math.max(maxProfitSoFar, price - minSoFar);
        }
    }

    return maxProfitSoFar;
}