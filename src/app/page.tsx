import { Button } from '@/components/ui/button'
import {Textarea} from '@/components/ui/textarea'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <>
    <div className='h-full bg-gray-50 pt-32'>
      <div className='jacques-francois-shadow-regular text-center text-[50px]'>
        Generate Surveys
        <br />
        with <span className='text-primary'>AI</span>
      </div>

      <form className='max-w-md mx-auto' action="">
        <Textarea placeholder="A survey for a zoo to rate animals" 
                className='w-full shadow-md shadow-gray-400 bg-gray-100 p-4 mt-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary' />
        <Button className='w-[200px] shadow-md shadow-gray-400 block text-black mx-auto mt-4'>
          <Sparkles className='inline-block w-5 h-5 mr-2' />
          Generate
          </Button>
      </form>

    </div>

      
    </>
  )
}
