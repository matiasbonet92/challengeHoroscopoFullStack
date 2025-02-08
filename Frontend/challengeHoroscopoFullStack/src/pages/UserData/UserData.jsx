import Header from '../Header/Header.jsx';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import styles from './UserData.module.css';

const ExportData = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const location = useLocation();
    const { gender } = location.state;

    const handleChange = (e) => {
        switch(e.target.type) {
            case 'text':
                setName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'date':
                setBirthDate(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleContinueClick = (e) => {
        if(name === '' || email === '' || birthDate === '') {
            alert('Debes completar todos los campos');
            e.preventDefault();
        }
        if(!email.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$') && email !== ''){
            alert('El mail no tiene un formato correcto');
            e.preventDefault();
        }
    }

    const userData = {
        name: name,
        email: email,
        birthDate: birthDate,
        gender: gender
    }

    return (
        <>
            <Header title={'Tus Datos'}/>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>INGRESA TUS DATOS</h1>
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.nameContainer}>
                        <label>Nombre:</label>
                        <input type="text" onChange={handleChange} required/>
                    </div>
                    <div className={styles.mailContainer}>
                        <label>EMail:</label>
                        <input type="email" onChange={handleChange} required/>
                    </div>
                    <div className={styles.dateContainer}>
                        <label>Fecha de Nacimiento:</label>
                        <input type="date" onChange={handleChange} required/>
                    </div>
                </div>
                <div className={styles.enterContainer}>
                    <Link className={styles.backButton} to="/gender">VOLVER</Link>
                    <Link className={styles.continueButton} to="/horoscope" state={userData} onClick={handleContinueClick}>CONTINUAR</Link>
                </div>
            </div>
        </>
    );
}

export default ExportData;