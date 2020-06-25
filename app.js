var opningTime = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var Seattle = {
    location: 'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookies: 6.3,
    opningTime: opningTime,
    totalCookies: 0,
    numberPerHour: generateRandomeCookies(this.minCustomer, this.maxCustomer),
    renderedArray: function() {
        var parentElement = document.getElementById('Sales');

        var article = document.createElement('article');
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textContent = this.location;
        article.appendChild(h2);

        var ul = document.createElement('ul');
        article.appendChild(ul);

        for(var i = 0; i < this.opningTime.length; i++) {

            var li = document.createElement('li');

            this.numberPerHour = generateRandomeCookies(this.minCustomer, this.maxCustomer);
            this.totalCookies += this.numberPerHour * Math.floor(this.avgCookies);
            li.textContent = this.opningTime[i] + ' : ' + this.numberPerHour * Math.floor(this.avgCookies) + ' Cookies';
            ul.appendChild(li);
        }

        var totlaLi = document.createElement('li');
        totlaLi.textContent = 'Total : ' + this.totalCookies + ' Cookies';
        ul.appendChild(totlaLi);
    }
};

Seattle.renderedArray();


var Tokyo = {
    location: 'Tokyo',
    minCustomer: 3,
    maxCustomer: 24,
    avgCookies: 1.2,
    opningTime: opningTime,
    totalCookies: 0,
    numberPerHour: generateRandomeCookies(this.minCustomer, this.maxCustomer),
    renderedArray: function() {
        var parentElement = document.getElementById('Sales');

        var article = document.createElement('article');
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textContent = this.location;
        article.appendChild(h2);
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

        var ul = document.createElement('ul');
        article.appendChild(ul);

        for(var i = 0; i < this.opningTime.length; i++) {

            var li = document.createElement('li');

            this.numberPerHour = generateRandomeCookies(this.minCustomer, this.maxCustomer);
            this.totalCookies += this.numberPerHour * Math.floor(this.avgCookies);
            li.textContent = this.opningTime[i] + ' : ' + this.numberPerHour * Math.floor(this.avgCookies) + ' Cookies';
            ul.appendChild(li);
        }

        var totlaLi = document.createElement('li');
        totlaLi.textContent = 'Total : ' + this.totalCookies + ' Cookies';
        ul.appendChild(totlaLi);
    }
};

Tokyo.renderedArray();

var Dubai = {
    location: 'Dubai',
    minCustomer: 11,
    maxCustomer: 38,
    avgCookies: 3.7,
    opningTime: opningTime,
    totalCookies: 0,
    numberPerHour: generateRandomeCookies(this.minCustomer, this.maxCustomer),
    renderedArray: function() {
        var parentElement = document.getElementById('Sales');

        var article = document.createElement('article');
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textContent = this.location;
        article.appendChild(h2);

        var ul = document.createElement('ul');
        article.appendChild(ul);

        for(var i = 0; i < this.opningTime.length; i++) {

            var li = document.createElement('li');

            this.numberPerHour = generateRandomeCookies(this.minCustomer, this.maxCustomer);
            this.totalCookies += this.numberPerHour * Math.floor(this.avgCookies);
            li.textContent = this.opningTime[i] + ' : ' + this.numberPerHour * Math.floor(this.avgCookies) + ' Cookies';
            ul.appendChild(li);
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

        var totlaLi = document.createElement('li');
        totlaLi.textContent = 'Total : ' + this.totalCookies + ' Cookies';
        ul.appendChild(totlaLi);
    }
};

Dubai.renderedArray();


var Paris = {
    location: 'Paris',
    minCustomer: 20,
    maxCustomer: 38,
    avgCookies: 2.3,
    opningTime: opningTime,
    totalCookies: 0,
    numberPerHour: generateRandomeCookies(this.minCustomer, this.maxCustomer),
    renderedArray: function() {
        var parentElement = document.getElementById('Sales');

        var article = document.createElement('article');
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textContent = this.location;
        article.appendChild(h2);

        var ul = document.createElement('ul');
        article.appendChild(ul);

        for(var i = 0; i < this.opningTime.length; i++) {

            var li = document.createElement('li');

            this.numberPerHour = generateRandomeCookies(this.minCustomer, this.maxCustomer);
            this.totalCookies += this.numberPerHour * Math.floor(this.avgCookies);
            li.textContent = this.opningTime[i] + ' : ' + this.numberPerHour * Math.floor(this.avgCookies) + ' Cookies';
            ul.appendChild(li);
        }

        var totlaLi = document.createElement('li');
        totlaLi.textContent = 'Total : ' + this.totalCookies + ' Cookies';
        ul.appendChild(totlaLi);
    }
};

Paris.renderedArray();

var Lima = {
    location: 'Lima',
    minCustomer: 2,
    maxCustomer: 16,
    avgCookies: 4.6,
    opningTime: opningTime,
    totalCookies: 0,
    numberPerHour: generateRandomeCookies(this.minCustomer, this.maxCustomer),
    renderedArray: function() {
        var parentElement = document.getElementById('Sales');

        var article = document.createElement('article');
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textContent = this.location;
        article.appendChild(h2);

        var ul = document.createElement('ul');
        article.appendChild(ul);

        for(var i = 0; i < this.opningTime.length; i++) {

            var li = document.createElement('li');

            this.numberPerHour = generateRandomeCookies(this.minCustomer, this.maxCustomer);
            this.totalCookies += this.numberPerHour * Math.floor(this.avgCookies);
            li.textContent = this.opningTime[i] + ' : ' + this.numberPerHour * Math.floor(this.avgCookies) + ' Cookies';
            ul.appendChild(li);
        }

        var totlaLi = document.createElement('li');
        totlaLi.textContent = 'Total : ' + this.totalCookies + ' Cookies';
        ul.appendChild(totlaLi);
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

Lima.renderedArray();

function generateRandomeCookies(min, max) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (max - min + 1)) + min;
}

   



// "use strict";
// var workingHours = ["6 am", "7am", "8 am", "10 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// var newNum = 0;
// var finalscale = 0;
// var Seattle = {
//     minValue: 23,
//     maxValue: 65,
//     AvgValue: 6.3,
//     custum: [],
//     cookiesperhour: [],
//     totalCookies: 0,

//     getCust: function () {
//         for (var i = 0; i < workingHours.length; i++) {
//             newNum = generateaRandCustomers(this.maxValue, this.minValue);
//             this.custum.push(newNum);
//         }
//     },

//     getcookiessoldbyhour: function () {
//         for (var i = 0; i < workingHours.length; i++) {
//             var numofcookies = Math.floor(this.AvgValue * this.custum[i]);
//             this.cookiesperhour.push(numofcookies);
//             this.totalCookies = this.totalCookies + numofcookies;
//         }
//     },
//     render: function () {
//         var parentElement = document.getElementById('sales');
//         var article = document.createElement('article');
//         parentElement.appendChild(article);
// for(var j=0 ; j<Locations.length ; i++)
// { 
//     var h2 = document.createElement('h2');
//         h2.textContent = 'Seatle';
//         article.appendChild(h2);
//         console.log(h2);
// }
        
       
//         var ul = document.createElement('li');
//         for (var i = 0; i < workingHours.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = workingHours[i] + ':' + this.cookiesperhour[i];
//             ul.appendChild(li);
//         }
//         var li = document.createElement('li');
//         li.textContent = 'Total : ' + this.totalCookies;
//         ul.appendChild(li);
//         article.appendChild(ul);
//     }
// };



// function generateaRandCustomers(maxValue, minValue) {
//     var randomValue = Math.random();
//     return Math.floor(randomValue * (maxValue * 1) + minValue);
// }


// Seattle.getCust();
// Seattle.getcookiessoldbyhour();
// Seattle.render();
// console.log(Seattle);




// var Tokyo = {

//     minValue: 3,
//     maxValue: 24,
//     AvgValue: 1.2,
//     custum: [],
//     cookiesperhour: [],
//     totalCookies: 0,

//     getCust: function () {
//         for (var i = 0; i < workingHours.length; i++) {
//             newNum = generateaRandCustomers(this.maxValue, this.minValue);
//             this.custum.push(newNum);
//         }
//     },

//     getcookiessoldbyhour: function () {
//         for (var i = 0; i < workingHours.length; i++) {
//             var numofcookies = Math.floor(this.AvgValue * this.custum[i]);
//             this.cookiesperhour.push(numofcookies);
//             this.totalCookies = this.totalCookies + numofcookies;
//         }
//     },
//     render: function () {
//         var parentElement = document.getElementById('sales');
//         var article = document.createElement('article');
//         parentElement.appendChild(article);

//         var h2 = document.createElement('h2');
//         h2.textcontent = 'Tokyo' ;
//         article.append(h2);
        
       
//         var ul = document.createElement('li');
//         for (var i = 0; i < workingHours.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = workingHours[i] + ':' + this.cookiesperhour[i];
//             ul.appendChild(li);
//         }
//         var li = document.createElement('li');
//         li.textContent = 'Total : ' + this.totalCookies;
//         ul.appendChild(li);
//         article.appendChild(ul);
//     }
// };



// function generateaRandCustomers(maxValue, minValue) {
//     var randomValue = Math.random();
//     return Math.floor(randomValue * (maxValue * 1) + minValue);
// }


// Tokyo.getCust();
// Tokyo.getcookiessoldbyhour();
// Tokyo.render();
// console.log(Seattle);




// var workingHours = ["6 am", "7am", "8 am", "10 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// var newNum = 0;
// var finalscale = 0;
// var Seattle = {

//     minValue: 23,
//     maxValue: 65,
//     AvgValue: 6.3,
//     custum: [],
//     cookiesperhour: [],
//     totalCookies: 0,

//     getCust: function () {
//         for (var i = 0; i < workingHours.length; i++) {
//             newNum = generateaRandCustomers(this.maxValue, this.minValue);
//             this.custum.push(newNum);
//         }
//     },

//     getcookiessoldbyhour: function () {
//         for (var i = 0; i < workingHours.length; i++) {
//             var numofcookies = Math.floor(this.AvgValue * this.custum[i]);
//             this.cookiesperhour.push(numofcookies);
//             this.totalCookies = this.totalCookies + numofcookies;
//         }
//     },
//     render: function () {
//         var parentElement = document.getElementById('sales');
//         var article = document.createElement('article');
//         parentElement.appendChild(article);

//         var h2 = document.createElement('h2');
//         h2.textcontent = 'Seatle' ;
//         article.append(h2);
        
       
//         var ul = document.createElement('li');
//         for (var i = 0; i < workingHours.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = workingHours[i] + ':' + this.cookiesperhour[i];
//             ul.appendChild(li);
//         }
//         var li = document.createElement('li');
//         li.textContent = 'Total : ' + this.totalCookies;
//         ul.appendChild(li);
//         article.appendChild(ul);
//     }
// };



// function generateaRandCustomers(maxValue, minValue) {
//     var randomValue = Math.random();
//     return Math.floor(randomValue * (maxValue * 1) + minValue);
// }


// Seattle.getCust();
// Seattle.getcookiessoldbyhour();
// Seattle.render();
// console.log(Seattle);





// var workingHours = ["6 am", "7am", "8 am", "10 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// var newNum = 0;
// var finalscale = 0;
// var Seattle = {

//     minValue: 23,
//     maxValue: 65,
//     AvgValue: 6.3,
//     custum: [],
//     cookiesperhour: [],
//     totalCookies: 0,

//     getCust: function () {
//         for (var i = 0; i < workingHours.length; i++) {
//             newNum = generateaRandCustomers(this.maxValue, this.minValue);
//             this.custum.push(newNum);
//         }
//     },

//     getcookiessoldbyhour: function () {
//         for (var i = 0; i < workingHours.length; i++) {
//             var numofcookies = Math.floor(this.AvgValue * this.custum[i]);
//             this.cookiesperhour.push(numofcookies);
//             this.totalCookies = this.totalCookies + numofcookies;
//         }
//     },
//     render: function () {
//         var parentElement = document.getElementById('sales');
//         var article = document.createElement('article');
//         parentElement.appendChild(article);

//         var h2 = document.createElement('h2');
//         h2.textcontent = 'Seatle' ;
//         article.append(h2);
        
       
//         var ul = document.createElement('li');
//         for (var i = 0; i < workingHours.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = workingHours[i] + ':' + this.cookiesperhour[i];
//             ul.appendChild(li);
//         }
//         var li = document.createElement('li');
//         li.textContent = 'Total : ' + this.totalCookies;
//         ul.appendChild(li);
//         article.appendChild(ul);
//     }
// };



// function generateaRandCustomers(maxValue, minValue) {
//     var randomValue = Math.random();
//     return Math.floor(randomValue * (maxValue * 1) + minValue);
// }


// Seattle.getCust();
// Seattle.getcookiessoldbyhour();
// Seattle.render();
// console.log(Seattle);





// var workingHours = ["6 am", "7am", "8 am", "10 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// var newNum = 0;
// var finalscale = 0;
// var Seattle = {

//     minValue: 23,
//     maxValue: 65,
//     AvgValue: 6.3,
//     custum: [],
//     cookiesperhour: [],
//     totalCookies: 0,

//     getCust: function () {
//         for (var i = 0; i < workingHours.length; i++) {
//             newNum = generateaRandCustomers(this.maxValue, this.minValue);
//             this.custum.push(newNum);
//         }
//     },

//     getcookiessoldbyhour: function () {
//         for (var i = 0; i < workingHours.length; i++) {
//             var numofcookies = Math.floor(this.AvgValue * this.custum[i]);
//             this.cookiesperhour.push(numofcookies);
//             this.totalCookies = this.totalCookies + numofcookies;
//         }
//     },
//     render: function () {
//         var parentElement = document.getElementById('sales');
//         var article = document.createElement('article');
//         parentElement.appendChild(article);

//         var h2 = document.createElement('h2');
//         h2.textcontent = 'Seatle' ;
//         article.append(h2);
        
       
//         var ul = document.createElement('li');
//         for (var i = 0; i < workingHours.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = workingHours[i] + ':' + this.cookiesperhour[i];
//             ul.appendChild(li);
//         }
//         var li = document.createElement('li');
//         li.textContent = 'Total : ' + this.totalCookies;
//         ul.appendChild(li);
//         article.appendChild(ul);
//     }
// };



// function generateaRandCustomers(maxValue, minValue) {
//     var randomValue = Math.random();
//     return Math.floor(randomValue * (maxValue * 1) + minValue);
// }


// Seattle.getCust();
// Seattle.getcookiessoldbyhour();
// Seattle.render();
// console.log(Seattle);

// createTheTable();
createTableHeader();
for (var i = 0; i < locationArr.length; i++) {
    locationArr[i].getaRandomCus();
    locationArr[i].calculateCookiesPerHour();
    locationArr[i].render();
    
}

createTableFooter();


var cookiesForm = document.getElementById('CookiesForm');
cookiesForm.addEventListener('submit', addNewBranch);

function addNewBranch(event) {
    event.preventDefault();

    var StandLocation = event.target.StandLocation.value;
    var customermin = event.target.customermin.value;
    var customermax = event.target.customermax.value;
    var avg = event.target.avarage.value;

    var newStore = new Location(StandLocation, parseInt(customermin), parseInt(customermax), avg, hourArr, 0, '', '');
    newStore.renderedArray();
    // createTable();
    table.deleteTFoot();
    tableFooter();


}
