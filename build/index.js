"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
// import { CsvFileReader } from './CsvFileReader';
var Summary_1 = require("./Summary");
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { HtmlReport } from './reportTargets/HtmlReport';
//Create an Object that satisfies the Data Reader Interface
// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// const summary = new Summary(new WinsAnalysis('Man U'), new HtmlReport('report'));
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man U', 'report');
summary.buildAndPrintReport(matchReader.matches);
