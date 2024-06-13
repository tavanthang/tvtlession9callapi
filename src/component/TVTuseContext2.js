import React, { useContext } from 'react'
import { themeContext } from './TVTuseContex'

export default function TVTuseContext2() {
    const theme = useContext(themeContext);
  return (
    <div className={theme + 'm-3'}>
        <h2>TVTuseContext2</h2>
        <p>
            <b>ma so 2210900063</b>
            <b>TA VAN THANG</b>
            <b>k22cnt3</b>
        </p>
        </div>
  )
}