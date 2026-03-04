import Widget from "../components/Widget";

export default function Socials() {
  return <main className="flex flex-col h-screen items-center justify-center gap-10">
    <div>
      <p>Here are my socials, you can 𝚜̶𝚝̶𝚊̶𝚕̶𝚔̶ scout them.</p>
    </div>

    <div className="flex flex-row gap-20 items-center justify-center">
      <div>
        <a href="https://linkedin.com/in/raunak-jais/" target="_blank">
          <img src="/linkedinlogo.svg" className="icon cursor-pointer w-20 h-20" />
        </a>
      </div>

      <div>
        <a href="https://github.com/monarchxr" target="_blank">
          <img src="/githublogo.svg" className="icon cursor-pointer w-20 h-20" />
        </a>
      </div>

      <div>
        <a href="https://x.com/raunak_jais" target="_blank">
          <img src="/twitter-x.svg" className="icon cursor-pointer w-20 h-20" />
        </a>
      </div>
    </div>

    <Widget href="/" label="Return to Home" />
  </main>
}