<h1>WeaChecker</h1>
<h2>How to use</h2>
<p>This is built on python eel. So you need python installed on your device. But the python file needs some other files. You can install them with the following command (including eel):
  <pre>pip install pytemperature</pre>
  <pre>pip install eel</pre>
  <pre>pip install requests</pre>
 After installing all of them. Just run this command: <pre>python WeaChecker.py</pre> and it'll work!</p>
 
 <h2>Contribution</h2>
<p>Only Windows version of this software is released. If you need mac and linux one, then just do the following:
<ul>
<li>For Linux, do the following:
<ol>
<li>Create a python virtual environment and install required packs.</li>
<li>Also Run:<pre>pip install pyinstaller </pre></li>
<li>Then: <pre>python -m eel WeaChecker.py web --onefile --noconsole --icon=web\48×48.png </pre></li>
<li>Then create a new folder in the dist folder named 'Linux' and inside that upload the file </li>
<li>Then do a pull request!</li>
</ol>
</li>
<li><i>Same a for Mac</i>, but you'll need to generate the icns file your own and replace<pre>--icon=web\48×48.png </pre> command with<pre>--icon=web\(name-of-file).(ext)</pre></li>
</ul>
<h3>Any types of Contributions are accepted!</h3>
