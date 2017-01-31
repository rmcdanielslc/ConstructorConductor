//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  function Person(name, age){
    this.name = name;
    this.age = age;
  }


//Now create three instances of Person with data you make up

  var ryan = new Person('Ryan', 28);
  var bren = new Person('Bren', 29);
  var kris = new Person('Kris', 32);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  Person.prototype.sayName = function() {
    alert(this.name)
  }
