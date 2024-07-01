package org.stepdefenition;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.tnp.Baseclass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class cucuMail extends Baseclass{
	
	@Given("User has to launch the browser and maximize the window")
	public void user_has_to_launch_the_browser_and_maximize_the_window() {
	   launchBrowser();
	   windowMaximize();
	}

	@When("User has to hit the gmail url")
	public void user_has_to_hit_the_gmail_url() {
		launchUrl("https://www.facebook.com/");
	    
	}

	@When("User has to pass the data in email field")
	public void user_has_to_pass_the_data_in_email_field(DataTable d ) {
		
		List<String> l = d.asList();
		WebElement email = driver.findElement(By.id("email"));
		email.sendKeys(l.get(1));
	   
	}

	@When("User has to pass the data in password field")
	public void user_has_to_pass_the_data_in_password_field(DataTable d) {
		List<List<String>> l = d.asLists();
	    WebElement password = driver.findElement(By.name("pass"));
		password.sendKeys(l.get(1).get(2));
		
	}
	@Then("User has to close the browser")
	public void user_has_to_close_the_browser() {
		//closeEntireBrowser();
	    
	}



}
