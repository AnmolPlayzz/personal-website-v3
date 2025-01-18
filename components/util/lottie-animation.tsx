import React from 'react';
import Lottie from 'lottie-react';

const LottieAnimation = ({ animationData, width = '100%', height = '100%', loop = false}: {
    animationData: any,
    width?: string,
    height?: string,
    loop?: boolean
}) => {
    return (
        <div style={{ width, height }}>
            <Lottie
                animationData={animationData}
                loop={loop}
                autoplay={true}
            />
        </div>
    );
};
