import { log } from 'console';
import fs from 'fs'
fs.readFile('users.json','utf-8',(err,data)=>{
    if(err){
        console.log('Unable to Read -:${err.message}');
    }
    else{

        let users=JSON.parse(data)
        let male_Users=users.filter(users=>users.gender === "Male")
        let female_Users=users.filter(users=>users.gender === "Female")
        let other_Users=users.filter(user=>user.gender !=="Female" && user.gender !=="Male")
        fs.writeFile()













        // console.log(typeof data);
        // let users=JSON.parse(data)
        // console.log(typeof users);
        // console.log(users.length);
    }
})