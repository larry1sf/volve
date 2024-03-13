

export default function GifInfo({ cambiar, span, span1, url }) {
    return (
        <a
            onClick={cambiar}
            className="ancor-gif">
            <h2>Frames: {span}</h2>
            <span>Hash: {span1}</span>
            <span>URL: {url}</span>
        </a>
    );
}