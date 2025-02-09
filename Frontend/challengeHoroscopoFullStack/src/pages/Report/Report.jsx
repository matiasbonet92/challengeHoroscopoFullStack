import React, { useEffect, useState } from 'react'
import Header from '../Header/Header.jsx'
import styles from './Report.module.css'
import { translateSign } from '../../components/index.js'

export default function Report() {
  const [storageData, setStorageData] = useState([])
  const [mostSearchedSign, setMostSearchedSign] = useState([])

  const getStorageData = async () => {
    const data = []
    for( let i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i)
      const valueJson = JSON.parse(localStorage.getItem(key))
      data.push({ key, value: valueJson })
    }
    setStorageData(data)
  }

  const getMostSearchedSign = async () => {
    const countSigns = {}

    storageData.forEach(item => {
      countSigns[item.value.sign] = (countSigns[item.value.sign] || 0) + 1
    })

    const maxCount = Math.max(...Object.values(countSigns))

    setMostSearchedSign(Object.entries(countSigns).filter(([sign,count]) => count === maxCount))
  }
  
  useEffect(() => {
    getStorageData();
  }, [])

  useEffect(() => {
    if (storageData.length > 0) {
      getMostSearchedSign();
    }
  }, [storageData]);

  return (
    <>
        <Header title={'Estadisticas'}/>
        <div className={styles.container}>
          <div className={styles.mostSearchedContainer}>
            <span className={styles.mostSearchedTitle}>Signo/s mas buscado/s:</span>
            {
              mostSearchedSign.map(([sign, count]) => (
                <span className={styles.mostSearchedContent}>{translateSign(sign)} con {count} busquedas</span>
              ))
            }
          </div>
          <div>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Fecha de Busqueda</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Genero</th>
                  <th>Fecha de Nacimiento</th>
                  <th>Signo</th>
                  <th>Horoscopo</th>
                  <th>Proximo Cumpleaños</th>
                </tr>
              </thead>
              <tbody>
                {storageData ?
                  storageData.map((item) => (
                    <tr key={item.key}>
                      <td>{item.value.dateOfSearch}</td>
                      <td>{item.value.name}</td>
                      <td>{item.value.email}</td>
                      <td>{item.value.gender}</td>
                      <td>{item.value.birthDate}</td>
                      <td>{translateSign(item.value.sign)}</td>
                      <td>{item.value.horoscope}</td>
                      <td>{item.value.daysToNextBirthdate} dias</td>
                    </tr>
                  ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
    </>
  )
}
