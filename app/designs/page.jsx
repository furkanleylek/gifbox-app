import React from 'react'
import Slider from '@/components/slider'
function Designs() {

    const items = [
        "SLİDER 1",
        "SLİDER 2",
        "SLİDER 3 ",
        "SLİDER 4",
        "SLİDER 5",
        "SLİDER 6",
        "SLİDER 7 ",
        "SLİDER 8",
    ]
    return (
        <div className='w-full h-full'>
            <Slider items={items} />
        </div>
    )
}

export default Designs