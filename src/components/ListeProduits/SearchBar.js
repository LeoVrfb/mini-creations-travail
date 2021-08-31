import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)
    }
    

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value)
    }

    handleInStockChange(e) {
        this.props.onStockChange(e.target.checked)
    }

    render() {

const {filterText, inStockOnly} = this.props

        return (
            <div className="mb-3">
                <div className="form-group mb-0">
                    <input type="text" value={filterText} className="form-group"
                     placeholder="Rechercher" onChange={this.handleFilterTextChange}></input>
                </div>
                <div className="form-check">
                    <input type="checkbox" checked={inStockOnly} className="form-check-input" id="stock" onChange={this.handleInStockChange}/>
                    <label htmlFor="stock" className="form-check-label">Produit en stock seulement</label>
                </div>
            </div>
        );
    }
}

export default SearchBar;