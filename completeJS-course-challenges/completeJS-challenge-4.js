// Mark and John are trying to compare their BMI.
// BMI = mass / height^2 (mass in kg and height in meters)

const mark = {
  height: 1.76,
  weight: 72,
  realName: 'Joanne Brightmind',
  bmi: null,
  calcBMI: function () {
  this.bmi = this.weight / (this.height * this.height);
  console.log(this)
  return this.bmi
  }
}

const john = {
  height: 1.87,
  weight: 80,
  realName: 'Jefferson Guggenheimen',
  bmi: null,
  calcBMI: function () {
  this.bmi = this.weight / (this.height * this.height);
  console.log(this)
  return this.bmi
}
}

const compareBMI = (mark, john) => {
  let result;
  if(mark.bmi == john.bmi) 
  {return `They have the same BMI at ${mark.bmi}`}
  
  mark.bmi > john.bmi
  ? result = `Mark has a higher BMI at ${mark}`
  : result = `John has higher BMI at ${john}`

  return result
}

console.log(compareBMI(mark, john))