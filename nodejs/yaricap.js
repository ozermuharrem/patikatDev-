let arg = process.argv.slice(2);

if(arg.length > 1)
    return (0);
let alan = Math.PI * Math.pow(arg[0]*1 ,2);

console.log(`Yarıçapı ${arg[0]} olan dairenin alanı: ${alan}`);