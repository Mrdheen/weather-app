"use client";
import { useState, useEffect } from "react";
import { XCircle, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion"; // Framer Motion for animations

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  interface WeatherData {
    name: string;
    weather: { description: string }[];
    main: { temp: number; humidity: number };
  }

  // Load theme AFTER mounting
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  // Save theme preference
  useEffect(() => {
    if (darkMode !== null) {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
  }, [darkMode]);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod !== 200) throw new Error(data.message);
      setWeather(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle Enter Key Press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchWeather(); // Trigger fetch when Enter is pressed
    }
  };

  if (darkMode === null) {
    return <div className="min-h-screen flex items-center justify-center text-gray-600">Loading...</div>;
  }

  return (
    <motion.div
      className={`${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-100 to-blue-300"} 
      flex flex-col items-center justify-center min-h-screen p-6 transition-all duration-500`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dark Mode Toggle */}
      <motion.div className="absolute top-4 right-4">
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center bg-gray-200 px-4 py-2 rounded-full shadow-md transition"
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? (
            <motion.span initial={{ rotate: -90 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
              <Sun className="w-6 h-6 text-cyan-400" />
            </motion.span>
          ) : (
            <motion.span initial={{ rotate: 90 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
              <Moon className="w-6 h-6 text-gray-800" />
            </motion.span>
          )}
          <span className="ml-2 text-lg text-gray-900">{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </motion.button>
      </motion.div>

      <motion.div
        className={`w-full max-w-md ${darkMode ? "bg-gray-800 text-white" : "bg-white"} 
        shadow-xl rounded-lg p-6 transition-all duration-500`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h1 className={`text-2xl font-bold text-center mb-4 ${darkMode ? "text-cyan-400" : "text-blue-600"} transition-all`}>
          🌤️ Weather App
        </h1>

        {/* Input Field with Clear Button */}
        <div className="relative w-full">
          <motion.input
            type="text"
            placeholder="Enter city name"
            className={`w-full border p-3 rounded-full text-lg pr-10 focus:ring-1 transition-all ${
              darkMode ? "bg-gray-700 text-white focus:ring-cyan-400" : "focus:ring-blue-400"
            }`}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyPress} // ✅ Detect Enter Key Press
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
          {city && (
            <motion.button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() => setCity("")}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <XCircle size={20} />
            </motion.button>
          )}
        </div>

        {/* Fetch Weather Button */}
        <motion.button
          onClick={fetchWeather}
          className={`w-full text-lg font-semibold py-3 rounded-full mt-4 transition disabled:opacity-50 ${
            darkMode ? "bg-cyan-500 hover:bg-cyan-600" : "bg-blue-500 hover:bg-blue-600"
          } text-white flex justify-center`}
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? (
            <motion.div
              className="border-4 border-white border-t-transparent w-6 h-6 rounded-full animate-spin"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            "Get Weather"
          )}
        </motion.button>

        {/* Error Message */}
        {error && <motion.p className="text-red-600 text-center mt-4">{error}</motion.p>}

        {/* Weather Data Display */}
        {weather && (
          <motion.div
            className={`mt-6 p-4 rounded-lg text-center shadow-md transition-all ${
              darkMode ? "bg-gray-700 text-white" : "bg-gray-100"
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl font-semibold">{weather.name}</h2>
            <p className="capitalize">{weather.weather[0].description}</p>
            <p className="text-lg font-bold">🌡️ {weather.main.temp}°C</p>
            <p className="text-sm">Humidity: {weather.main.humidity}%</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
