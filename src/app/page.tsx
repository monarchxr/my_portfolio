import Link from "next/link"
import Widget from "./components/Widget"

export default function Home(){
  return(
    <main className="flex flex-col h-screen items-center justify-center gap-20">
      <div className="text-center">
        <h2>Raunak Jais</h2>
        <p>Junior year CS undergrad, studying DS and ML, dabbling in concurrency</p>
      </div>

      <div className="flex gap-2">
        <Widget href="/contact" label="Contact" />

        <Widget href="/projects" label="Projects" />

        <Widget href="/about" label="About Me" />

        <Widget href="/skills" label="Skills" />

        <Widget href="/socials" label="Socials" />
      </div>
    </main>
  )
}