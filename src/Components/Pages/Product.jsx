import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Breadcrums/Breadcrums'
import ProductDisplay from '../ProductDisplay/ProductDisplay'
import DescriptionBox from '../DescriptionBox/DescriptionBox'
import RelatedProducts from '../RelatedProducts/RelatedProducts'

export default function Product() {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e)=> e.id == productId)
  
  return (
    <div>
        <Breadcrums product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <RelatedProducts/>
    </div>
  )
}
