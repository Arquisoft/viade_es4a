

const readJSON= ()=>{
    const fs=require('fs');
    var string="{'key':'value'}";
    var obj=JSON.parse(string);

    fs.readFile('./prueba.json',(err,data) => {
        if(err) throw err;
        //let prueba=JSON.parse(data);
        console.log("Prueba");
        return(obj.key);
    })
};

export default readJSON;