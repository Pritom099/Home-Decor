import { useState } from "react"

const useProducts = () =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
}

export default useProducts