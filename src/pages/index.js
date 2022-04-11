import React, { useState, useContext } from 'react'
import axios from 'axios'
import Home from './Home'
import MainForm from './MainForm'

const Index = () => {
    const [person, setPerson] = useState({})
    const [inputVal, setInputVal] = useState('')
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const PersonContext = React.createContext({})

    const DATAURI =
        'https://sheet.best/api/sheets/67bee221-b98f-428f-ad66-1315f48e71a0'
    const GetData = async () => {
        try {
            const resp = await axios.get(DATAURI)
            let personDetails = resp.data.filter(
                (person) => person['Employee Email Address'] === inputVal
            )
            console.log(personDetails)
        } catch (err) {
            // Handle Error Here
            console.error(err)
        }
    }

    const handleClick = (e) => {
        if (
            inputVal.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) &&
            inputVal.includes('easysolar')
        ) {
            setButtonDisabled(false)

            GetData()
        } else {
            setButtonDisabled(true)
        }
    }
    const handleInputChange = (event) => {
        event.preventDefault()
        setInputVal(event.target.value)
        handleClick()
    }

    return (
        <Home
            inputVal={inputVal}
            handleClick={GetData}
            handleInputChange={handleInputChange}
            buttonDisabled={buttonDisabled}
        />
    )
}

export default Index
