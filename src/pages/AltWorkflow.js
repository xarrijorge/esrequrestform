import React from 'react'
import axios from 'axios'
import Home from './Home'
import MainForm from './MainForm'

const ESForms = () => {
    const [data, setData] = React.useState([])
    const [inputVal, setInputVal] = React.useState('')
    const [buttonDisabled, setButtonDisabled] = React.useState(true)

    const API_URI = `https://shielded-plains-53385.herokuapp.com/users?email=${inputVal}`

    const GetData = async () => {
        console.log(API_URI)
        await axios
            .get(API_URI)
            .then((res) => res.data)
            .then((data) => setData([data]))
    }
    const handleInputChange = (event) => {
        event.preventDefault()
        setInputVal(event.target.value)
        if (inputVal.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,3}$/gi)) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }

    React.useEffect(() => {
        inputVal.match(/[a-z.]+@[slib.]{0,4}?[easysolar]+\.[org]{3}/g)
            ? setButtonDisabled(false)
            : setButtonDisabled(true)
    }, [inputVal])

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
