import React from 'react'
import Logo from '../assests/logo.png'
import { Cartwidget } from './Cartwidget'

const Navbar = () => {
  return (
    <header style={styles.container}>
        <img style={styles.imagen} src={Logo} alt='logo'/>
        <h1>Levis</h1>
        <nav>
        <a style={styles.links} href="">Hombre</a>
        <a style={styles.links} href="">Mujer</a>
        <a style={styles.links} href="">Niños</a>
        </nav>
        <Cartwidget></Cartwidget>

    </header>
  )
}


const styles = {
    container:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
      
    },
    imagen:{
      width: '10%'
    },
    links:{
      padding: 10
    }
   
  }

  export default Navbar;