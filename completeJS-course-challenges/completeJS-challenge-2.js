//John and Mike both play basketball in dfferent teams
//John's team scored 89, 120, 103
// Mike's team scored 116, 94, 123 points

const mikesTeam = [89, 120, 143];
const johnsTeam = [116, 94, 123];
const marysTeam = [97, 134, 105];

const calcAverage = () => {
  let mikesAverage = (mikesTeam.reduce((a, b)=> {
    return a + b
  })) / mikesTeam.length; 

  let johnsAverage = (johnsTeam.reduce((a, b) => {
    return a + b
  })) / johnsTeam.length;

  let marysAverage = (marysTeam.reduce((a, b) => {
    return a + b
  })) / marysTeam.length;

  let result = '';

  if(mikesAverage > johnsAverage && mikesAverage > marysAverage) 
  {result = `Mike's team wins with ${mikesAverage} average score`}

  else if (johnsAverage > mikesAverage && johnsAverage > marysAverage) 
  {result = `John's team wins with ${johnsAverage} average score`}

  else if (marysAverage > mikesAverage && marysAverage > johnsAverage) 
  {result = `Mary's team wins with ${marysAverage} average score`}
  
  else {
    result = `It's a draw, all teams got an average of ${mikesAverage}`
  }

  return result
}

calcAverage()