import React from 'react'

export default function () {
  return (

    <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
    <div className="w-full md:w-1/2 py-8">
      <h1 className="text-purple-900 text-3xl font-semibold leading-none tracking-tighter">
        Welcome to <br />
        <span className="text-blue-500">
          My Portfolio, <br />
        </span>{" "}
        I am a{" "}
        <span className="typing libre-baskerville-bold text-green-500">
          {/* {currentSkill} */}
          <TypeAnimation
            sequence={[
              "FullStack Developer", // Types 'One'
              1000, // Waits 1s
              "Frontend Developer", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "Backend Developer", // Types 'Three' without deleting 'Two'
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "50px", display: "inline-block" }}
          />
        </span>
      </h1>
    </div>
    <div className="w-full md:w-1/2 py-8">
      <img
        src="https://www.svgrepo.com/show/493509/person-who-invests.svg"
        className="g-image"
        alt="Person Illustration"
      />
    </div>
  </div>
  )
}
