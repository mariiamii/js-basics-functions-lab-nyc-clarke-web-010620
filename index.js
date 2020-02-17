function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(endBlock - startBlock) * 264;
}

function calculatesFarePrice(startBlock, endBlock) {
  let distance = distanceTravelledInFeet(startBlock, endBlock)
  
  switch () {
    case distance <= 400:
      return 0;
    case distance > 400 && <= 2000:
      return ((distance - 400) * 0.02);
    case distance > 2000 && 2500:
      return 25;
    case distance >= 2500:
      return 'cannot travel that far';
  }
}