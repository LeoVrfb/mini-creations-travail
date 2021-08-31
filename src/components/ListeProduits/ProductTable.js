import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'



function ProductTable ({products, inStockOnly, filterText}) {

    const rows = []
    let lastCategory = null

    products.forEach(product => {
        if (inStockOnly && !product.stocked){
            return
        }
        if (product.name.indexOf(filterText) === -1) {
            return
        }
        if (product.category !== lastCategory) {
            lastCategory = product.category
            rows.push(<ProductCategoryRow key={lastCategory} category={lastCategory}/>)
        }
        rows.push(<ProductRow key={product.name}  product={product}/>)
    }) 

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>

                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
           
        </div>
    )
}

export default ProductTable