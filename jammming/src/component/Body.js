
import { Login, getAccessToken } from './tokenApiModule'
import Search from './Search';

function Body () {

    //PARTE DEL OPERADOR TERNARIO
    const access_token = getAccessToken();

    return (

        <>
        <h2>Ingresa en tu cuenta de spotify para poder buscar y crear tu propia playList!</h2>

        {!access_token ? <Login /> :
        
        <Search />
        }
        </>
    )
}

export default Body;