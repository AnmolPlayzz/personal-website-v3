import Image from "next/image";
import {Property} from "csstype";
import ObjectFit = Property.ObjectFit;

export default function CardBg({src, alt, mode = "cover", invert = false}: {
    src: any;
    alt: string;
    mode?: ObjectFit;
    invert?: boolean;
}) {
    return (
        <Image style={{
            objectFit: mode,
            objectPosition: "center",
            transform: invert ? `scaleX(-1)` : `unset`
        }} src={src} alt={alt} quality={100} fill/>
    )
}