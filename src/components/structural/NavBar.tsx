
import Link from 'next/link'
import { Button } from '../ui/button'


export default function NavBar() {

    return (
        <nav className="w-full p-4 flex justify-between items-center gap-4 shadow-md">

          <Link href="/" className='text-primary text-2xl font-bold uppercase'>SURVEY CREATOR</Link>

            <div className='flex gap-4'>
                <Link href="/">Home</Link>
                <Link href="/editor">Form Editor</Link>
                <Link href="/admin">Admin Panel</Link>
                <Link href="/login">Login</Link>
            </div>
            
          <div>
            <Button className='flex gap-3 justify-around group items-center bg-transparent border border-gray-400 rounded-full text-slate-700 hover:bg-white hover:border-gray-500'>
                {/* show email if authenticated */}
                <div>Sign Up</div> 
                <div className='w-6 h-6 bg-primary rounded-full '></div>
            </Button>
          </div>
        </nav>
    )


}