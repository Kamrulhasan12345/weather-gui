function generateQRCode() {
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
  