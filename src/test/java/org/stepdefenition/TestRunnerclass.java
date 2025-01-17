package org.stepdefenition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources",
glue = "org.stepdefenition",
monochrome = true,
dryRun = false,
plugin = {"html:report", "junit:report\\junireport.xml", "json:report\\jsonreport.json"},
tags = ("@new"))
public class TestRunnerclass {

}
