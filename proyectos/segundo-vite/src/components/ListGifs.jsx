import './ListGifs.css';
import { useState } from 'react';

const urlGifs = ['https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXo2dWdsMHoydGx3Z25odmN2YTA1aW96bmk4M3Azcm5nYTZsaXlldSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GgC09tLNyj7Xs2cipA/giphy.gif', "https://media.giphy.com/media/VABWURXVg8I8lpFpBR/giphy.gif", 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWRxdG5wd2M2OXJ0NzloY3dzNHpsZWhrcTZnYTkya3BzcHNvNXU5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PHJJcmWdzwDgTVtJoW/giphy.gif'];


const ListGifs = () => {


    const [gif, setGif] = useState(urlGifs);

    const nextGif = () => {

        const [a, b, c] = gif;
        let next = [b, c, a];
        return next.map((s) => s);
    };

    const afterGif = () => {

        const [a, b, c] = gif;
        let after = [c, a, b];
        return after.map((e) => e);
    };










    return (
        <>
            <div className="list-gifs">

                <div className='lg-conte-imgs'>
                    < img key={gif} src={gif} alt='lista de gifs' />
                </div>

                <aside className='lg-btn-switches'>

                    <button
                        className='lg-btn-swtich-gif'
                        onClick={() =>
                            setGif(
                                nextGif
                            )}
                    >
                        switch next gifs
                    </button>

                    <button
                        className='lg-btn-switch-gif'
                        onClick={() =>
                            setGif(
                                afterGif
                            )
                        }
                    >
                        switch after gifs
                    </button>
                </aside>

            </div>
        </>

    );
}; export default ListGifs;