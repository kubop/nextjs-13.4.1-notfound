import Link from "next/link";

export default function Header() {
    return (
        <>
            <Link href="/">Home</Link>
            <Link href="/not-existing-path">Clicking this doesnt work</Link>
        </>
    )
}