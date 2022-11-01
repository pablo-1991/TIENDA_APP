import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import "../ItemDetailContainer/ItemDetailContainer.css";
import Swal from "sweetalert2"
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";


export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const queryRef = doc(db, "productos", id)
            const response = await getDoc(queryRef);
            const newDoc = {
                ...response.data(),
                id: response.id
            }
            setItem(newDoc)
            if (Object.values(id).length < 20) {
                setError(Swal.fire
                    ({
                        icon: "info",
                        title: "El producto no existe",
                    }))
            }
        }
        getData();
    }, [id])

    return (
        <div className="itemDetailContainer">
            {!error ? <ItemDetail item={item} /> : error}
        </div>
    )
}