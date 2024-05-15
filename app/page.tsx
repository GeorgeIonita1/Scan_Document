'use client'

import { useState } from "react";
import { createWorker } from "tesseract.js";

export default function Home() {
  const [myData, setMyData] = useState('');

  const handleClick = async () => {
    const worker = await createWorker('eng');
    const ret = await worker.recognize('/scanMe.png');
    console.log(ret.data.text)
    setMyData(ret.data.text);
    await worker.terminate();
  }

  return (
    <main>
      <button onClick={handleClick}>Click me</button>
      <div>{myData}</div>
    </main>
  );
}
