import Link from "next/link"

export default function Widget({href,label}:{href: string, label:string}){
    return(
        <Link href={href}>
            <div className="border border-theme p-5 w-50 text-center rounded-lg hover-bg transition-colors duration-200 hover-shadow mb-4">
            <h4>{label}</h4>
            </div>
        </Link>
    )
}