import "./ItemListContainer.css";
import { ItemListCards } from "../ItemListCards/ItemListCards";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import logoLoading from "../../assets/loading.gif"


export const ItemListContainer = () => {
    const { categoriaID } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const queryRef = categoriaID ? query(collection(db, "productos"), where("categoria", "==", categoriaID)) : query(collection(db, "productos"), orderBy("categoria"))
        getDocs(queryRef).then((response) => {
            const resultados = response.docs
            const docs = resultados.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            })
            setProducts(docs)
            setLoading(false)
        })
    }, [categoriaID])

    return (
        <div className="loading">
            {
                loading ? <img src={logoLoading} alt="logo de loading" />
                    : <ItemListCards items={products} />
            }
        </div>
    )
}
