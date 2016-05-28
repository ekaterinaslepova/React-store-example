import React from 'react'
import Bill from './Bill'
import ItemCard from './ItemCard'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.addToBill = this.addToBill.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    componentWillMount() {
        this.setState({bill: []});
    }
    
    removeItem(index) {
        const bill = this.state.bill;
        bill.splice(index, 1);
        this.setState({bill});
    }
    
    addToBill(item, qty) {
        qty = parseInt(qty);
        let exist = false;
        const bill = this.state.bill.map((curr)=>{
            if (curr.name === item.title) {
                exist = true;
                return Object.assign({}, curr, {qty: curr.qty + qty});
            } else {
                return curr;
            }
        });
        if (!exist) {
            bill.push({
                name: item.title,
                price: item.price,
                qty: qty
            })
        }
        this.setState({bill});
    }
    
    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => {
                if (child.type === ItemCard) {
                    return React.cloneElement(child, {
                        addToBill: this.addToBill
                    })   
                } else {
                    return child;
                }
            }
        );
        
        return <div>
            {childrenWithProps}
            <Bill items={this.state.bill} removeItem={this.removeItem} />
        </div>
    }
}

export default App;