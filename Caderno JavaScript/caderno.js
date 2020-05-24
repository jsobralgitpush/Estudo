// Print do JS

  console.log();

// Construtor de funções

  var John = {
    name: 'John',
    yearOfBirth: 1995,
    job: 'Programmer'
   };

   var Person = function(name, yearOfBirth, job) {

      this.name = name;
      this.yearOfBirth = yearOfBirth;
      this.job = job;
   }

  var Carlos = new Person('Carlos', 1950, 'Marceneiro')


// Prototype function

  // Conseguimos adicionar um novo metodo a nossa função
  Person.prototype.calculateAge = function () {
      console.log(2019-this.yearOfBirth)
  }


// Chamando uma função dentro de uma função

  var years = [1995,1991,1998,1970,1991];


  function calculateAge(year_input) {
      return 2019 - year_input;
  }

  function toDoArray(arr, fn) {
      var arrEmpty = [];
      for (var i = 0; i < arr.length ; i++) {
          arrEmpty.push(fn(arr[i]))
      }

      return arrEmpty
  }

  var ages = toDoArray(years, calculateAge);

  console.log(ages)
