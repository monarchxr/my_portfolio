import Link from "next/link"
import Widget from "./components/Widget"

export default function Home(){
  return(
    <main className="flex flex-col h-screen items-center justify-center gap-20">
      <div className="text-center">
        <h2>Raunak Jais</h2>
        <p>Junior year CS undergrad, studying DS and ML, dabbling in concurrency</p>
      </div>

      <div className="flex gap-4">
        <Link href="/contact">
          <div className="border border-white/15 p-5 w-30 text-center rounded-xl hover:bg-gray-700 transition-colors duration-200 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]">
          <h4>Contact</h4>
          </div>
        </Link>

        <Link href="/projects">
          <div className="border border-white/15 p-5 w-30 text-center rounded-xl hover:bg-gray-700 transition-colors duration-200 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]">
          <h4>Projects</h4>
          </div>
        </Link>

        <Link href="/about">
          <div className="border border-white/15 p-5 w-30 text-center rounded-xl hover:bg-gray-700 transition-colors duration-200 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]">
          <h4>About Me</h4>
          </div>
        </Link>

        <Link href="/skills">
          <div className="border border-white/15 p-5 w-30 text-center rounded-xl hover:bg-gray-700 transition-colors duration-200 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]">
          <h4>Skills</h4>
          </div>
        </Link>

        <Link href="/socials">
          <div className="border border-white/15 p-5 w-30 text-center rounded-xl hover:bg-gray-700 transition-colors duration-200 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]">
          <h4>Socials</h4>
          </div>
        </Link>
      </div>
    </main>
  )
}