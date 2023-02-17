const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-htmlreport",
    metadata: {
        device: "Local test machine",
        platform: {
            name: "mac",
        },
    },
});