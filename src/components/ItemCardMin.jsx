import React from 'react'

class ItemCardMin extends React.Component {
    render() {
        return <div className="content_card">
            <figure>
                <img src={"img/" + this.props.image}/>
                <figcaption>{this.props.title}</figcaption>
            </figure>
        </div>
    }
}

export default ItemCardMin;