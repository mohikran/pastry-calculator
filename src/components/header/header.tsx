import React, { FC } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit">Volumes</Button>
                    <Button color="inherit">Surface</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
)

export default Header
