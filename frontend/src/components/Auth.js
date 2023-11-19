import { Link } from 'react-router-dom';
// Esta librería es para generar alertas con React
import products from '../productos.json'
import ProductCard from './ProductCard'
import swal from 'sweetalert';
import Button from 'react-button-component';

const Auth = () => {

    const mostrarAlerta = () => {
        swal("Redirecting")
    };
    


    return (
        <form className='home'>
        <section className='initial'>
            <br/>
            <fieldset>
            <h1 >TECNOIN SERVER</h1>
            </fieldset>
            <br/>
           <Link to='/login' onClick={()=>mostrarAlerta()} ><Button > Login</Button></Link>
           <br/>
           <Link to='/useregister' ><Button onClick={()=>mostrarAlerta()} >Register</Button></Link>
        {/* <section><strong>Estamos en la home</strong></section> */}
        <br/>
        <br/>
        <h2 className='initial'>Services</h2>
      <div>
        {products.map(product =>
          <ProductCard key={product.id} product={product} />
        )}
      </div>
        </section>
        </form>
    );
}

export default Auth;
