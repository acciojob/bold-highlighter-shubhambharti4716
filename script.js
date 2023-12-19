function highlight() {
    //Write your code here
const boldWords = document.querySelectorAll('strong');

  for (let i = 0; i < boldWords.length; i++) {
    boldWords[i].classList.add('bold-highlight');
  }

}
function return_normal() {
    //Write your code here
const boldWords = document.querySelectorAll('strong');

  for (let i = 0; i < boldWords.length; i++) {
    boldWords[i].classList.remove('bold-highlight');
  }

}