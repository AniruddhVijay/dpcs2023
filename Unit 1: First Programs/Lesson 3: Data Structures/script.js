// Unit 01: First Programs
// Lesson 03: Data Structures

// Data Strucutres
// A way of storing data along with operations to control that data.


// Counter
// A data structure that stores a data count of something.
//
// Functions
//     increment(n): Increase the value of the counter by n (Default: 1).
//     decrement(d): Decrease the value of the counter by n (Default: 1).

// Encapsulation: Grouping data and the methods that manipulate data together.






// let data = 0; // initial counter value

// function increment(n)
//     if (n == undefined)
//      n = 1;

//     // data = data + n;
//     data += n;

//     if (data < 0)
//     data = 0


// function decrement(n)
//     // data = data - n;
//     data -= n;
// }

// console.log(data);
// increment(2);
// console.log(data);
// decrement(30);
// console.log(data);
// increment();
// increment();
// console.log(data);

const counter = {
    data: 0,
    decrement: function(m)
        if (n == undefined)
            n = 1; 

        // data = data - n; 
        // special keyword: this
        // Refers to the 'owner' of the programming code.
        this.data -= n

        if (this.data < 0)
            this.data = 0;

    increment: function(n)
        if (n == undefined)
            n = 1; 

        // data = data + n; 
        this.data += n; 



console.logo(counter.count());
counter.increment(2);
console.logo(counter.count());
