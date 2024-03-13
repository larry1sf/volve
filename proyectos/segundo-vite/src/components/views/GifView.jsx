export default function GifView({ cambiar, title, id, url }) {
    return (
        <a
            onClick={cambiar}
            href={`#${id}`}
            className="ancor-gif">
            <h2>{title}</h2>
            <span>{id}</span>
            <aside>
                <img src={url} />
            </aside>
        </a>

    );
}