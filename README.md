# macos-quicken-autoupdate
Auto-update accounts in financial software quicken on macos on a schedule.

I found this code in a forum and I am not sure who the original author is. The instructions were pretty good but there were a few bugs/nits that I had to take care of and in order to make sure that future improvements are maintained, I am putting this code in github.

## Install
The installation instructions below are based on the writing of the original unknown author.

The process requires two things. An Automator job to perform the update, and a scheduling file to schedule the job execution.

### Step 1: Create the Automator job
Create a folder inside your Applications folder, called MyApps (or whatever you like)
Open Automator (from the Applications folder)
Select 'New Document'
Choose 'Application' as the type of document
Click on 'Utilities' under 'Library' in the left hand pane
Drag 'Run JavaScript’ to the right hand pane
Click on 'Options' in the 'Run JavaScript' window and select 'Ignore this actions input'
Replace the contents of the script area (copy and paste) with the contents of the js file.

Select 'File/Save' and save it in your 'MyApps' folder created earlier. Call it
QuickenAccUpd.app

### Step 2: Create the schedule
Copy (or move) the plist file to /Users/<you>/Library/LaunchAgents/QuickenAccUpdate.job.plist (Change'<you>' to your user id).

Log out and log back in and you should be good to go.

## Don’t like it?
To remove, simply delete the two files you created (QuickenAccUpd.app and
QuickenAccUpdate.job.plist), then log out and back in.

## Bugfixes
- Apple doesn't like arbitrary lables and rejects the scheduling. Hence used a lable starting with local: local.QuickenAccUpdate.job
- Fixed the menu item name change done by quicken
