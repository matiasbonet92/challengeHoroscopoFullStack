export const getUserSign = (birthDate) => {
    const formatedBirthDate = birthDate.split('-').slice(1).join('-')
    
    if (formatedBirthDate >= '03-21' && formatedBirthDate <= '04-20') return 'Aries';
    if (formatedBirthDate >= '04-21' && formatedBirthDate <= '05-20') return 'Taurus';
    if (formatedBirthDate >= '05-21' && formatedBirthDate <= '06-20') return 'Gemini';
    if (formatedBirthDate >= '06-21' && formatedBirthDate <= '07-22') return 'Cancer';
    if (formatedBirthDate >= '07-23' && formatedBirthDate <= '08-22') return 'Leo';
    if (formatedBirthDate >= '08-23' && formatedBirthDate <= '09-22') return 'Virgo';
    if (formatedBirthDate >= '09-23' && formatedBirthDate <= '10-22') return 'Libra';
    if (formatedBirthDate >= '10-23' && formatedBirthDate <= '11-21') return 'Scorpio';
    if (formatedBirthDate >= '11-22' && formatedBirthDate <= '12-21') return 'Sagittarius';
    if (formatedBirthDate >= '12-22' || formatedBirthDate <= '01-20') return 'Capricorn';
    if (formatedBirthDate >= '01-21' && formatedBirthDate <= '02-19') return 'Aquarius';
    if (formatedBirthDate >= '02-20' && formatedBirthDate <= '03-20') return 'Pisces';

    return 'No se ha podido determinar el.birthDate, userDatathDate, userDatano';
}

export const getUserSignImage = async (icon) => {
    const imageName = icon.split('/').pop().split('.')[0];

    if(imageName === 'zodiac-1') return 'boton_aries.png';
    if(imageName === 'zodiac-2') return 'boton_tauro.png';
    if(imageName === 'zodiac-3') return 'boton_geminis.png';
    if(imageName === 'zodiac-4') return 'boton_cancer.png';
    if(imageName === 'zodiac-5') return 'boton_leo.png';
    if(imageName === 'zodiac-6') return 'boton_virgo.png';
    if(imageName === 'zodiac-7') return 'boton_libre.png';
    if(imageName === 'zodiac-8') return 'boton_escorpio.png';
    if(imageName === 'zodiac-9') return 'boton_sagitario.png';
    if(imageName === 'zodiac-10') return 'boton_capricornio.png';
    if(imageName === 'zodiac-11') return 'boton_acuario.png';
    if(imageName == 'zodiac-12') return 'boton_piscis.png';

    return 'No se ha podido determinar el signo';
}