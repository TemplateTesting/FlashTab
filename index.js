function strReverse(ReverseMe)
{

  let reverseMe = reverseMe.split('');
  let reverseArray = reverseMe.reverse();
  let joinArray = reverseArray.join('');
  return joinArray;

}

console.log(strReverse("hello"));
