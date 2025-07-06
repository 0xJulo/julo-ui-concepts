
import Link from "next/link";

export default function Header() {
    return (
        <div className="p-4 fixed top-0 left-0 right-0">
            <div className="flex gap-4 items-end">
                <Link href="/" className="text-2xl font-bold">
                    Julo
                </Link>
                <Link href="/woop" className="text-lg text-[#9E9E9E] hover:text-[#0E76FD]">
                    Woop
                </Link>
            </div>
        </div>
    )
}