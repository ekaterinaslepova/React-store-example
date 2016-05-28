import React from 'react'

class ItemCard extends React.Component {
    render() {
        const props = this.props;
        const item = props.route.data[props.params.id];
        
        return <div>
            <figure>
                <img src={"../img/" + item.image} />
            </figure>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p><b>Price:</b> {item.price}&pound;</p>
        </div>
    }
}

export default ItemCard;