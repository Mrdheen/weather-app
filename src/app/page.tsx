"use client";
import { useState } from "react";
import { XCircle } from "lucide-react"; // Importing the X icon

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod !== 200) throw new Error(data.message);
      setWeather(data);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-blue-100">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Weather App</h1>

        {/* Input Field with Clear Button */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Enter city name"
            className="w-full border p-3 rounded-full text-lg pr-10"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {city && (
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() => setCity("")}
            >
              <XCircle size={20} />
            </button>
          )}
        </div>

        <button
          onClick={fetchWeather}
          className="w-full bg-blue-500 text-white text-lg font-semibold py-3 rounded-full mt-4 hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? "Loading..." : "Get Weather"}
        </button>

        {weather && (
          <div className="mt-6 p-4 bg-gray-100 rounded-full text-center">
            <h2 className="text-xl font-semibold">{weather.name}</h2>
            <p className="capitalize text-gray-700">{weather.weather[0].description}</p>
            <p className="text-lg font-bold">🌡️ {weather.main.temp}°C</p>
            <p className="text-sm text-gray-600">Humidity: {weather.main.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
}
