

function strReverse(reverseMe)
{
  var reverseMed = document.getElementById("hellos").value.toLowerCase()
  var reverseMe = reverseMed.split('');
  var reverseArray = reverseMe.reverse();
  var joinArray = reverseArray.join('');
    if (joinArray === '' )

    {
      console.error('No Wordy No Worky!');
      alert('Please enter a word to reverse');
    }

    else {
      document.getElementById("PageOut").innerHTML = document.getElementById("hellos").value + " reversed is " + joinArray + ', and is ' + joinArray.length + ' letters long.';
    }

    if (reverseMed === joinArray && joinArray !== '')

    {
      document.getElementById("PageOut").innerHTML = document.getElementById("hellos").value + " reversed is " + joinArray + ' and it is a Palindrome';
    }

}
