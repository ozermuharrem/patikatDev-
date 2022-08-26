const circleArea = (parametre) => {

    let alan = (Math.PI * Math.pow(parametre ,2)).toFixed(2);

    console.log(`Yarıçapı ${parametre} olan dairenin alanı: ${alan}`);

    return alan;
}

const circleCircumference = (parametre) => {
   
    cevre = (parametre * Math.PI * 2).toFixed(2);

    console.log(`yarıçapı ${parametre} olan dairenin çevresi ${cevre}`)

    return cevre;
}

module.exports = {
    circleArea,
    circleCircumference
}