// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${htmlStartValue * 3.6
    }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${javascriptStartValue * 3.6
    }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// sql progress circular bar 
let sqlProgress = document.querySelector(".sql"),
  sqlValue = document.querySelector(".sql-progress");

let sqlStartValue = 0,
  sqlEndValue = 70,
  sqlspeed = 30;

let progresssql = setInterval(() => {
  sqlStartValue++;

  sqlValue.textContent = `${sqlStartValue}%`;
  sqlProgress.style.background = `conic-gradient(#20c997 ${sqlStartValue * 3.6
    }deg, #ededed 0deg)`;

  if (sqlStartValue == sqlEndValue) {
    clearInterval(progresssql);
  }
}, sqlspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 80,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${reactStartValue * 3.6
    }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);

// python progress circular bar 
let pythonProgress = document.querySelector(".python"),
  pythonValue = document.querySelector(".python-progress");

let pythonStartValue = 0,
  pythonEndValue = 80,
  pythonSpeed = 30;

let progressPython = setInterval(() => {
  pythonStartValue++;

  pythonValue.textContent = `${pythonStartValue}%`;
  pythonProgress.style.background = `conic-gradient(#007bff ${pythonStartValue * 3.6}deg, #ededed 0deg)`;

  if (pythonStartValue == pythonEndValue) {
    clearInterval(progressPython);
  }
}, pythonSpeed);

// mongodb progress circular bar 
let mongodbProgress = document.querySelector(".mongodb"),
  mongodbValue = document.querySelector(".mongodb-progress");

let mongodbStartValue = 0,
  mongodbEndValue = 80,
  mongodbSpeed = 30;

let progressMongoDB = setInterval(() => {
  mongodbStartValue++;

  mongodbValue.textContent = `${mongodbStartValue}%`;
  mongodbProgress.style.background = `conic-gradient(#4caf50 ${mongodbStartValue * 3.6}deg, #ededed 0deg)`;

  if (mongodbStartValue == mongodbEndValue) {
    clearInterval(progressMongoDB);
  }
}, mongodbSpeed);

// Reusable function for circular progress
function createCircularProgress(selector, valueSelector, endValue, color) {
  let element = document.querySelector(selector);
  let value = document.querySelector(valueSelector);
  let startValue = 0;
  let speed = 30;

  let progress = setInterval(() => {
    startValue++;
    value.textContent = `${startValue}%`;
    element.style.background = `conic-gradient(${color} ${startValue * 3.6}deg, #ededed 0deg)`;

    if (startValue == endValue) clearInterval(progress);
  }, speed);
}

// Machine Learning
createCircularProgress(".machine-learning", ".ml-progress", 50, "#ff9800");

// Java
createCircularProgress(".java", ".java-progress", 75, "#f44336");

// Django
createCircularProgress(".django", ".django-progress", 65, "#4caf50");

// NodeJS
createCircularProgress(".nodejs", ".nodejs-progress", 80, "#3f51b5");










// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('navbar-top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar-top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});