import { createTheme } from '@mui/material'
import { teal, indigo} from '@mui/material/colors'


export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: teal[600],
            dark: teal[800],
            light: teal[400],
            contrastText: '#ffffff'
        },
        secondary: {
            main: indigo[600],
            dark: indigo[800],
            light: indigo[400],
            contrastText: '#ffffff'
        },
        background: {
            default: '#202124',
            paper: '#303134'
        }

    }
})