import Image from "next/image";

export default function CardBg({src, alt}: {
    src: any;
    alt: string;
}) {
    return (
        <Image style={{
            objectFit: "cover",
            objectPosition: "center",
        }} src={src} alt={alt} fill/>
    )
}