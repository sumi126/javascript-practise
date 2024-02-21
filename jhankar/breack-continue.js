let nums = [1,2,3,4,5,6,7,8,9];
for(let i = 0;i<9;i++)
{
    if(nums[i]>3){
        break;
    }
    console.log(nums[i]);
}
let numbs = [1,-2,3,-4,5,-6,7,8,9];

for(let i = 0;i<9;i++)
{
    if(numbs[i]<0){
        continue ;
    }
    console.log(numbs[i]);
}