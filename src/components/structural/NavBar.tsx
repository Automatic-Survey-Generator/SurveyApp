'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'


export default function NavBar() {

    const router = useRouter()

    return (
      <>
        <nav className="fixed top-0 h-20 bg-white w-full p-4 flex justify-between items-center gap-4 shadow-md">

          <Link href="/" className='text-primary text-2xl font-bold uppercase'>SURVEY CREATOR</Link>

            <div className='flex gap-4'>
                <Link className='hover:underline' href="/">Home</Link>
                <Link className='hover:underline' href="/builder/0">Form Editor</Link>
                <Link className='hover:underline' href="/admin/0">Admin Panel</Link>
                <Link className='hover:underline' href="/viewer/0">Viewer</Link>
            </div>
            
          <div>
            <Button onClick={()=>router.push("/signup")} className='flex gap-3 justify-around group items-center bg-transparent border border-gray-400 rounded-full text-slate-700 hover:bg-white hover:border-gray-500'>
                {/* show email address if authenticated */}
                {/* Programatic routing because if user is loged in, button will become dropdown */}
                {/* see Figma Design */}
                <div>Sign Up</div> 
                <div className='w-6 h-6 bg-primary rounded-full '></div>
            </Button>
          </div>
        </nav>
        <div>
          {/* Spacing so that elemets do not go under the Nevbar element which is posisioned as fixed */}
          <div className="h-20"></div>
        </div>
      </>

    )
}