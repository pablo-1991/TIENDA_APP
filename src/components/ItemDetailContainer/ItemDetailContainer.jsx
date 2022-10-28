import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import "../ItemDetailContainer/ItemDetailContainer.css";


export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState({})


    useEffect(() => {
        const getData = async () => {
            const queryRef = doc(db, "productos", id)
            const response = await getDoc(queryRef);
            const newDoc = {
                ...response.data(),
                id: response.id
            }
            setItem(newDoc)
        }
        getData();
    }, [id])

    return (
        <>
            <div className="itemDetailContainer">
                <ItemDetail item={item} />
            </div>
        </>
    )
}