package org.stepdefenition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.tnp.Baseclass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Scenariooutlines extends Baseclass {
	
	@Given("To open the browser and maximize the window")
	public void to_open_the_browser_and_maximize_the_window() {
		launchBrowser();
		windowMaximize();
	    
	}

	@When("To open the facebook url")
	public void to_open_the_facebook_url() {
		launchUrl("https://www.facebook.com/");
	    
	}

	@When("To pass values in the {string} email field")
	public void to_pass_values_in_the_email_field(String em) {
		WebElement mail = driver.findElement(By.id("email"));
		mail.sendKeys(em);
		
	    
	}

	@When("To pass values in the {string} password field")
	public void to_pass_values_in_the_password_field(String pass) {
		WebElement password = driver.findElement(By.name("pass"));
	    password.sendKeys(pass);
	}

	@Then("To close the browser")
	public void to_close_the_browser() {
	    
	}



}
