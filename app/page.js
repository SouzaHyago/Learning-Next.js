'use client'

import { useState } from "react";
import "./home.css";


export default function Home() {

    const [carrinho, setCarrinho] = useState(0);

    return (
        <div className="main">
            <header>
                <h1>Mercado do Clovis </h1>    
                <img 
                    src="https://i.redd.it/8506jljuzk7d1.jpeg"
                    width={200}
                />
            </header>
            <p>O melhor do mundo e do Brasil</p>
            <hr/>
            <p className="carrinho">itens do carrinho ({carrinho})</p>
            <button onClick={()=> carrinho<=0 ?alert("num dá zé") : setCarrinho(carrinho -=1)}>remover item</button>
            <button onClick={()=> setCarrinho(carrinho=0)}>limpar carrinho</button>
            <hr/>
            <h2>Produtos: </h2>
            <ul className="lista">
                <div className="produto">
                    <img 
                        src="https://superprix.vteximg.com.br/arquivos/ids/204405/Banana-da-Terra-17kg.jpg?v=637707871514070000"
                        width={200}
                        height={200}
                    />
                    <li>Banana R$888,88Kg</li>
                    <button onClick={()=> setCarrinho(carrinho+=1)}>comprar</button>
                </div>

                <div className="produto">
                    <img 
                        src="https://png.pngtree.com/png-vector/20210415/ourmid/pngtree-tree-branch-squirrel-mammal-png-image_3220614.jpg"
                        width={200}
                        height={200}
                    />
                    <li>Rabo de macaco R$8,50Kg</li>
                    <button onClick={()=> setCarrinho(carrinho+=1)}>comprar</button>
                </div>

                <div className="produto">
                    <img 
                        src="https://w7.pngwing.com/pngs/306/708/png-transparent-chicken-leg-chicken-meat-cartoon-chicken-animals-galliformes-chicken.png"
                        width={200}    
                        height={200}
                    />
                    <li>Fígado de frango R$1.19Kg</li>
                    <button onClick={()=> setCarrinho(carrinho+=1)}>comprar</button>
                </div>

                <div className="produto">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1M5F0b0vwjOSX4msTy6FM_jWonHx22ZeUyQ&s"
                        width={200}
                        height={200}
                    />
                    <li>Pó do Cariri R$2,22Kg</li>
                    <button onClick={()=> setCarrinho(carrinho+=1)}>comprar</button>
                </div>

                <div className="produto">
                    <img 
                        src="https://e7.pngegg.com/pngimages/235/961/png-clipart-nail-polish-opi-products-opi-nail-lacquer-manicure-red-ink-jet-orange-cosmetics.png"
                        width={200}    
                        height={200}
                    />
                    <li>OpiOpiOpi R$0.0Kg</li>
                    <button onClick={()=> setCarrinho(carrinho+=1)}>comprar</button>
                </div>
            </ul>            
        </div>
        
    );
}
