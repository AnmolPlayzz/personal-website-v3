import Image from "next/image";

export default function ToolIcons({list}: {
    list: string[]
}) {
    return <div style={{
        display: "flex",
        gap: "10px",
    }}>
        {list.map((item, i) => {
            return (
                <Image src={`/projects/icons/${item}.svg`} alt={item} key={i} width={30} height={30} />
            )
        })}
    </div>
}