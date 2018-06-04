const threeSum = (nums, target) => {
  // put your code here !!
    var tamp = 0;
    var Array = [];
    var SubArray = [];
    for(var i=0;i<nums.length-2;i++){
      for(var j=i+1 ;j<nums.length-1;j++){
        for(var k=j+1;k<nums.length;k++){
          if(nums[i]+nums[j]+nums[k]==target){
            SubArray.push([Math.abs(nums[i]),Math.abs(nums[j]),Math.abs(nums[k])]);
          }
        }
      }
    }
    console.log('result is ', SubArray);
  return SubArray;
};

module.exports = { threeSum };
