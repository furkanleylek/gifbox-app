import React from 'react'
import SingleGif from '@/components/singleGif';

async function MemeId({ params }) {

    return (
        <div>
            <SingleGif id={params.id} />
            <h1>RELATED GİFS</h1>
            <h1>BEĞENEBİLECEKLERİ BAŞKA KONULU GİFS</h1>
        </div>
    )
}

export default MemeId