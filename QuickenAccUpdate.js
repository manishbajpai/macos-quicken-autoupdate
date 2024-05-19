'use strict';
function run(input, parameters) {
	var App = Application.currentApplication();
	App.includeStandardAdditions = true;
	var appName = "Quicken";
	// App must be running
	if (!Application(appName).running()) {
		App.displayNotification(appName + " must be running to download transactions!", {withTitle: "Quicken Update"});
		throw Error(appName + " must be running to download transactions!");
	}
	
	var SystemEvents = Application("System Events")
	var seQuicken = SystemEvents.processes[appName]
	var front = seQuicken.frontmost();
	var accsMenu = seQuicken.menuBars[0].menuBarItems.byName("Accounts");
	var appMenu = seQuicken.menuBars[0].menuBarItems.byName(appName);
	accsMenu.menus[0].menuItems.byName("Update All Accounts").click();
	if (!front) {
		appMenu.menus[0].menuItems.byName("Hide " + appName).click();
	}
}
