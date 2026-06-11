import { useState } from "react";

const LIGHTS = ["red", "yellow", "green"];

const LIGHT_CONFIG = {
    red: { bg: "bg-red-500", message: "Stop", textColor: "text-red-500" },
    yellow: { bg: "bg-yellow-400", message: "Slow Down", textColor: "text-yellow-500" },
    green: { bg: "bg-green-500", message: "Go!", textColor: "text-green-500" },
};

export default function TrafficLight() {
    const [current, setCurrent] = useState("red");

    function nextLight() {
        const currentIndex = LIGHTS.indexOf(current);
        const nextIndex = (currentIndex + 1) % LIGHTS.length;
        setCurrent(LIGHTS[nextIndex]);
    }

    const config = LIGHT_CONFIG[current];

    return (
        <div className="flex flex-col items-center gap-6 mt-20">

            <h1 className="text-2xl font-bold">Traffic Light</h1>

            {/* Traffic light housing */}
            <div className="flex flex-col items-center gap-4 bg-gray-800 p-6 rounded-2xl">
                {LIGHTS.map((light) => (
                    <div
                        key={light}
                        className={`w-24 h-24 rounded-full ${current === light ? LIGHT_CONFIG[light].bg : "bg-gray-600"
                            }`}
                    />
                ))}
            </div>

            {/* Message */}
            <p className={`text-3xl font-bold ${config.textColor}`}>
                {config.message}
            </p>

            {/* Button */}
            <button
                onClick={nextLight}
                className="px-8 py-3 bg-blue-500 text-white rounded-xl text-lg"
            >
                Next
            </button>

        </div>
    );
}