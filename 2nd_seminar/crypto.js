const crypto=require("crypto");
//digest는 encoding!

const pw="qwerty";
const hex=crypto.createHash("sha512").update(pw).digest("hex");
const base64=crypto.createHash("sha512").update(pw).digest("base64");

const salt="QxLUF1bglAdeQXbv5PehSMfV11CdYYLmfY6lehjZMQ";
const iter=100000;
const keylen=64;
const digest="sha512";
const callback=(err,derivedKey)=>{
    if(err) throw err;
    console.log(derivedKey.toString("hex"));
}
crypto.pbkdf2(pw,salt,iter,keylen,digest,callback);
const encrypt=(salt,pw)=>{
    crypto.pbkdf2(pw,salt.toString(),1,32,"sha512",(err,derivedKey)=>{
        if(err) throw err;
        const hashed=derivedKey.toString("hex");
        console.log("salt: ",salt);
        console.log("hashed: ",hashed);
    });
};
const password = "fl0wer";
const salt = crypto.randomBytes(32).toString("hex");
encrypt(salt, password);