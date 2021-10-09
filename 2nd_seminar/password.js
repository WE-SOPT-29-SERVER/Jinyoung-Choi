const fs=require('fs');
const crypto=require('crypto');

const read=()=>{
    const data=fs.readFileSync('qwerty.txt');
    console.log('querty.txt 읽음!');
    let qwerty=data;
    const salt = crypto.randomBytes(32).toString("hex");
    encrypt(salt, qwerty);
}
const encrypt=(salt,pw)=>{
    crypto.pbkdf2(pw,salt.toString(),1,32,"sha512",(err,derivedKey)=>{
        if(err) throw err;
        let hashed=derivedKey.toString("hex");
        console.log("salt: ",salt);
        console.log("hashed: ",hashed);
        fs.writeFileSync(`hashed.txt`,hashed);
    });
};

read();