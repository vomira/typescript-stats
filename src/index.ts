import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader'

//Create an Object that satisfies the Data Reader Interface
const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();


let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (
    (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
    (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
  ) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} times`);
