import { useState, useEffect } from "react"
import { Layout } from "../../components/Layout"
import { data, Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { FormUpdate } from "../../components/FormUpdate"

const Home = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [isEditing, setIsEditing] = useState(null)
  const [productEditing, setProductEditing] = useState(null)
  const [searching, SetSearching] = useState("")

  const API_URL = import.meta.env.VITE_API_URL

  const { user, logout, token } = useAuth()

  const fetchingProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/products`)

      if (!response.ok) {
        setError("Sesión terminada, vuelve a loguearte.")
        logout()
        // continuar controlando el home como ruta privada
        throw new Error("Falló el fetch :(")
      }
      const dataProducts = await response.json()

      setProducts(dataProducts.data)
    } catch (error) {
      setError(error.message)
    }
  }

  const handleSearching = (event) => {
    SetSearching(event.target.value)
  }

  const searchProduct = async () => {
    try {
      const response = await fetch(`${API_URL}/products/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ search: searching })
      })

      const dataProducts = await response.json()
      setProducts(dataProducts.data)

      if (dataProducts.data.length === 0) {
        setError("No hay productos con esos datos")
      } else {
        setError(null)
      }

    } catch (error) {
      setError(prev => [...prev, error.message])
    }
  }

  useEffect(() => {
    if (searching.length > 0) {
      searchProduct()
    } else {
      fetchingProducts()
    }
  }, [searching])

  const handleDelete = async (product) => {
    if (confirm("Esta seguro que quieres borrar el producto?")) {
      try {
        const response = await fetch(`${API_URL}/products/${product._id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` }
        })
        if (response.ok) {
          fetchingProducts()
        }
      } catch (error) {
        setError(error.message)
      }
    }
  }

  const handleUpdate = async (product) => {
    setIsEditing(true)
    setProductEditing(product)
  }

  const handleCancelEditing = () => {
    setIsEditing(null)
    setProductEditing(null)
  }

  return (
    <Layout>
      <h1>Lista de productos</h1>
      {user && <p>Bienvenido, {user.email}</p>}
      {error && <>
        <div className="error-home">
          <h2>{error}</h2>
          {/* <Link to={"/login"}>Ir al login</Link> */}
        </div>
      </>}
      {
        isEditing && <FormUpdate product={productEditing} handleCancelEditing={handleCancelEditing} fetchingProducts={fetchingProducts} />
      }
      <input className="search" type="text" placeholder="buscar" name="search" value={searching} onChange={handleSearching}></input>
      <section className="grid-products">
        {
          products.map((product) => {
            return (
              <div key={product._id}>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <p className="category-product">{product.category}</p>
                {
                  user && <div className="control-product">
                    <button className="btn-update" onClick={() => { handleUpdate(product) }}>Actualizar</button>
                    <button className="btn-delete" onClick={() => { handleDelete(product) }}>Borrar</button>
                  </div>
                }
              </div>
            )
          })
        }
      </section>
    </Layout>
  )
}

export { Home }