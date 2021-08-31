import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";


  class FilterableProductTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)
    }
  
    
    handleFilterTextChange (filterText) {
        this.setState({
            filterText
        })
    }

        
    handleInStockChange (inStockOnly) {
        this.setState({
            inStockOnly
        })
    }
      
      render () {

        const {products} = this.props

         
          return (
              <div>
                  <React.Fragment>
                      
                      <SearchBar 
                      filterText={this.state.filterText}
                      inStockOnly={this.state.inStockOnly}
                      onFilterTextChange={this.handleFilterTextChange}
                      onStockChange={this.handleInStockChange}
                      />

                 <ProductTable
                  products={products}
                  filterText={this.state.filterText}
                  inStockOnly={this.state.inStockOnly}
                  />
                 </React.Fragment>
                  
              </div>
          )
      }
  }

  export default FilterableProductTable



 
    