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
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(cityName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}
  
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


//API
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
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

        //Code Dealing With The API Data Goes Here
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

        //Code Dealing With The API Data Goes Here
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

        //Code Dealing With The API Data Goes Here
        console.log(apiResult[12].annualData[0]);
        temp2080 = document.getElementById('temp4');
        temp2080.innerHTML = apiResult[12].annualData[0]

    }
};
xmlhttp.open('GET', 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/annualavg/tas/2080/2099/USA', true);
xmlhttp.send();
