'use strict';
var locationArr = [];
var parentElement = document.getElementById("Salmon Cookies");
var table = document.createElement('table');
table.setAttribute('id', 'cookiesTable');
parentElement.appendChild(table);
var hourArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function Location(name, minHourCus, maxHourCus, avgCuscook) {
    this.name = name;
    this.minHourCus = minHourCus;
    this.maxHourCus = maxHourCus;
    this.avgCuscook = avgCuscook;
    this.customerPerHour = [];
    this.cookiesPerHour = [];
    this.totalCookiesPerDay = 0;
    locationArr.push(this);
}
Location.prototype.getaRandomCus = function () {
    for (var i = 0; i < hourArr.length; i++) {
        var randomCust = getaRandomCus(this.minHourCus, this.maxHourCus);
        this.customerPerHour.push(randomCust);
    }

};
console.log()

function getaRandomCus(maxValue, minValue) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (maxValue * 1) + minValue);
}


Location.prototype.calculateCookiesPerHour = function () {
    var hourCookies;
    for (var i = 0; i < hourArr.length; i++) {
        hourCookies = Math.floor(this.customerPerHour[i] * this.avgCuscook);
        this.cookiesPerHour.push(hourCookies);
        this.totalCookiesPerDay += hourCookies;
    }
};


Location.prototype.render = function () {
    // var table = document.getElementById('CookiesTable');

    var tr1 = document.createElement('tr');
    table.appendChild(tr1);
    var td1 = document.createElement('td');
    td1.textContent = this.name;
    console.log(this.name);
    tr1.appendChild(td1);

    for (var i = 0; i < this.cookiesPerHour.length; i++) {
        // var tr2=document.createElement('tr');
        // table.appendChild(tr2);
        var td2 = document.createElement('td');


        td2.textContent = this.cookiesPerHour[i];
        tr1.appendChild(td2);

    }
    var tr3 = document.createElement('tr');
    var totalTd = document.createElement('td');
    totalTd.textContent = this.totalCookiesPerDay;
    tr1.appendChild(totalTd);
    // table.appendChild(tr1);



};
// function createTheTable() {
//     var parentElement = document.getElementById("Salmon Cookies");
//     var table = document.createElement('table');
//     table.setAttribute('id', 'cookiesTable');
//     parentElement.appendChild(table);

// }

function createTableHeader() {
    var headerTr = document.createElement('tr');
    var Emptyheader = document.createElement('th');
    headerTr.appendChild(Emptyheader);
    for (var i = 0; i < hourArr.length; i++) {
        var headerTh = document.createElement('th');
        headerTh.textContent = hourArr[i];
        headerTr.appendChild(headerTh);

    }
    var totalTh = document.createElement('th');
    totalTh.textContent = 'Daily Location Total';
    headerTr.appendChild(totalTh);
    var table = document.getElementById('cookiesTable');
    table.appendChild(headerTr);
};

function createTableFooter() {
    // var table = document.getElementById('cookiesTable');
    var footerTr = document.createElement('tr');
    table.appendChild(footerTr);
    var footerTd = document.createElement('td');
    footerTr.appendChild(footerTd);
    footerTd.textContent = 'Total';
    var finalTotal = 0;
    for (var i = 0;i<hourArr.length; i++) {
        
        var hourTotalTd = document.createElement('td');
        var hourTotal = 0;
        
        for (var j = 0;j<locationArr.length; j++) {
            hourTotal += locationArr[j].cookiesPerHour[i];
           
            // console.log(locationArr[j].cookiesPerHour[i]);
            // console.log(Seattle.cookiesPerHour[i]);
            // console.log(hourTotal);
        }
        finalTotal += hourTotal;
        hourTotalTd.textContent = hourTotal;
        footerTr.appendChild(hourTotalTd);
    }

    var finalTotalTd = document.createElement('td');
    finalTotalTd.textContent = finalTotal;
    footerTr.appendChild(finalTotalTd);
    table.appendChild(footerTr);
};
var Seattle = new Location('Seattle', 23, 65, 6.3);
var Tokyo = new Location('Tokyo', 23, 65, 6.3);
var Paris = new Location('Paris', 23, 65, 6.3);
var Dubai = new Location('Dubai', 23, 65, 6.3);
var Lima = new Location('Lima', 2, 16, 4.6);



// createTheTable();
createTableHeader();
for (var i = 0; i < locationArr.length; i++) {
    locationArr[i].getaRandomCus();
    locationArr[i].calculateCookiesPerHour();
    locationArr[i].render();
    
}

createTableFooter();




var kittensForm =document.getElementById("CookiesForm");
kittensForm.addEventListener('submit',call)
function call(event) {event.preventDefault();}

    var StandLocation=event.target.StandLocation.value;
var Customermin=event.target.customermin.value;
var Customermax=event.target.customermax.value;
var avg=event.target.avarage.value;
var newLocation= new Location (StandLocation,Customermin,Customermax,avg);


var newLocation= new Location (StandLocation,Customermin,Customermax,avg);

newLocation.getaRandomCus();
newLocation.calculateCookiesPerHour();
newLocation.render();
console.log(newLocation)