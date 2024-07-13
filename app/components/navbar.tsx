import Image from "next/image";

export default function Navbar() {
    return (
        <div className="flex justify-center">
            <Image
                src="logo.svg"
                alt="Logo"
                width={200}
                height={200}
            />
        </div>
    )
}
