import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import createTheme from "@mui/material/styles/createTheme";
import { Outlet } from "react-router-dom";

import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

import Bacground from "./images/mallorca.jpg";

function App() {



    return (
        < div style={{
            backgroundImage: `url(${Bacground})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'static',
            width: '100vw',
            height: '100vh'

        }} >
       
            <CssBaseline/>
            <Header />
            <Container>
                <Outlet/>
            </Container>
       
            </div>
  );
}

export default App;
