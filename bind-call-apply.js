const john  = {
  name: 'John',
  age: 26,
  job: 'teacher',
  //will not work with arrow function because it unbinds this
  presentation: function() {
    //using destructuring to be able to showcas both .call and .apply
    const [style, timeOfDay] = arguments;
    console.log(`Params: ${style}, ${timeOfDay}`);
    style === 'formal' 
    ? console.log(`Good ${timeOfDay}, Ladies and gentlemen!
    My name is ${this.name}, I am a ${this.job} and ${this.age} years old.`)
    : console.log(`Hey! What's up? I'm ${this.name}, ${this.job} and I'm 
    ${this.age} years old. Have a nice ${timeOfDay}`);
  }
 
}

const emily = {
  name: 'Emily',
  age: '28',
  job: 'developer'
}

// john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'night');

//will not work if our function does not expect array
//can be fixed by destructuring 
john.presentation.apply(emily, ['formal', 'night'])

const friendlyJohn = john.presentation.bind(john, 'friendly');
friendlyJohn( 'afternoon')
