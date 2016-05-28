import React from 'react'

class Bill extends React.Component {
    
    updateTotal() {
        return this.props.items.reduce((prev, curr) => {
            return prev + curr.price*curr.qty;
        }, 0)
    }
    
    render() {
        const items = this.props.items.map((item, index) => {
            return <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.price*item.qty}</td>
                <td><button onClick={()=> {
                    this.props.removeItem(index)
                }}>Remove</button></td>
            </tr>    
        });
        
        return <div>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                    <tr>
                        <td colspan="3">Total</td>
                        <td>{this.updateTotal()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    }
}

export default Bill;