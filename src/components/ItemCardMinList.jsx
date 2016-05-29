import React from 'react'
import {Link} from 'react-router'
import ItemCardMin from './ItemCardMin'

class ItemCardMinList extends React.Component {
    render() {
        const items = this.props.route.data.map((item, index) => {
            return <Link key={index} to={'/details/' + index}>
                <ItemCardMin {...item} />
            </Link>
        });

        return <div className="content_card_list">
            {items}
        </div>
    }
}

export default ItemCardMinList;