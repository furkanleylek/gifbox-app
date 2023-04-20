import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const GifSkelaton = ({ count }) => {
    return (
        <div className="grid grid-cols-1 exsm:grid-cols-2 md:grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 w-full h-full ">
            {[...Array(count)].map((_, index) => (
                <div key={index} className="relative">
                    <SkeletonTheme baseColor="#B5B9BE" highlightColor="#D6DADE" duration={1.7} borderRadius={10} >
                        <Skeleton circle={false} height={240} />
                    </SkeletonTheme>
                </div>
            ))}
        </div>
    );
};

export default GifSkelaton;