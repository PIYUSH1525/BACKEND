const fs = require('node:fs')
// fs.writeFile("piyush.txt" , "Hello this is a new file " ,function(err){
//     if (err)
//         console.error("error");
//     else
//         console.log("Done"); 
// })
fs.appendFile("piyush.txt"," the starting of nodejs" , function(err){
    if (err)
        console.error("Problem in the code")
    else
        console.log("Done")
})