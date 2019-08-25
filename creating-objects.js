const proto = {
  talkBack: () => {console.log('Who are you?')},
  age: undefined,
  calculateAge: () => {
    this.age = 2019 - this.year;
  }
 }
 
 const cloner = (name, year, job) => {
   return Object.create(proto, {
     name: {
       writable: false,
       value: name},
     year: {value: year},
     job: {value: job},
   })
 }
 
 const jimbo = Object.create(proto, {
   name: {value: 'Jimbo'}, 
   year: {value: 1990}, 
   job: {value: 'developer'}
   })
 
 console.log(jimbo)
 console.log(cloner('Jimbo', 1990, 'developer'))
 
 console.log('-=-=-=-=')
 
 const Person = function (name, year, job) {
   this.name = name;
   this.year = year;
   this.job = job;
 }
 
 const dima = new Person ('dima', 2345, 'merchant')
 
 console.log(dima)
 
 const JobSeeker = function (realName, year, job) {return {realName, year, job}}
 
 const talu = new JobSeeker ('talu', 1880, 'dev')
 
 console.log(talu)
 
 
  function my (name, year, job) {
  return {...arguments}
 }
 
 console.log(my('art', 1345, 'coder'))
 
 
 
 let stuff = {
   fresh: 134,
   gleb: 'here',
   list: 'all of them here'
 }
 
 let blob = [1,2,3,4,5,6]
 let [first, ,third] = blob
 console.log(third)
 
 let {fresh} = stuff;
 console.log('=-=-=-=-=-=-')
 console.log(fresh)