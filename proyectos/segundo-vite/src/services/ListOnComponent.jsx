import { useEffect, useState } from "react";
import Gifs from "../components/Gifs";
import apiObGifs from "../services/apiObtencionGifs";

export default function ListOnComponent({ params }) {

    const { keyword } = params;


    const [gifs, setGifs] = useState(
        { loading: false, result: [] }
    );

    useEffect(function () {

        setGifs(actualGifs => ({ loading: true, result: actualGifs.result }));
        // console.log('iniciando fetch');
        apiObGifs({ keyword })

            .then(i => {
                setGifs({ loading: false, result: i });

            });
    }, [keyword]);

    if (gifs.loading) return <i>cargan🎯</i>;

    return <div>
        {
            gifs.result.map(({ id, url, title, frames, hash }) =>
                <Gifs
                    id={id}
                    key={id}
                    span={frames}
                    span1={hash}
                    title={title}
                    url={url}
                />
            )
        }
    </div>;

}