import React from 'react'

class ItemCardMin extends React.Component {
    render() {
        return <div>
            <figure className={this.props.image}>
                <img src={"img/" + this.props.image}/>
                <capture>{this.props.title}</capture>
            </figure>
        </div>
    }
}

export default ItemCardMin;