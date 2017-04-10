import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Layout1 from '../components/Layout1';
import Category from '../components/Category';
import Iam from '../components/Iam';

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: []
        }
    }

    componentWillMount() {
        fetch(window.apiHost + '/api/collections')
        .then(response => response.json())
        .then(response => this.setState({collections: response}))
    }

    render() {
        const collections = this.state.collections.map((collection, index) => <Category className={"collection" + index} photo={collection.photo} title={collection.title} />)

        return <div>
            <h1>Welcome!</h1>
            <Iam />
            <div className="columns">
                {collections}
            </div>
        </div>
    }
}

export default Categories;




