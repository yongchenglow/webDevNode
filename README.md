# webDevNode
A Repository for Web Development with Node.js

## Mac Server Setup
### Mojave
https://discussions.apple.com/docs/DOC-13841

### High Sierra
https://discussions.apple.com/docs/DOC-12034

### Sierra
https://medium.com/@JohnFoderaro/how-to-set-up-apache-in-macos-sierra-10-12-bca5a5dfffba

### El Capitan
https://medium.com/@JohnFoderaro/how-to-set-up-apache-in-os-x-10-11-el-capitan-637b30fe67b1

## Accessing your Local Web Server with different through Firefox
### Pre-requisites
1. Steps above have already been executed
2. FireFox has been downloaded and installed
3. Devices must be connected to the same network

### Finding your IP
In Terminal type:
```
ifconfig
```

Look for either `en0` or `en1` and look for `inet` for the IP address

![image of ifconfig](https://github.com/yongchenglow/webDevNode/blob/master/ifconfig.png "ifconfig")

By typing this IP address on FireFox on any devices that is connected to the same network, you will be able to access your web application.

# Creating your first Web Application
In your terminal, navigate to your project folder and type in the following commands:
> npm install express-generator -g

> express -v ejs -c sass myappname

Note:
1. In order to navigate your project folder, you can use the unix commands
2. Else type `cd` and then drag your project folder into your terminal and press enter

# Understanding your first Web Application
## Prerequisite
1. Download and Installed Atom or any other editor

## Understanding
1. Open your editor
2. Drag your project folder into the editor
3. Expand the `myappname` folder in your editor

By looking at the folder, you can see that all the files that were automatically created for you with Express generator. Within the `index.ejs` you can make edits and build your complex web app from there:

![image of ifconfig](https://github.com/yongchenglow/webDevNode/blob/master/IndexPage.png "IndexPage")

# Running your first Web Application
In the terminal app, navigate to the `myappname` folder and then type the following command:

$ npm start

> This will start a virtual server

Go to the address bar of your internet browser and type
> localhost:3000

You should see the following window:
![image of ifconfig](https://github.com/yongchenglow/webDevNode/blob/master/ExpressPage.png "ExpressPage")

If you run into any issues, you can find Yong Cheng or read this article on [Hackernoon](https://hackernoon.com/build-your-first-local-server-and-web-app-with-node-js-5a5d9e00aff0 "Creating your first website") for more information.

# Setting Up of MySQL (Optional)
https://discussions.apple.com/docs/DOC-3082

Note: You can stop after your start MySQL, you don't need to configure Perl
