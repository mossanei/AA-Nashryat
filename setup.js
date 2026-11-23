const fs=require('fs'),path=require('path'),os=require('os');
const res='android/app/src/main/res';
if(fs.existsSync(res))fs.cpSync('icons',res,{recursive:true});
const d=path.join(os.homedir(),'.android');fs.mkdirSync(d,{recursive:true});
fs.copyFileSync('debug.keystore',path.join(d,'debug.keystore'));
console.log('icons and signing key applied');
