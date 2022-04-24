import React from 'react'
import MainForm from './MainForm'

const ESForms = () => {
    const data = JSON.parse(localStorage.getItem('userdata'))
    return <MainForm data={data} />
}

export default ESForms
