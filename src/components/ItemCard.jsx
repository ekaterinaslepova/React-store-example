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
        const options = [];
        for (let i = 1; i <= item.qty; ++i) {
            options.push(<option key={i}>{i}</option>)
        } 
        const disabled = item.qty == 0;
        
        return <div>
            <figure>
                <img src={"../img/" + item.image} />
            </figure>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p><b>Price:</b> {item.price}&pound;</p>
            <select onChange={this.changeQty} disabled={disabled}>{options}</select>
            <button onClick={this.addToBill} disabled={disabled}>Add to Bucket</button>
        </div>
    }
}

export default ItemCard;