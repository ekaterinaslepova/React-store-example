import React from 'react'

class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.item = this.props.route.data[this.props.params.id];
        this.addToBill = this.addToBill.bind(this);
        this.changeQty = this.changeQty.bind(this);
    }

    componentWillMount() {
        this.setState({qty: 1});
    }
    
    changeQty(e) {
        this.setState({qty: e.target.value});
    }
    
    addToBill() {
        this.props.addToBill(this.item, this.state.qty);
    }

    render() {
        const item = this.item;

        return <div>
            <figure>
                <img src={"../img/" + item.image} />
            </figure>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p><b>Price:</b> {item.price}&pound;</p>
            <select onChange={this.changeQty}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <button onClick={this.addToBill}>Add to Bucket</button>
        </div>
    }
}

export default ItemCard;