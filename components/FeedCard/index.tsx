import React from 'react'
import Image from 'next/image'
import { BiMessageRounded } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart, AiOutlineUpload } from 'react-icons/ai'
const FeedCard: React.FC = () =>{
    return <div className='border border-r-0 border-l-0 border-b-0 border-gray-800 p-5 hover:bg-slate-900 transition-all cursor-pointer'>
        <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-1'>
                <Image src="https://avatars.githubusercontent.com/u/95305111?v=4" alt="user-image " height={50} width={50}/>
            </div>
            <div className='col-span-11'>
                <h5>Shivang Sharma</h5>
                <p>
                    Is it just me or everyone else? Do you feel the 
                    code quality decrease as the project size increases? 
                    Just refactored a lot of bad code #prodev 
                </p>
                <div className='flex justify-between mt-5 text-xl items-center p-2 w-[90%] '>
                    <div>
                    <BiMessageRounded/>
                    </div>
                    <div>
                    <FaRetweet/>
                    </div>
                    <div>
                    <AiOutlineHeart/>
                    </div>
                    <div>
                    <AiOutlineUpload/>
                    </div>
                </div>
            </div>


        </div>
    </div>
}

export default FeedCard