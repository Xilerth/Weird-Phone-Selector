let phoneNumber = "";

const root = document.documentElement;


function buildGif(url) {
  return `url(${url})`;
}

function changeValue(number) {
  root.style.setProperty("--gif-url", buildGif(gifUrls[number]));
}

function setNumber(number) {
  console.log(number);
  phoneNumber += number;
  document.querySelector(".phone-number").innerHTML = phoneNumber;
  resetNumber();
}

function resetNumber() {
  document.querySelector(".phone").value = 0;
  changeValue(0);
}

function removeNumber() {
  phoneNumber = phoneNumber.slice(0, -1);
  document.querySelector(".phone-number").innerHTML = phoneNumber;
}

gifUrls = {
  0: "gif/0.gif",
  1: "gif/1.gif",
  2: "gif/2.gif",
  3: "gif/3.gif",
  4: "gif/4.gif",
  5: "gif/5.gif",
  6: "gif/6.gif",
  7: "gif/7.gif",
  8: "gif/8.gif",
  9: "gif/9.gif",
};
