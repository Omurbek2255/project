import { Col, Pagination, Spin } from "antd";
import { useProducts } from "../api/useProducts";
import CardBody from "./Card";
import Swiper from "swiper/react";
import Slider from "./Slider";
import { useStore } from "../features/Store";
import { useState } from "react";



const Products = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useProducts((currentPage - 1) * 30, 30)
  const { addToCart } = useStore()
  
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  if (isLoading) return <Spin />

  return (
    <>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center'}}>
        {data.products.map((product) => (
          <Col span={6} key={product.id}>
            <CardBody
              image={product.thumbnail}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={product.rating}
              handleAddCart={() => addToCart(product)}
            />
          </Col>
          ))
        }
      </div>

      <Pagination
        current={currentPage}
        total={data.total}
        pageSize={30}
        onChange={handlePageChange}
        style={{marginTop: '20px', display: 'flex', justifyContent: 'center'}}
      />
    
      <p style={{fontSize: "50px", marginTop: "100px"}}>Популярные товары</p>
      <div style={{display: 'flex'}}>
        <Slider
          data={data.products}
          slidesPerView={3}
          sliceIndex={5}
        />
      </div>
    </>
  )
}

export default Products;