# FontSizengular

## Features

* **artist** - Increase and decrease font size on your site.
* **song** - search songs by artist, title, description, or attribute (tempo, duration, etc) and get detailed information back about each song, such as hotttnesss, audio_summary, or tracks.
* **track** - upload a track to the Echo Nest and receive summary information about the track including key, duration, mode, tempo, time signature along with detailed track info inclu

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



