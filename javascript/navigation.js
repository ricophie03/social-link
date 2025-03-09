const arrayOfLinkIndex = [1, 2, 3, 4, 5];
const inputType = {
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
};
let activeLink = 0;
let isHoverActive = false;

function addActiveLinkClass(activeLink) {
  const targetLink = document.getElementsByClassName(`link-${activeLink}`);
  targetLink[0].classList.add('active-link');
}

function removeActiveLinkClass(activeLink) {
  for (let index = 1; index <= arrayOfLinkIndex.length; index++) {
    if (index !== activeLink) {
      const targetLink = document.getElementsByClassName(`link-${index}`);
      targetLink[0].classList.remove('active-link');
    }
  }
}

function handleSwitchActiveLink(input) {
  let buttonInput = '';

  if (inputType[input.key]) buttonInput = input.key;
  else return;

  if (buttonInput === inputType.ArrowUp) {
    if (activeLink > 0) {
      activeLink -= 1;
      if (activeLink <= 0) activeLink = 5;
    } else activeLink = 5;
    addActiveLinkClass(activeLink);
    removeActiveLinkClass(activeLink);
  } else if (buttonInput === inputType.ArrowDown) {
    if (activeLink >= arrayOfLinkIndex[arrayOfLinkIndex.length - 1])
      activeLink = 1;
    else activeLink += 1;
    addActiveLinkClass(activeLink);
    removeActiveLinkClass(activeLink);
  }
}

document.onkeydown = function (input) {
  if (!isHoverActive) handleSwitchActiveLink(input);
};

document.onmouseover = function (element) {
  const expectedElementClass = 'link-container';
  const targetElementFirstClass = element.target.classList[0]; // expected output: link-container

  if (targetElementFirstClass === expectedElementClass) {
    isHoverActive = true;

    for (let index = 1; index <= arrayOfLinkIndex.length; index++) {
      const targetLink = document.getElementsByClassName(`link-${index}`);
      targetLink[0].classList.remove('active-link');
    }
  } else isHoverActive = false;
};
