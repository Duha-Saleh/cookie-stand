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
    }
};

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

