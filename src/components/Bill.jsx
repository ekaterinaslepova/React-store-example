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
                }}>x</button></td>
            </tr>    
        });
        
        return <div className="content_bill">
            <table className="content_bill_table">
                <thead>
                    <tr className="content_bill_header">
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                    <tr className="content_bill_total">
                        <td colSpan="3">Total</td>
                        <td>{this.updateTotal()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    }
}

export default Bill;