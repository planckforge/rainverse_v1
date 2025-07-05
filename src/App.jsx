import { useState } from 'react';
import './index.css';

export default function App() {
  const [stage, setStage] = useState('welcome');
  const [formData, setFormData] = useState({
    type: '',
    words: '',
    emotion: '',
    situation: '',
    moment: '',
    city: '',
    time: '',
    weather: '',
  });
  const [poem, setPoem] = useState('');

  const handleNext = () => setStage('form');
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleGenerate = () => {
    const combined = `You want a ${formData.type} with these elements:\n\nWords: ${formData.words}\nEmotion: ${formData.emotion}\nSituation: ${formData.situation}\nMoment: ${formData.moment}\nCity: ${formData.city}\nTime: ${formData.time}\nWeather: ${formData.weather}`;
    setPoem(`🌧️ Rainverse 🌧️\n\n${combined}\n\nHere's your poetic output...`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {stage === 'welcome' && (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
            Welcome to Rainverse_v1
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Turn your emotions into magical expressions — poem, lyrics, letter or a story.
          </p>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded shadow-lg"
          >
            Let's Begin 💫
          </button>
        </div>
      )}

      {stage === 'form' && (
        <div className="max-w-xl mx-auto py-10 px-4 animate-fadeIn">
          <h2 className="text-3xl font-bold text-center mb-6">Create Your Expression</h2>
          <div className="space-y-4">
            <select name="type" onChange={handleChange} className="w-full p-2 border rounded">
              <option value="">What do you want to create?</option>
              <option value="Poem">Poem</option>
              <option value="Lyrics">Lyrics</option>
              <option value="Letter">Letter</option>
              <option value="Short Story">Short Story</option>
            </select>
            <input
              type="text"
              name="words"
              placeholder="20 words (English/Hindi/Hinglish)"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="emotion"
              placeholder="Emotion (e.g., Love, Sadness)"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="situation"
              placeholder="Situation (e.g., Breakup, Reunion)"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="moment"
              placeholder="Moment (e.g., College Farewell)"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="time"
              placeholder="Time (e.g., Midnight, Sunrise)"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="weather"
              placeholder="Weather (e.g., Rainy, Winter)"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <button
              onClick={handleGenerate}
              className="w-full py-2 bg-pink-500 text-white font-semibold rounded hover:bg-pink-600 transition"
            >
              Generate ✨
            </button>
          </div>

          {poem && (
            <pre className="mt-6 bg-gray-100 p-4 rounded whitespace-pre-wrap text-sm">{poem}</pre>
          )}
        </div>
      )}
    </div>
  );
}
