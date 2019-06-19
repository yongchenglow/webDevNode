# Web Development with Node.js
A Repository for Web Development with Node.js

## 1. Mac Server Setup
### Mojave
https://discussions.apple.com/docs/DOC-13841

### High Sierra
https://discussions.apple.com/docs/DOC-12034

### Sierra
https://medium.com/@JohnFoderaro/how-to-set-up-apache-in-macos-sierra-10-12-bca5a5dfffba

### El Capitan
https://medium.com/@JohnFoderaro/how-to-set-up-apache-in-os-x-10-11-el-capitan-637b30fe67b1

## 2. Accessing your Local Web Server with different through Firefox
### 2.1 Pre-requisites
1. Steps above have already been executed
2. FireFox has been downloaded and installed on your [computer](https://www.mozilla.org/en-US/firefox/new/ "FireFox Laptop") and your [phone](https://play.google.com/store/apps/details?id=org.mozilla.firefox&hl=en "FireFox Phone")
3. Devices must be connected to the same network

### 2.2 Finding your IP
In Terminal type:
```
ifconfig
```

Look for either `en0` or `en1` and look for `inet` for the IP address

![image of ifconfig](https://github.com/yongchenglow/webDevNode/blob/master/ifconfig.png "ifconfig")

By typing this IP address on FireFox on any devices that is connected to the same network, you will be able to access your web application.

## 3. Installing Node.js
In order to install Node.js go to the following [website](https://nodejs.org/en/ "Node.js Homepage") and download the current version which has the latest features.

![image of Node JS Homepage](https://github.com/yongchenglow/webDevNode/blob/master/NodeHomepage.png "NodeHomepage")

After installing Node.js to check that everything has been installed correctly, open the terminal application and type in the following command:

> node -v

If you see it return a node number you are good to go.

## 4. Creating your first Web Application
In your terminal, navigate to your project folder and type in the following commands:
> npm install express-generator -g

> express -v ejs -c sass myappname

Note:
1. In order to navigate your project folder, you can use the unix commands
2. Else type `cd` and then drag your project folder into your terminal and press enter

## 5. Understanding your first Web Application
### Prerequisite
1. Download and Installed Atom or any other editor

### Understanding
1. Open your editor
2. Drag your project folder into the editor
3. Expand the `myappname` folder in your editor

By looking at the folder, you can see that all the files that were automatically created for you with Express generator. Within the `index.ejs` you can make edits and build your complex web app from there:

![image of Index Page](https://github.com/yongchenglow/webDevNode/blob/master/IndexPage.png "IndexPage")

## 6. Running your first Web Application
In the terminal app, navigate to the `myappname` folder and then type the following command:

$ npm start

> This will start a virtual server

Go to the address bar of your internet browser and type
> localhost:3000

You should see the following window:
![image of Express Page](https://github.com/yongchenglow/webDevNode/blob/master/ExpressPage.png "ExpressPage")

If you run into any issues, you can find Yong Cheng or read this article on [Hackernoon](https://hackernoon.com/build-your-first-local-server-and-web-app-with-node-js-5a5d9e00aff0 "Creating your first website") for more information.

Use steps 2.2 to find the ip address. In order to access the page on your phone, ensure that it is connected to the same network and then type `ip:3000` in FireFox. An example is:
> 172.78.38.98:3000

## Setting Up of MySQL (Optional)
https://discussions.apple.com/docs/DOC-3082

Note: You can stop after your start MySQL, you don't need to configure Perl

## Running the different applications
Go to the following website:
https://github.com/yongchenglow/webDevNode

Download the source code and Unzip the file.
![image of Download Button](https://github.com/yongchenglow/webDevNode/blob/master/DownloadButton.png "DownloadButton")

![image of Download Zip Button](https://github.com/yongchenglow/webDevNode/blob/master/DownloadZipButton.png "DownloadZipButton")

In order to run the different applications. Navigate into the 4 different project folder and then type:

>npm start

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
