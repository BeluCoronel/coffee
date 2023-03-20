import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <Link to={"/item/" + item.index}>
            <div>
                <div className="card border-0 my-2 text-center my-5">
                    <img src={item.imagen} className="card-img-top" alt={item.name} />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default Item;