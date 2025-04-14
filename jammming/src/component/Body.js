
import { useState } from 'react'

function Body () {

    const [ song, setSong ] = useState('');



    return (
        <form>
            <label for='song'>Aquí debajo busca tu musica fav</label>
            <input 
            name='song'
            type='text'
            id='song'
            />
            <button type='submit' >Buscar</button>
        </form>
    )
}

export default Body;