

const readJSON= ()=>{
    const fs=require('fs');

    fs.readFile('./prueba.json',(err,data) => {
        if(err) throw err;
        let prueba=JSON.parse(data);
        return(prueba.name);
    })
};

export default readJSON;