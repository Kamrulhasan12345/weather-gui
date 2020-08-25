// Get the input field
var input = document.getElementById("data");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("button").click();
  }
});

function getWeather() {
    var data = document.getElementById("data").value
    eel.get_weather(data)(setImage)
}

function setImage(string) {
	//document.getElementById("data1").value = string
	al(string);
}

function al(string) {
	iziToast.info({
    title: string,
});
}

//"package-win": "electron-packager . weather-checker --overwrite --asar=true --platform=win32 --arch=ia32 --icon=web/favicon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="weachecker"",
	//"package-linux": "electron-packager . weather-checker --overwrite --asar=true --platform=linux --arch=x64 --icon=web/1024x1024.png --prune=true --out=release-builds"
  
