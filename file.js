
const fs = require('fs');

const readFile=fs.readFile('greet.txt','utf-8',(err,data)=>{
    // if(err) throw err;
    // console.log(data);
    if(err){
        console.log('Error:',err);
    }
    else{
        console.log(data);
    }
})

 const writeFile=fs.writeFile('greet.txt','Hello World!',(err)=>{
    if(err){
        console.log('Error:',err);
    }
    else{
        console.log('File written successfully');
    }
}   
)

const updateFile=fs.appendFile('greet.txt','Hello World!',(err)=>{
    if(err){
        console.log('Error:',err);
    }
    else{
        console.log('File written successfully');
    }
}
)

// delete greet.txt
const deleteFile=fs.unlink('greet.txt',(err)=>{
    if(err){
        console.log('Error:',err);
    }
    else{
        console.log('File deleted successfully');
    }
}
)

module.exports = {
    readFile,
    writeFile,
    updateFile,
    deleteFile
}


