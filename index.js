function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(endBlock - startBlock) * 264;
}

function calculatesFarePrice() {
  return 
}

describe('distanceTravelledInFeet()', function() {
    it('returns the distance travelled in feet', function() {
      expect(distanceTravelledInFeet(43, 48)).to.equal(1320);
    });

    it('returns a distance in feet', function() {
      expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
    });

    it('returns distance when destination is below distance', function() {
      expect(distanceTravelledInFeet(34, 28)).to.equal(1584);
    });
  });