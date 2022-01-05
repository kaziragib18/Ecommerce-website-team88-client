import { Alert, Button, Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
export default function MakeAdmin() {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };

        fetch('https://cryptic-plains-35102.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    // setEmail('');
                    setSuccess(true);
                }
            })

        e.preventDefault();
    }

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "50px" }}>
            <Paper elevation={16}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            p: 2,
                            m: 5,
                            width: "100%",
                            height: 170
                        },
                    }}
                >

                    <form>
                        <h1 className='google-font'>Assign New Admin</h1>
                        <TextField
                            sx={{ font: 'italic', width: '100%', m: 1 }}
                            label="New Admin Email"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <br />
                        <Button
                            onClick={handleAdminSubmit}
                            variant="contained"
                            sx={{ width: "35%", m: 1 }}
                            style={{ backgroundColor: '#388e3c', fontFamily: 'poppins', }}
                        >Assign</Button>
                    </form>
                </Box>

                {success && <Alert severity="success" style={{ width: "100%" }}>SuccessFully Assign New Admin!
                </Alert>}
            </Paper>
        </div>
    )
}
