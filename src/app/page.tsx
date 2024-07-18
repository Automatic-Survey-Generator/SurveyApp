import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Sparkles } from 'lucide-react'

import Footer from '@/components/structural/Footer'
import AppScreenshot from '@/components/structural/AppScreenshot'
import AppFeatures from '@/components/structural/AppFeatures'

export default function About() {
    return (
        <>
            <div className="h-full ">
                {/* Grid */}
                <div className="absolute  inset-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10"></div>

                

                {/* <div className="relative px-3 md:px-24 xl:px-48 mb-24">
                    <div className=" w-full h-full backdrop-blur-[2px] "></div>
                    <img
                        src="/assets/app_screenshot.png"
                        alt="App Screenshot"
                        className="mx-auto mt-36 w-full border-4 rounded-3xl shadow-[18px_30px_7px_10px_#00000024]"
                    />
                </div> */}

                <AppScreenshot />

                <AppFeatures />

                <Footer />
            </div>
        </>
    )
}
