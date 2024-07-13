import type { ICompletedForm } from "@/models/types";
import { Divide } from "lucide-react";

const example_completed_forms : ICompletedForm[] = []

export default function SubmissionsTable({submissions}: {submissions:ICompletedForm[]} ){

    return (
        <div>
            <div className='pt-10'>
                <h2 className='py-6 font-bold text-gray-800'>My Forms</h2>

                <div className="bg-white h-56 shadow-xl rounded-xl">
                    {submissions.length===0 && 
                        <div className="h-full flex justify-center items-center ">
                            <span className="block text-gray-400 text-sm font-bold">No Submitted Forms Yet</span>
                        </div>
                    }
                    {submissions.length > 0 &&
                        <div>
                            <div className="bg-red-300">TABLE COMPONENT NOT CREATED YET</div>
                            {JSON.stringify(submissions)}
                        </div>
                    }
                </div>
            </div>
        </div>
    )

}