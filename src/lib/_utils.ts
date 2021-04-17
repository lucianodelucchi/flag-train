export const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export const getRandomIndices = (n: number, take = 4) => Array.from({ length: take }, _ => getRandomInt(n));

export const shuffle = <T>(array:T[] = [], seeds:number[] = []) => {
    if (!seeds.length) {
        seeds = Array.from({ length: array.length }, _ => Math.random())
    }
    let currentIndex = array.length;
    let temporaryValue: T;
    let randomIndex: number;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(seeds[currentIndex-1] * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
