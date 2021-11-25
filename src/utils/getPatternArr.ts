export function getPatternArr(pattern: string) {
  // Example: pattern = '2m3m4m 5m6m7m 3p3p3p 4s5s6s 8s 8s'
  
  // patternCodes2dArr should = [
  //  ['2m', '3m', '4m'], 
  //  ['5m', '6m', '7m'], 
  //  ['3p', '3p', '3p'], 
  //  ['4s', '5s', '6s'], 
  //  ['8s'], ['8s']
  // ]
  let patternCodes2dArr: string[][] = [];

  // patternGroups = ['2m3m4m','5m6m7m','3p3p3p','4s5s6s','8s','8s']
  const patternGroups = pattern.split(" ");
  patternGroups.forEach((patternGroup) => {
    const patternGroupCodes = [];

    for (let i = 0; i < patternGroup.length; i+=2) {
      const code = patternGroup[i] + patternGroup[i+1];
      patternGroupCodes.push(code);
    }

    patternCodes2dArr.push(patternGroupCodes);
  });


  return patternCodes2dArr.reduce<(string|null)[]>((acc, curr) => {
    if (acc.length === 0) return acc.concat(curr);
    return acc.concat([null]).concat(curr);
  }, []);
}
