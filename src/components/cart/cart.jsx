import { useEffect, useState } from "react";
import { Dock } from "react-dock";
import ProdutoCart from "../produto-cart/produto-cart.jsx";
import "./cart.css"
import { useNavigate } from "react-router-dom";


function Cart(){

    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    useEffect(() => window.addEventListener('openSidebar', () => setShow(true)));

    function checkout(){
        navigate('/checkout');
    }

    return <Dock
                position="right"
                isVisible={show}
                fluid={false}
                size={420}
                onVisibleChange={visible => setShow(visible)}
    >
        <div className="text-center">
            <h1>Meu Pedido</h1>
        </div>
        <div className="lista-produtos">
            <ProdutoCart />
        </div>
        <div className="footer-cart">
            <div className="footer-cart-valor">
                <span>Total:</span>
                <span><strong>R$250,00</strong></span>
            </div>
            <div>
                <button onClick={checkout}className="btn-checkout">Finalizar Pedido</button>
            </div>
        </div>
    </Dock>
}

export default Cart