import { useQuery } from "@tanstack/react-query";
import { Input } from "antd";
import { useEffect, useState } from "react";
import { searchProducts } from "../../api/useSearch"
import CardBody from "../../components/Card";
import '../Search/search.css'


const Search = () => {

  const [inputValue, setInputValue] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (inputValue) {
        setQuery(inputValue)
      }
  }, [inputValue])
  
  const { data, isLoading } = useQuery({
    queryKey: ['search', query],
    queryFn: () => searchProducts(query),
    enabled: !!query
  })


  

  if (isLoading) {
    return <p>Загрузка...</p>
  }

  return (
    <div className="search-block">
      <Input.Search
        placeholder="Поиск товаров..."
        onSearch={(value) => setInputValue(value)}
        enterButton
      />
      <div className="grid">

        {data?.map((product) =>
          <CardBody
            key={product.id}
            image={product.thumbnail}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
        />)}
      </div>
    </div>
  )
}

export default Search;