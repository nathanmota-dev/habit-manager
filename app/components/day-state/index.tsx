import Image from "next/image";

export default function DayState({ day }: { day: boolean | undefined }) {

    let image: [string, string, number] = ["/icons/check.svg", "check", 12];

    if (day === true) {
        image = ["/icons/check.svg", "check", 24];
    } else if (day === false) {
        image = ["/icons/x.svg", "x", 24];
    } else {
        image = ["/icons/ellipse.svg", "ellipse", 12];
    }

    const [src, alt, size] = image;

    return (
        <div className="flex items-center justify-center h-9 p-2">
            <Image
                src={src}
                alt={alt}
                width={size}
                height={size} />
        </div>
    )
}
