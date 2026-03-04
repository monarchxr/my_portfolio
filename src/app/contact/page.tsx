import Link from "next/link"
import Widget from "../components/Widget"

export default function Contact() {
  return <main className="flex flex-1 flex-col h-screen items-center gap-10 w-full justify-center">
    <div className="flex flex-col items-center justify-center gap-2 pt-8">
      <p>Click below to send me an email!</p>
      <a href="mailto:raunakjais2131@gmail.com">raunakjais2131@gmail.com</a>
    </div>

    <Widget href="/" label="Return to Home" />
  </main>
}