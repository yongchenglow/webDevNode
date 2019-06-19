# Web Development with Node.js
A Repository for Web Development with Node.js

# Mac
Before you begin please ensure that:
1. You have turned on your laptop by pressing the power button
2. You have administrative rights to your Laptop ([How to check?](https://ttlc.intuit.com/community/troubleshooting/help/administrator-rights-mac/00/25636))
3. You are running Mac OS X 10.11 (El Capitan) or Higher ([How to check?](https://support.apple.com/en-us/HT201260))

## 1. Download and Install FireFox
1. Download FireFox on your [computer](https://www.mozilla.org/en-US/firefox/new/ "FireFox Laptop")
2. Download and install FireFox on your [phone](https://play.google.com/store/apps/details?id=org.mozilla.firefox&hl=en "FireFox Phone")

## 2. Install Node.js
Install Node.js by going to the following [website](https://nodejs.org/en/ "Node.js Homepage") and __download the LTS version__.

![image of Node JS Homepage](https://github.com/yongchenglow/webDevNode/blob/master/NodeHomepage.png "NodeHomepage")

After installing Node.js, check that everything has been installed correctly, open the terminal application and type in the following:

> node -v

If you see it return the version number `10.16.0`, all is well.

## 4. Creating your first Web Application

1. Create a folder in `Documents` called `WebApplication`
2. Open Terminal
3. Navigate your folder by typing the following
> cd Documents/WebApplication

4. Type in the following commands:
> sudo`<space>`npm`<space>`install`<space>`express-generator`<space>`-g

> sudo`<space>`express`<space>`-v`<space>`ejs`<space>`-c`<space>`ass`<space>`myappn

> cd`<space>`myapp
> sudo`<space>`npm`<space>`install

## 5. Understanding your first Web Application
### Prerequisite
1. Download and Install [Atom](https://atom.io "Atom") or any other editor

### Understanding
1. Open Atom
2. Click on `File`
3. Click on `Add Project Folder`
4. Double Click on the `Home` icon
5. Double Click on `Documents` folder
6. Single click on `myapp` folder
7. Single Click on the `open` button at the bottom right
8. On Atom, expand the `views` folder on the left hand panel
9. Click on `index.ejs`

By looking at the folder, you can see that all the files that were automatically created for you with the Express generator. Within the `index.ejs` file, you can make edits and build your complex web app from there:

![image of Index Page](https://github.com/yongchenglow/webDevNode/blob/master/IndexPage.png "IndexPage")

## 6. Running your first Web Application
Go back to the the terminal app, check that you are in the project folder `<yourshortname>:myapp` else navigate to the `myappname` folder and then type the following command:

> npm`<space>`start

Go to the address bar of your internet browser and type
> localhost:3000

You should see the following window:
![image of Express Page](https://github.com/yongchenglow/webDevNode/blob/master/ExpressPage.png "ExpressPage")

If you run into any issues, you can find Yong Cheng or read this article on [Hackernoon](https://hackernoon.com/build-your-first-local-server-and-web-app-with-node-js-5a5d9e00aff0 "Creating your first website") for more information.

## 7. Running your Web Application on other devices
1. Open a new Terminal Window and Type:
> ifconfig

Look for either `en0` or `en1` and look for `inet` for the IP address

![image of ifconfig](https://github.com/yongchenglow/webDevNode/blob/master/ifconfig.png "ifconfig")

By typing this IP address on FireFox on any devices that is __connected to the same network__, you will be able to access your web application. Therefore if you node application is running you can type `ipAddress:3000` to access it on your phone. E.g.
> 172.17.85.56:3000

## Running the different applications
Go to the following website:
https://github.com/yongchenglow/webDevNode

Download the source code and Unzip the file.
![image of Download Button](https://github.com/yongchenglow/webDevNode/blob/master/DownloadButton.png "DownloadButton")

![image of Download Zip Button](https://github.com/yongchenglow/webDevNode/blob/master/DownloadZipButton.png "DownloadZipButton")

In order to run the different applications, navigate into the application taht you want to run and then type:

> npm start


### Testing the different Sensors (myappV1)
myappV1 is a page test the different sensors. Try out each of the different sensor available.

### Running a small snake game (myappV2)
myappV2 is a small snake game. Tap the snake screen to start the game and control the snake through the orientation of your phone.

### Running a small snake game (myappV3)
myappV3 is to demonstrate a 3D 3rd person navigation control. This allows the player to control the object through the orientation of your phone.

### Running a first person shooter (myappV4)
myappV4 is a 1st person navigation control game. User the orientation of your phone to control the movement of the character. Cover your ambient light sensor (usually at the top of your phone) to shoot.

In order to use the light sensor in FireFox type the following in the address bar:
> about:config

Change "device.sensors.ambientLight.enabled" to `true`

Note: This needs to only be done on your phone.
