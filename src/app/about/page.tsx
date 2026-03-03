import Link from "next/link"
import Widget from "../components/Widget";

function calculateAge(birthDate: Date | string): number{
  const today = new Date()
  const dob = new Date(birthDate)

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if(monthDiff<0 || (monthDiff===0 && today.getDate()<dob.getDate())){
    age--;
  }

  return age;
}


export default function About() {
  return <main className="flex flex-col h-screen items-center justify-center gap-20">
    <div className="text-center">
      <h2>Hello stranger who surfs on the network tides!</h2><br></br>
      <p className="underline">My name is Raunak Jais.</p>
      <p>I am {calculateAge("2005-01-31")} years old.</p>
      <p>Currently majoring in Computer Science Engineering, with a specialization in Data Science.</p>
      <p></p>
    </div>

    <div className="text-center">
      <h2 className="underline">What am I currently learning or working on?</h2><br></br>
      <p>Work on ML systems during the day</p>
      <p>Think about distributed systems at night</p>
      <p>- Learning Go and concurrency</p>
      <p>- Long term interested in P2P systems</p>
    </div>

    <div>
      <Widget href="/" label="Return to Home" />
    </div>
  </main>
}