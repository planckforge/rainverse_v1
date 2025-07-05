import React, { useState } from 'react';

export default function App() {
  const [input, setInput] = useState('');
  const [poem, setPoem] = useState('');

  const handleGenerate = () => {
    setPoem(`🌧️ Rainverse Poem 🌧️\n\nYou wrote: "${input}"\n\nHere's your poetic response...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Rainverse_v1</h1>
      <textarea
        placeholder="What's on your mind?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full max-w-md p-4 rounded bg-white/10 backdrop-blur text-white placeholder-white/60 mb-4"
        rows="4"
      />
      <button onClick={handleGenerate} className="bg-pink-500 hover:bg-pink-600 transition px-6 py-2 rounded font-semibold">
        Generate 💫
      </button>
      {poem && <pre className="mt-6 bg-white/10 p-4 rounded max-w-md w-full whitespace-pre-wrap">{poem}</pre>}
    </div>
  );
}