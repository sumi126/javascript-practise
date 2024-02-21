const nums = [1,2,3,4,5,6,7];
const part = nums.slice(2,5);
console.log(part,nums);
const removed = nums.splice(2,5);
console.log(removed,nums);
const together = nums.join(" ")
console.log(together);