import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0)
    return (
        < div className="flex flex-col items-center gap-4 mt-20" >
            <h1 className="text-6xl font-bold">{count}</h1>
            <div className="flex gap-3">
                {/* <button className="px-6 py-2 bg-red-500 text-white rounded-xl text-xl" onClick={() => setCount(count - 1)}> - </button> */}
                <button className="px-6 py-2 bg-red-500 text-white rounded-xl text-xl" onClick={() => setCount(count > 0 ? count - 1 : 0)}> - </button>
                <button className="px-6 py-2 bg-gray-500 text-white round-xl text-xl" onClick={() => setCount(0)}>reset</button>
                <button className="px-6 py-2 bg-green-500 text-white round-xl text-xl" onClick={() => setCount(count + 1)}>+</button>
            </div>


        </div >
    )

}