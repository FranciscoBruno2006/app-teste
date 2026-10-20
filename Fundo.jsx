import affinity from './assets/fundoaffinity.png'
import './fundo.css'

function Fundo({children}) {
    return(
        <div className='fundo'>
        {children}
        
        </div>
    )
    
}
export default Fundo;