import ReactDOM from 'react-dom'
import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './components/App'
import ItemCard from './components/ItemCard'
import ItemCardMinList from './components/ItemCardMinList'

loadJSON().then((testData) => {
        ReactDOM.render(
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={ItemCardMinList} data={testData} />
                    <Route path="details/:id" component={ItemCard} data={testData} />
                </Route>
            </Router>,
            document.getElementById('root')
        );
    },
    (error) => {
        console.log(error);
    });

function loadJSON() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) return;

            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(xhr.status + ': ' + xhr.statusText);
            }
        };
        xhr.open('get', 'data.json', true);
        xhr.send();
    });
}