package org.stepdefenition;

import org.junit.After;
import org.junit.Before;
import org.tnp.Baseclass;

public class Hookclass extends Baseclass{
	
	@Before
	private void precon() {
		// TODO Auto-generated method stub=
		launchBrowser();
		windowMaximize();
	}
	
	@After
	private void postcon() {
		// TODO Auto-generated method stub
closeEntireBrowser();
	}
	
	@Before(order=1)
	private void urllaunch() {
		// TODO Auto-generated method stub
launchUrl("https://www.facebook.com/");
	}

}
