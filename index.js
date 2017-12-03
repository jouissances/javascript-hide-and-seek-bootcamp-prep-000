function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
}

function increaseRankBy(n) {
  const ranks = document.getElementsByClassName('ranked-list');
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = (i + parseInt(n)).toString()
  }
}

function deepestChild() {
  document.querySelector('#grand-node div div div div')
}