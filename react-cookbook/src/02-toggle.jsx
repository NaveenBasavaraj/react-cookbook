import { useState } from "react";

export default function Toggle() {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="flex flex-col items-center gap-6 mt-20">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-xl text-lg" onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"}
            </button>
            {
                isVisible && (
                    <p className="text-xl text-gray-700 bg-gray-100 px-8 py-4 rounded-xl">
                        Hello! I appear and dissappear
                    </p>
                )
            }
        </div>
    );
}