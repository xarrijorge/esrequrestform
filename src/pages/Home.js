import React from 'react'
import Button from '@mui/material/Button'

export default function Home({
    handleClick,
    handleInputChange,
    inputVal,
    buttonDisabled,
}) {
    return (
        <form>
            <h2> Please Enter Your Email Address</h2>
            <div>
                <input
                    type='email'
                    value={inputVal}
                    onChange={handleInputChange}
                />
            </div>
            <Button
                disabled={buttonDisabled}
                variant='contained'
                onClick={handleClick}>
                {/* <Link to='/MainForm'>Next</Link> */}
                Next
            </Button>
        </form>
    )
}
