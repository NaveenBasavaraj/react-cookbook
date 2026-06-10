import { useState } from "react";

const LIMIT = 100;

export default function CharacterCount() {
    const [text, setText] = useState("");
    const count = text.length;
    const isNearLimit = count >= LIMIT * 0.8;
    const isOverLimit = count > LIMIT;
    return (
        <div className="flex flex-col items-center gap-4 mt-20">
            <h1 className="text-2xl font-bold">Character Count</h1>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Start typing..."
                className="w-96 h-40 p-4 border-2 border-gray-300 rounded-xl resize-none text-gray-700 focus:outline-none focus:border-blue-400"
            />
            <p className={`text-lg font-semibold ${isOverLimit
                ? "text-red-500"
                : isNearLimit
                    ? "text-yellow-500"
                    : "text-gray-500"
                }`}>
                {count} / {LIMIT}
            </p>

            {isOverLimit && (
                <p className="text-red-500 text-sm">
                    You are {count - LIMIT} characters over the limit!
                </p>
            )}
        </div>
    )
}