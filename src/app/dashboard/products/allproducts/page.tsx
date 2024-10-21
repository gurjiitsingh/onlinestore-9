
import AllProductTable from '@/components/dashboard/AllProductTable'
import Analytics from '@/components/dashboard/Analytics'
import Orders from '@/components/userAccount/Orders'


const allporducts = () => {

 
  return (
    <>
    
  
    <AllProductTable limit={4} title="Product List" />
    
    </>
  )
}
 
export default allporducts