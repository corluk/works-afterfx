const  ae = require("after-effects");
const path = require('path');

var  aeProjectsPath = "G:\\works\\afterfx\\aeprojects";
var  aeCurrentProject = aeProjectsPath + path.sep+"test.aep"; 
var openFile = new ae.Command(file=> {

	var oFile = new File(file);
	app.open(oFile);


} )

ae(openFile,aeCurrentProject);
 