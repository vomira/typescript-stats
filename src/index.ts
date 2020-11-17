import { MatchReader } from './MatchReader';
// import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { HtmlReport } from './reportTargets/HtmlReport';

//Create an Object that satisfies the Data Reader Interface
// const csvFileReader = new CsvFileReader('football.csv');

// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// const summary = new Summary(new WinsAnalysis('Man U'), new HtmlReport('report'));
const summary = Summary.winsAnalysisWithHtmlReport('Man U', 'report')

summary.buildAndPrintReport(matchReader.matches);
