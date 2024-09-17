/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let high = Math.max(...piles);
    
    const canFinish = (speed) => {
        let time = 0;
        for (let pile of piles) {
            time += Math.ceil(pile / speed);
        }
        return time <= h;
    };

    let low=1;
    while(low<=high){
        let mid = Math.floor((low + high) / 2);
        if (canFinish(mid)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    };
    return low;
};