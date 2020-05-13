function strReverse(reverseMe)
{

  var reverseMe = reverseMe.split('');
  var reverseArray = reverseMe.reverse('');
  var joinArray = reverseArray.join('');
  return joinArray;

}

console.log(strReverse("hello"));
