/**
 * Kids With the Greatest Number of Candies
 *
 * Given an integer array `candies` and an integer `extraCandies`, return a boolean
 * array where each element indicates whether the corresponding kid can have the
 * greatest number of candies if given all `extraCandies`.
 *
 * @param {number[]} candies
 * @param {number} extraCandies
 * @returns {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
/*in this line we are creating a variable, this variable contains Math.max(...candies) which returns the largest element in the array candies
the ... operator allows for the argument to be an infinite amount of arguments which works here because there could be an infite amount of kids.*/
    let greatest = Math.max(...candies);
/* This line uses the .map() method, which modifies each element in the array, inside in the callbackfn we have each element added by the variable extraCandies(3)
if the sum of both of these are larger than greatest which is the largest element in the array, then we return that into a new array*/
    return candies.map((el)=> el + extraCandies >= greatest);
};

module.exports = kidsWithCandies;