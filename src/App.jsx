import './App.css'
import { useGetAllProductsQuery } from './features/apiSlice'

function App() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  // called the query hook
  return (
    <div>
      {
        isLoading?  <h1>loading...</h1>:  <table>
        <thead>
          <tr style={{ fontSize: 20 }}>
            <td>Product name</td>
            <td>Image</td>
            <td>Brand</td>
            <td>Price</td>
            <td>Rating</td>
          </tr>
        </thead>
        <tbody>
          {data?.products?.map((item, index)=><tr key={index}>
            <td>{item.title}</td>
            <td><img
              height={100}
              width={100}
              src={item.images[0]}
              /></td>
            <td>{item.brand}</td>
            <td>{item.price}</td>
            <td>{item.rating}</td>
          </tr>)}
         
        </tbody>
      </table>
      }
     
    </div>
  )
}

export default App
