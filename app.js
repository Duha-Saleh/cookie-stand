"use strict";
var workingHours = ["6 am", "7am", "8 am", "10 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
var newNum = 0;
var finalscale = 0;
var Seattle = {

    minValue: 23,
    maxValue: 65,
    AvgValue: 6.3,
    custum: [],
    cookiesperhour: [],
    totalCookies: 0,

    getCust: function () {
        for (var i = 0; i < workingHours.length; i++) {
            newNum = generateaRandCustomers(this.maxValue, this.minValue);
            this.custum.push(newNum);
        }
    },

    getcookiessoldbyhour: function () {
        for (var i = 0; i < workingHours.length; i++) {
            var numofcookies = Math.floor(this.AvgValue * this.custum[i]);
            this.cookiesperhour.push(numofcookies);
            this.totalCookies = this.totalCookies + numofcookies;
        }
    },
    render: function () {
        var parentElement = document.getElementById('sales');
        var article = document.createElement('article');
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textcontent = 'Seatle' ;
        article.append(h2);
        
       
        var ul = document.createElement('li');
        for (var i = 0; i < workingHours.length; i++) {
            var li = document.createElement('li');
            li.textContent = workingHours[i] + ':' + this.cookiesperhour[i];
            ul.appendChild(li);
        }
        var li = document.createElement('li');
        li.textContent = 'Total : ' + this.totalCookies;
        ul.appendChild(li);
        article.appendChild(ul);
    }
};



function generateaRandCustomers(maxValue, minValue) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (maxValue * 1) + minValue);
}


Seattle.getCust();
Seattle.getcookiessoldbyhour();
Seattle.render();
console.log(Seattle);




var workingHours = ["6 am", "7am", "8 am", "10 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
var newNum = 0;
var finalscale = 0;
var Seattle = {

    minValue: 23,
    maxValue: 65,
    AvgValue: 6.3,
    custum: [],
    cookiesperhour: [],
    totalCookies: 0,

    getCust: function () {
        for (var i = 0; i < workingHours.length; i++) {
            newNum = generateaRandCustomers(this.maxValue, this.minValue);
            this.custum.push(newNum);
        }
    },

    getcookiessoldbyhour: function () {
        for (var i = 0; i < workingHours.length; i++) {
            var numofcookies = Math.floor(this.AvgValue * this.custum[i]);
            this.cookiesperhour.push(numofcookies);
            this.totalCookies = this.totalCookies + numofcookies;
        }
    },
    render: function () {
        var parentElement = document.getElementById('sales');
        var article = document.createElement('article');
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textcontent = 'Seatle' ;
        article.append(h2);
        
       
        var ul = document.createElement('li');
        for (var i = 0; i < workingHours.length; i++) {
            var li = document.createElement('li');
            li.textContent = workingHours[i] + ':' + this.cookiesperhour[i];
            ul.appendChild(li);
        }
        var li = document.createElement('li');
        li.textContent = 'Total : ' + this.totalCookies;
        ul.appendChild(li);
        article.appendChild(ul);
    }
};



function generateaRandCustomers(maxValue, minValue) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (maxValue * 1) + minValue);
}


Seattle.getCust();
Seattle.getcookiessoldbyhour();
Seattle.render();
console.log(Seattle);




var workingHours = ["6 am", "7am", "8 am", "10 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
var newNum = 0;
var finalscale = 0;
var Seattle = {

    minValue: 23,
    maxValue: 65,
    AvgValue: 6.3,
    custum: [],
    cookiesperhour: [],
    totalCookies: 0,

    getCust: function () {
        for (var i = 0; i < workingHours.length; i++) {
            newNum = generateaRandCustomers(this.maxValue, this.minValue);
            this.custum.push(newNum);
        }
    },

    getcookiessoldbyhour: function () {
        for (var i = 0; i < workingHours.length; i++) {
            var numofcookies = Math.floor(this.AvgValue * this.custum[i]);
            this.cookiesperhour.push(numofcookies);
            this.totalCookies = this.totalCookies + numofcookies;
        }
    },
    render: function () {
        var parentElement = document.getElementById('sales');
        var article = document.createElement('article');
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textcontent = 'Seatle' ;
        article.append(h2);
        
       
        var ul = document.createElement('li');
        for (var i = 0; i < workingHours.length; i++) {
            var li = document.createElement('li');
            li.textContent = workingHours[i] + ':' + this.cookiesperhour[i];
            ul.appendChild(li);
        }
        var li = document.createElement('li');
        li.textContent = 'Total : ' + this.totalCookies;
        ul.appendChild(li);
        article.appendChild(ul);
    }
};



function generateaRandCustomers(maxValue, minValue) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (maxValue * 1) + minValue);
}


Seattle.getCust();
Seattle.getcookiessoldbyhour();
Seattle.render();
console.log(Seattle);





var workingHours = ["6 am", "7am", "8 am", "10 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
var newNum = 0;
var finalscale = 0;
var Seattle = {

    minValue: 23,
    maxValue: 65,
    AvgValue: 6.3,
    custum: [],
    cookiesperhour: [],
    totalCookies: 0,

    getCust: function () {
        for (var i = 0; i < workingHours.length; i++) {
            newNum = generateaRandCustomers(this.maxValue, this.minValue);
            this.custum.push(newNum);
        }
    },

    getcookiessoldbyhour: function () {
        for (var i = 0; i < workingHours.length; i++) {
            var numofcookies = Math.floor(this.AvgValue * this.custum[i]);
            this.cookiesperhour.push(numofcookies);
            this.totalCookies = this.totalCookies + numofcookies;
        }
    },
    render: function () {
        var parentElement = document.getElementById('sales');
        var article = document.createElement('article');
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textcontent = 'Seatle' ;
        article.append(h2);
        
       
        var ul = document.createElement('li');
        for (var i = 0; i < workingHours.length; i++) {
            var li = document.createElement('li');
            li.textContent = workingHours[i] + ':' + this.cookiesperhour[i];
            ul.appendChild(li);
        }
        var li = document.createElement('li');
        li.textContent = 'Total : ' + this.totalCookies;
        ul.appendChild(li);
        article.appendChild(ul);
    }
};



function generateaRandCustomers(maxValue, minValue) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (maxValue * 1) + minValue);
}


Seattle.getCust();
Seattle.getcookiessoldbyhour();
Seattle.render();
console.log(Seattle);





var workingHours = ["6 am", "7am", "8 am", "10 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
var newNum = 0;
var finalscale = 0;
var Seattle = {

    minValue: 23,
    maxValue: 65,
    AvgValue: 6.3,
    custum: [],
    cookiesperhour: [],
    totalCookies: 0,

    getCust: function () {
        for (var i = 0; i < workingHours.length; i++) {
            newNum = generateaRandCustomers(this.maxValue, this.minValue);
            this.custum.push(newNum);
        }
    },

    getcookiessoldbyhour: function () {
        for (var i = 0; i < workingHours.length; i++) {
            var numofcookies = Math.floor(this.AvgValue * this.custum[i]);
            this.cookiesperhour.push(numofcookies);
            this.totalCookies = this.totalCookies + numofcookies;
        }
    },
    render: function () {
        var parentElement = document.getElementById('sales');
        var article = document.createElement('article');
        parentElement.appendChild(article);

        var h2 = document.createElement('h2');
        h2.textcontent = 'Seatle' ;
        article.append(h2);
        
       
        var ul = document.createElement('li');
        for (var i = 0; i < workingHours.length; i++) {
            var li = document.createElement('li');
            li.textContent = workingHours[i] + ':' + this.cookiesperhour[i];
            ul.appendChild(li);
        }
        var li = document.createElement('li');
        li.textContent = 'Total : ' + this.totalCookies;
        ul.appendChild(li);
        article.appendChild(ul);
    }
};



function generateaRandCustomers(maxValue, minValue) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (maxValue * 1) + minValue);
}


Seattle.getCust();
Seattle.getcookiessoldbyhour();
Seattle.render();
console.log(Seattle);






