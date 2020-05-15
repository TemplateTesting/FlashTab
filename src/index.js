

function strReverse(reverseMe)
{
  var reverseMed = document.getElementById("hellos").value
  var reverseMe = reverseMed.split('');
  var reverseArray = reverseMe.reverse('');
  var joinArray = reverseArray.join('');

  document.getElementById("PageOut").innerHTML = document.getElementById("hellos").value + " reversed is " + joinArray;

}
