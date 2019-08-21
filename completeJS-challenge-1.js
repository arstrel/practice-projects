// Mark and John are trying to compare their BMI.
// BMI = mass / height^2 (mass in kg and height in meters)

const mark = {
  height: 1.76,
  weight: 72
}

const john = {
  height: 1.87,
  weight: 80
}

const compareBMI = (mark, john) => {
  let result = '';
  let markBMI = mark.weight / (mark.height * mark.height);
  let johnBMI = john.weight / (john.height * john.height);

  markBMI > johnBMI 
  ? result = `Mark has a higher BMI at ${markBMI.toFixed(2)}`
  : result = `John has higher BMI at ${johnBMI.toFixed(2)}`

  return result
}

console.log(compareBMI(mark, john))