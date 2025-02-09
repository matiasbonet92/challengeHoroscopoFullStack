export const getUserSign = async (birthDate) => {
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

    return 'No se ha podido determinar el signo';
}

export const getUserSignImage = async (icon) => {
    const imageName = icon.split('/').pop().split('.')[0];

    if(imageName === 'zodiac-1') return 'boton_aries.png';
    if(imageName === 'zodiac-2') return 'boton_tauro.png';
    if(imageName === 'zodiac-3') return 'boton_geminis.png';
    if(imageName === 'zodiac-4') return 'boton_cancer.png';
    if(imageName === 'zodiac-5') return 'boton_leo.png';
    if(imageName === 'zodiac-6') return 'boton_virgo.png';
    if(imageName === 'zodiac-7') return 'boton_libra.png';
    if(imageName === 'zodiac-8') return 'boton_escorpio.png';
    if(imageName === 'zodiac-9') return 'boton_sagitario.png';
    if(imageName === 'zodiac-10') return 'boton_capricornio.png';
    if(imageName === 'zodiac-11') return 'boton_acuario.png';
    if(imageName === 'zodiac-12') return 'boton_piscis.png';

    return 'No se ha podido determinar la imagen del signo';
}

export const getDaysToNextBirthdate = async (date) => {
    // consigo las fechas completas de su nacimiento y de hoy
    const birthDate = new Date(date)
    const today = new Date()
    // consigo dia y mes del nacimiento
    const month = birthDate.getMonth()
    const day = birthDate.getDate()
    //creo la fecha proxima de cumpleaños
    let nextBirthdate = new Date(today.getFullYear(), month, day)
    //si el cumple ya paso uso el proximo año
    if (nextBirthdate < today){
        nextBirthdate = new Date(nextBirthdate.getFullYear() + 1, month, day)
    }
    // calculo dias hasta el proximo cumple
    const timeDiff = nextBirthdate.getTime() - today.getTime()
    // Aca Math.ceil redondea para arriba y la timediff esta en milisegundos
    // la multiplicacion se hace para saber los milisegundos en un dia
    // (1000 ms * 60 segundos * 60 minutos * 24 horas)
    const daysToBirthDate = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))

    return daysToBirthDate
}

export const translateSign = (sign) => {
    if (sign == 'Aries') return 'Aries';
    if (sign == 'Taurus') return 'Tauro';
    if (sign == 'Gemini') return 'Geminis';
    if (sign == 'Cancer') return 'Cancer';
    if (sign == 'Leo') return 'Leo';
    if (sign == 'Virgo') return 'Virgo';
    if (sign == 'Libra') return 'Libra';
    if (sign == 'Scorpio') return 'Escorpio';
    if (sign == 'Sagittarius') return 'Sagitario';
    if (sign == 'Capricorn') return 'Capricornio';
    if (sign == 'Aquiarius') return 'Acuario';
    if (sign == 'Pisces') return 'Piscis';
}