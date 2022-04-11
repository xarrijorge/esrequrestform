import React from 'react'
import axios from 'axios'

const UserContext = React.createContext()
const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = React.useState({})

    const LOCALURI = 'http://localhost:3000/data'
    // const DATAURI =
    //     'https://sheet.best/api/sheets/67bee221-b98f-428f-ad66-1315f48e71a0'

    const GetData = async (email) => {
        try {
            const resp = await axios.get(LOCALURI)
            console.log(resp.data)
            let personDetails = resp.data.filter(
                (person) => person['EmployeeEmailAddress'] === email
            )
            setUserData(personDetails)
        } catch (err) {
            // Handle Error Here
            console.error(err)
        }
    }

    return (
        <UserContext.Provider value={{ userData, GetData }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContextProvider, UserContext }
