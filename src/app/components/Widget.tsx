import Link from "next/link"

export default function Widget({href,label}:{href: string, label:string}){
    return(
        <Link href={href}>
            <div className="border border-white/15 p-5 w-50 text-center rounded-xl hover:bg-gray-700 transition-colors duration-200 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]">
            <h4>{label}</h4>
            </div>
        </Link>
    )
}