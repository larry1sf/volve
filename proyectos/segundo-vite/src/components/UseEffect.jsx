import { useEffect, useState } from "react";

const urlGifs = ['https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXo2dWdsMHoydGx3Z25odmN2YTA1aW96bmk4M3Azcm5nYTZsaXlldSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GgC09tLNyj7Xs2cipA/giphy.gif', "https://media.giphy.com/media/VABWURXVg8I8lpFpBR/giphy.gif", 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWRxdG5wd2M2OXJ0NzloY3dzNHpsZWhrcTZnYTkya3BzcHNvNXU5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PHJJcmWdzwDgTVtJoW/giphy.gif'];
const newGif = ['https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWRxdG5wd2M2OXJ0NzloY3dzNHpsZWhrcTZnYTkya3BzcHNvNXU5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PHJJcmWdzwDgTVtJoW/giphy.gif'];
export default function UseEffect() {
    const [gif, setGif] = useState(urlGifs);
    useEffect(() => {
        console.log('holiwi');
    }, []);
    return (
        <>
            <header>
                {gif.map((iGif) => <img key={iGif} src={iGif} alt="gifs" />)}
                <aside>
                    <button onClick={() => setGif(newGif)}>cambio de gif</button>
                </aside>
            </header>
        </>
    );
}