// Code your solution in this file!
function distanceFromHqInBlocks(destinationBlock){
  if(destinationBlock > 42){
    return destinationBlock - 42;
  }
  else
    return 42 - destinationBlock;
}

function distanceFromHqInFeet(destinationBlock){
  if(destinationBlock > 42){
    return (destinationBlock - 42) * 264;
  }
  else
    return (42 - destinationBlock) * 264;
}

function distanceTravelledInFeet(beginningBlock, destinationBlock){
  if(destinationBlock > beginningBlock)
    return (destinationBlock - beginningBlock) * 264;
  else
    return (beginningBlock - destinationBlock) * 264;
}

function calculatesFarePrice(beginningBlock, destinationBlock){
  let feet = 0;
  if(destinationBlock > beginningBlock)
    {
      feet = (destinationBlock - beginningBlock) * 264;
    }
  else
    {
      feet = (beginningBlock - destinationBlock) * 264;
    }
    
    if(feet > 2500)
      return 'cannot travel that far';
    else if(feet > 2000)
      return 25;
    else if(feet > 400 && feet <= 2000)
      return (feet-400) * 2 / 100;
    else if(feet <= 400)
      return 0;
}