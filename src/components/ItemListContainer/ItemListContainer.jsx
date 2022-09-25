import "./ItemListContainer.css"

export const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <div className="mainContainer">
                {greeting}
            </div>
        </>
    )
}