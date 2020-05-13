

function strReverse(reverseMe)
{
  var reverseMed = prompt("Enter a word to reverse", "default text")
  var reverseMe = reverseMed.split('');
  var reverseArray = reverseMe.reverse('');
  var joinArray = reverseArray.join('');

  document.getElementById("PageOut").innerHTML = joinArray;

}
