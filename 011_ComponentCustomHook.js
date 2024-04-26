import { useComponentCustomHook } from "./011_useComponentCustomHook"

function ComponentCustomHook(params) {
    const [data, handlerData] = useComponentCustomHook(1);

    return (
        <>
            <h1>Home</h1>
            <h2>Data: {data}</h2>
            <h3>Params: {params.title}</h3>
            <button onClick={() => handlerData(data + 1)}>Click</button>
        </>
    );
}

export default ComponentCustomHook;