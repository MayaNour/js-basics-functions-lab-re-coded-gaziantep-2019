// Code your solution in this file!
function distanceFromHqInBlocks(destinationBlock){
  if(destinationBlock > 42){
    return destinationBlock - 42;
  }
  else
    return 42 - destinationBlock;
}