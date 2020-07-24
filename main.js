// Hamburger Menu
function hamburger() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
    }
}

// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//Tabbed Content
function openTemp(cityName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    document.getElementById(cityName).style.display = "block";
  
    elmnt.style.backgroundColor = color;
}
  
document.getElementById("defaultOpen").click();


//API
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        console.log(apiResult[6].annualData[0]);
        temp1940 = document.getElementById('temp1');
        temp1940.innerHTML = apiResult[6].annualData[0]

    }
};
xmlhttp.open('GET', 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/annualavg/tas/1940/1959/USA', true);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        console.log(apiResult[6].annualData[0]);
        temp1980 = document.getElementById('temp2');
        temp1980.innerHTML = apiResult[6].annualData[0]

    }
};
xmlhttp.open('GET', 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/annualavg/tas/1980/1999/USA', true);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        console.log(apiResult[12].annualData[0]);
        temp2020 = document.getElementById('temp3');
        temp2020.innerHTML = apiResult[12].annualData[0]

    }
};
xmlhttp.open('GET', 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/annualavg/tas/2020/2039/USA', true);
xmlhttp.send();


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        console.log(apiResult[12].annualData[0]);
        temp2080 = document.getElementById('temp4');
        temp2080.innerHTML = apiResult[12].annualData[0]

    }
};
xmlhttp.open('GET', 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/annualavg/tas/2080/2099/USA', true);
xmlhttp.send();


//Read More Button
function readMoreButton1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("readMore1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      moreText.style.display = "inline";
    }
}

function readMoreButton2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("readMore2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      moreText.style.display = "inline";
    }
}

function readMoreButton3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("readMore3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      moreText.style.display = "inline";
    }
}