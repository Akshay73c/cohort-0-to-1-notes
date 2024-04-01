// given an array, give me back a new array in which every value is multiplied by 2
// array.map(f) - map takes a function to apply on that arr

const input = [1, 2, 3, 4, 5, 28];

function transform(i) {
  return i * 2;
}

const ans = input.map(transform);

console.log(ans);

// filter - given an array, give only filtered values
// given an arra, give me all even valules

function filteringLogic(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const ans2 = input.filter(filteringLogic);
console.log(ans2);
