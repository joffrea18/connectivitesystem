import { Link } from 'react-router-dom';
// Esta librería es para generar alertas con React
import swal from 'sweetalert';

const Auth = () => {

    const mostrarAlerta = () => {
        swal("Redirecting")
    };


    return (
        <section className='initial'>
           <Link to='/login' ><button onClick={()=>mostrarAlerta()} className='button'> Login</button></Link>
           <Link to='/user' ><button onClick={()=>mostrarAlerta()} className='button'>Registro</button></Link>
        {/* <section><strong>Estamos en la home</strong></section> */}
        </section>
    );
}

export default Auth;
