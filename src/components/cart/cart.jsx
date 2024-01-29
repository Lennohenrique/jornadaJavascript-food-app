import { useEffect, useState } from "react";
import { Dock } from "react-dock";
import ProdutoCart from "../produto-cart/produto-cart.jsx";
import "./cart.css"
import { useNavigate } from "react-router-dom";
import { carrinho } from "../../dados.js";


function Cart(){

    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => window.addEventListener('openSidebar', () => setShow(true),
    setCartItems(carrinho)), []);

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
            {
                cartItems.map(item => {
                    return <ProdutoCart key={item.id} 
                    id={item.id}
                    foto={item.foto}
                    nome={item.nome}
                    qtd={item.qtd}
                    preco={item.preco}/>
                })
            }
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