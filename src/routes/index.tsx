import { Button } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppThemeContext } from '../shared/contexts'


export const AppRoutes = () => {

    const { toggleTheme } = useAppThemeContext()

    return(

        <Routes>
            <Route path = '/pagina-inicial' element = {<p style={{margin: 0, padding: 0}}><Button variant='contained' color= 'primary' onClick={toggleTheme}>Olá</Button></p>} />
            <Route path = '*' element = {<Navigate to = '/pagina-inicial' />} />
        </Routes>
    )
}