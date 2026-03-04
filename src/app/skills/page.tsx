"use client"
import Link from "next/link"
import { useState } from "react"
import Widget from "../components/Widget"

export default function Skills() {
  const [SelectedTrack, setSelectedTrack] = useState("")
  return <main className="flex flex-col h-screen items-center">
    <div className="flex flex-col items-center justify-center pt-8">
      <h2>My skill playlist {"<3"}</h2>
    </div>

    <div className={SelectedTrack ? "flex flex-row flex-1 items-center" : "flex flex-col items-center justify-center flex-1"}>
      <div className={SelectedTrack ? "w-[30%] border-r border-theme p-6":""}>
        <h1>Select a skill track to explore</h1><br></br>

        <div className="cursor-pointer hover-bg duration-200"onClick={() => setSelectedTrack("Languages")}>
          <h4>Languages</h4>
        </div>

        <div className="cursor-pointer hover-bg duration-200"onClick={() => setSelectedTrack("ML & DS")}>
          <h4>ML & DS</h4>
        </div>

        <div className="cursor-pointer hover-bg duration-200"onClick={() => setSelectedTrack("Systems & Tools")}>
          <h4>Systems & Tools</h4>
        </div>
      </div>

      {SelectedTrack && <div className="w-[70%] p-6">
        {SelectedTrack==="Languages" && 
          <div>
            <p>Proficient in: C, C++, Python, Go</p>
            <p>Experience in: Java, JS, TS, HTML, CSS, React</p>
          </div>
        }
    
        {SelectedTrack==="ML & DS" &&
          <div>
            <p>Core Libraries: pandas, NumPy, matplotlib</p>
            <p>ML Frameworks: scikit-learn, pathway</p>
            <p>Web/APIs: Flask, Streamlit</p>
            <p>NLP: spaCy, TF-IDF, pdfplumber</p>
          </div>
        }

        {SelectedTrack==="Systems & Tools" &&
          <div>
            <p>Dev Tools: Git, GitHub, VSCode, IntelliJ</p>
            <p>Concepts: Concurrency, Worker Pools, REST APIs</p>
          </div>
        }
      </div>}
    </div>

    <div className="mb-6">
      <p className="cursor-pointer hover-bg duration-200"onClick={() => setSelectedTrack("")}>Click here to go to tracklist</p>
    </div>

    <Widget href="/" label="Return to Home" />
  </main>
}