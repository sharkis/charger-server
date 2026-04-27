const {open} = require('node:fs/promises');
const express = require('express');
const app = express();
const port = 3000;

let imagedata;
	// load image from fs
(async ()=>{
	let ih  = await open('./images/image.raw');
	imagedata = await ih.readFile();
	console.log("image loaded");
})();
app.get('/', (req,res)=>{
	console.log("sending data");
	// send raw to client
	res.send(imagedata);
});
app.listen(port,'0.0.0.0',()=>{
	console.log(`example app listening on port ${port}`);
});

