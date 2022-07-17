//synchronous

//const fs = require("fs"); 

//fs.mkdirSync("app"); 


//fs.writeFileSync('app/bio.txt', 'Hello world!');    

//fs.appendFileSync('app/bio.txt', 'How are you!');     


//const data = fs.readFileSync('app/bio.txt','utf8');
//console.log(data);     



//fs.renameSync('app/bio.txt','app/myBio.txt');



//fs.unlinkSync('app/myBio.txt');



//Asynchronous

const fs = require ("fs");

fs.writeFile("Newfile.txt","sample data" ,(err) =>{
console.log("created");});


//fs.appendFile("Newfile.txt","sample data changed" ,(err) =>{
   // console.log("appended");});


//fs.readFile("Newfile.txt",'utf-8',(err,data) =>{
   // console.log(data);});


//fs.unlink("Newfile.txt",(err) =>{
        //console.log("delted");});  