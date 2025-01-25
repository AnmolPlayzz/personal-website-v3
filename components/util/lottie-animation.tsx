"use client"
import { forwardRef, Ref } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

export interface LottieAnimationProps {
    animationData: unknown;
    width?: string;
    height?: string;
    loop?: boolean;
    autoplay?: boolean;
    id: string;
}

const LottieAnimation = forwardRef<LottieRefCurrentProps, LottieAnimationProps>(
    ({ animationData, id, width = '100%', height = '100%', loop = false, autoplay = true }, ref) => {

        if (ref!==null) {
            return (
                <div id={id} style={{ width, height }}>
                    <Lottie
                        // @ts-ignore
                        lottieRef={ref}
                        animationData={animationData}
                        loop={loop}
                        autoplay={autoplay}
                    />
                </div>
            );
        }

    }
);

LottieAnimation.displayName = 'LottieAnimation'; // For debugging

export default LottieAnimation;