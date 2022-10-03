'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = function(numA) {
    count++;

    return (numB) => {
      if (count <= 3 || count % 2 === 1) {
        return numA + numB;
      };
    

      return 'Bzzz... Error!';
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
