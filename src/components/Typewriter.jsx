"use client";
import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText({ text }) {
  return (
    <>
      <Typewriter
        words={[text]}
        loop={1}
        typeSpeed={40}
        deleteSpeed={30}
        delaySpeed={1000}
      />
    </>
  );
}
