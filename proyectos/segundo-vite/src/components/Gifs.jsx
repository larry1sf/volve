import { useState } from 'react';
import '../services/listOnComponent.css';
import GifInfo from './views/GifInfo';
import GifView from './views/GifView';
export default function Gifs({ title, id, url, span, span1 }) {

    const [viewInfo, setViewInfo] = useState(false);


    const cambiar = function () {
        setViewInfo(!viewInfo);
    };



    const view = viewInfo ?
        <GifInfo
            cambiar={cambiar}
            span={span}
            span1={span1}
            url={id} /> :
        <GifView
            cambiar={cambiar}
            title={title}
            id={id}
            url={url}
        />;

    return (
        view
    );
}