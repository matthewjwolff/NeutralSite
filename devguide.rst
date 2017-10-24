=================
Developer's Guide
=================

Writing code almost always involves verifying your work as you do it, and web development is no different. Writing simple web pages would appear to have the convenience that every computer has a web browser: the program that can display your web page and show you what it will look like. However as web pages become more complicated, simply opening the HTML file in your browser runs into some serious security issues.

Why this is happening
---------------------

For this web site in particular, I've made a nav bar across the top of the page. I expect this navbar to be on every page on the site, so it would be foolish to copy the code for it into every page. Therefore, I've put the code for the navbar in a separate file (``bar.html``) and on the pages that want it I've put a bit of JavaScript that tells the browser to fetch that file and render it. Now I only have to change one file to update the navbar across the entire site, and I don't have to write a bunch of code in every file to get the same result.

You'll notice that if you try to open ``index.html`` with your browser, you don't see the navbar. This is the security issue: the formal name is called cross-origin requests. Since the call to load the navbar file is done programmatically (with JavaScript), there are security issues that your browser needs to account for. In this case, your browser is flat out refusing to load files on your hard drive. This is a good thing. Imagine if Facebook could just ask for your personal documents and your browser gave them away like candy. That would be really bad.

What follows are a few ways to fix this

Fix 1: Temporarily disable security
-----------------------------------

This is the quick and easy way, but it's not good. It totally disables your browser's built-in security and leaves you very vulnerable to having your information stolen. If you're ONLY using this to preview your work, it might be fine though.

1. Open a command prompt
2. Type the command ``chromium --disable-web-security --user-dir``

A browser window will open and you will be able to fully view local HTML files. This command assumes that Chromium is your browser; if you use Chrome the command is the same, just replace ``chromium`` with ``chrome``. Firefox users will have to use a different command, but it's probably similar.

Windows users may have to navigate to wherever ``chromium.exe`` is and open their command prompt there. I think you can do this from Windows Explorer by going to ``C:\Program Files\Chrome\``, shift-right clicking, and click Open Command Prompt, but it's been a while since I've tried to see if that works.

MAKE SURE you close all web browser windows before doing this, and EVEN MORE IMPORTANTLY close all browser windows after doing this. 

Fix 2: Run a local web server
-----------------------------

This is probably what most professionals do, and it's what I do.

Essentially this fix involves running a program like the ones run on internet servers and then using your browser to connect to that server just like any other one. You'll need to download some software to do this.

The best way to do this is to get *Node.js*, a server program that runs JavaScript files, and *npm*, a package manager that is bundled with Node.js. Then when Node.js is installed, you can use npm to build and run the web site.

1. Open a command prompt and navigate to the web site's folder
2. Run ``npm install``. This will automatically fetch the required external code (including a simple web server). The packages fetched are defined in ``package.json``
3. Run ``npm start``, which runs a script defined in package.json

Now a *webserver* is running on your machine. You can access the server by typing ``localhost:8080`` into your web browser. ``localhost`` is a special word that your web browser will recognize as "this machine". The ``:8080`` part tells the web browser to use port 8080 instead of the default port 80. Don't worry too much about this.

When done, hit Ctrl+C. This is a special keycombination recognized by many programs that will end the program. It's like the Alt+F4 of the command line.
