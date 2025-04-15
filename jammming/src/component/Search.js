import { useState } from 'react'

const Search = () => {

        //PARTE DEL INPUT
        const [ song, setSong ] = useState('');
        
    
        const handleSearch = (e) => {
            e.preventDefault();
            if(song.trim() === '') {
                alert('agregar cancion para buscar')
                return
            }
            console.log(song)
            setSong('');
            
        }
        //FIN DE LA PARTE DE INPUT

    return (

        <form onSubmit={handleSearch} >
            <label for='song'>Aquí debajo busca tu musica fav</label>
            <input 
            name='song'
            type='text'
            id='song'
            value={song}
            onChange={({target}) => setSong(target.value)}
            />
            <button type='submit' onSubmit={handleSearch} >Buscar</button>
        </form>

    )
};

export default Search