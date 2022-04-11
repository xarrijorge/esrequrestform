import React from 'react'
import axios from 'axios'
import Home from './Home'
import MainForm from './MainForm'

const API_URI = 'https://shielded-plains-53385.herokuapp.com/users'

const ESForms = () => {
    const [data, setData] = React.useState([])
    const [inputVal, setInputVal] = React.useState('')
    const [buttonDisabled, setButtonDisabled] = React.useState(true)

    const GetData = async () => {
        await axios
            .get(API_URI)
            .then((res) => res.data)
            .then((data) =>
                setData(
                    data.filter(
                        (person) => person.EmployeeEmailAddress === inputVal
                    )
                )
            )
    }
    const handleInputChange = (event) => {
        event.preventDefault()
        setInputVal(event.target.value)
        if (
            inputVal.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) &&
            inputVal.includes('easysolar')
        ) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }

    React.useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <>
            {data.length > 0 ? null : (
                <Home
                    inputVal={inputVal}
                    handleClick={GetData}
                    handleInputChange={handleInputChange}
                    buttonDisabled={buttonDisabled}
                />
            )}
            {data.length <= 0 ? null : <MainForm data={data} />}
        </>
    )
}

export default ESForms
