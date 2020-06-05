
/*const canIVote = age => {
    (age >= 18) ? console.log(true) : console.log(false);
  }
canIVote(13);*/



/* const agreeOrDisagree = (strOne, strTwo) => {
  return (strOne === strTwo) ? 'You agree!' : 'You disagree.' 
};
console.log(agreeOrDisagree("yep", "yep")); */



/* const lifePhase = age => {
  if (age < 0 || age > 140) { 
    return 'This is not a valid age';
  }
  switch (true) {
    case (age <= 3):
      return 'baby';
    case (age <= 12):
      return 'child';
    case (age <= 19):
      return 'teen';
    case (age <= 64):
      return 'adult';
    case (age <= 140):
      return 'senior citizen';
  } 
};
console.log(lifePhase(231)); */



/* const finalGrade = (num1, num2, num3) => {
  let averageNum = ((num1 + num2 + num3) / 3);
  if ((num1 < 0 || num2 < 0 || num3 < 0) || (num1 > 100 || num2 > 100 || num3 > 100)) {
    return 'You have entered an invalid grade.';
  }
  switch (true) {
    case (averageNum <= 59):
      return 'F';
    case (averageNum <= 69):
      return 'D';
    case (averageNum <= 79):
      return 'C';
    case (averageNum <= 89):
      return 'B';
    case (averageNum <= 100):
      return 'A';
  }
}; */


/* const rollTheDice = () => {
  let die1 = (Math.floor(Math.random() * 6) + 1);
  let die2 = (Math.floor(Math.random() * 6) + 1);
  return (die1 + die2);
}
console.log(rollTheDice()); */



/* const calculateWeight = (earthWeight, planet) => {
  switch (planet) {
     case 'Mercury':
       return (earthWeight * 0.378);
     case 'Venus':
       return (earthWeight * 0.907);
     case 'Mars':
       return (earthWeight * 0.377);
     case 'Jupiter':
       return (earthWeight * 2.36);
     case 'Saturn':
       return (earthWeight * 0.916);
     default:
       return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  };
 };
 console.log(calculateWeight(100, 'Jupiter')) */



/* const truthyOrFalsy = value => {
  return (value) ? true : false;
}; */


/*
const numImaginaryFriends = totalFriends => {
  return (Math.round(totalFriends * .33));
} */


/* const sillySentence = (str1, str2, str3) => {
  return `I am so ${str1} because I ${str2} coding! Time to write some more awesome ${str3}!`;
}; */




/* const howOld = (age, year) => {
  const theCurrentYear = 2020;
  const yearDifference = year - theCurrentYear;
  const newAge = age + yearDifference;
  if (year > theCurrentYear) {
    return `You will be ${newAge} in the year ${year}`;
  } else if (newAge < 0) {
    return `The year ${year} was ${Math.abs(newAge)} years before you were born`;
  } else if (year < theCurrentYear && newAge >= 0) {
    return `You were ${newAge} in the year ${year}`;
  }
}

console.log(howOld(25, 1998));
console.log(howOld(25, 1990));
console.log(howOld(25, 2030)); */





/* const whatRelation = percentSharedDNA => {
  switch (true) {
    case 100:
      return 'You are likely identical twins.';
    case (percentSharedDNA >= 35):
      return 'You are likely parent and child or full siblings.';
    case (percentSharedDNA >= 14):
      return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.';
    case (percentSharedDNA >= 6):
      return 'You are likely 1st cousins.';
    case (percentSharedDNA >= 3):
      return 'You are likely 2nd cousins.';
    case (percentSharedDNA >= 1):
      return 'You are likely 3rd cousins.';
    case 0:
      return 'You are likely not related.';
  }
}

console.log(whatRelation(34))
console.log(whatRelation(3)) */



/* const tipCalculator = (quality, total) => {
  switch (quality) {
    case 'bad':
      return ((total / 100) * 5);
    case 'ok':
      return ((total / 100) * 15);
    case 'good':
      return ((total / 100) * 20);
    case 'excellent':
      return ((total / 100) * 30);
    default:
      return ((total / 100) * 18);
  }
} 
console.log(tipCalculator('good', 100)) //should return 20 */




/*
const toEmoticon = str1 => {
  switch (str1) {
    case 'shrug':
      return '|_{"}_|';
    case 'smiley face':
      return ':)';
    case 'frowny face':
      return ':(';
    case 'winky face':
      return ';)';
    case 'heart':
      return '<3';
    default:
      return '|_(* ~ *)_|';
  };
};
console.log(toEmoticon("whatever")) // Should print  '|_(* ~ *)_|' */