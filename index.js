function strReverse(i)
{

  let i = i.split('');
  let reverseArray = i.reverse();
  let joinArray = reverseArray.join('');
  return joinArray;

}

console.log(strReverse("hello"));
