
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { useContext } from 'react'
import CartContext from '@/store/CartContext'
import LinkDropdown from './LinkDropdown';


const Menu = () => {
  const {data: session } = useSession();

//console.log(session)

//var cartCount = cartData.length;

  return (
    <>
     <div className='flex items-center gap-2 justify-between w-full'>
    <div><Link href="/"><FaCartFlatbedSuitcase className='w-8 h-8 text-white' /></Link></div> 
   
     <div className="flex flex-row gap-5 py-5 justify-end">
   { !session&&<Link href="/auth/login">Login</Link>}
   {/* {session&& <button onClick={()=>{signOut()}}>Logout</button>  } */}
   {session&&  <Link href="/dashboard">Dashboard</Link> }
   {/* {session&&  <Link href="/user">My Account</Link> } */}
  {!session&& <Link href="/auth/register">Register</Link>  }
  <LinkDropdown session />
 
     </div>
     </div>
   
    
   
    
    
    </>
  )
}

export default Menu