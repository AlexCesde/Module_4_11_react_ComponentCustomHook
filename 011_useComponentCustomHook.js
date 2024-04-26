import { useState } from "react";

function useComponentCustomHook(value) {
    const [data, setData] = useState(value);

    const handlerData = (value) => {
        setData(value)
    };

    return [data, handlerData]
}

export { useComponentCustomHook };