# FontSizengular

## Features

* **What do the script** - Increase and decrease font size on your site.

## Getting Started
* Install Fontsizengular
* Download this repo and locate the js folder with the app, to use put the fontSizengular.js in your folder.
* Call the script in your html
```html
    <script src="{{my-fodler}}/fontSizengular.js"></script>
```
* Use the following code into yout div, p, h, ect.
```html
    <p style="font-size :{{fs.total}}px" > Your Text </p>
```
* Use the following code into insert your click control for increase and decrease the font size in your website.
```html
    <input type="button" id="increase" value="A+" ng-click="fs.increase()"/>
  	<input type="button" id="decrease" value="A-" ng-click="fs.decrease()"/>
```



