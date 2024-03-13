import { useState } from "react";


export function TwiterFollowCard({ formatUserName, userName, children, img = 3, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const texto = isFollowing ?
        'siguiendo' :
        'seguir';

    const className = isFollowing ?
        'followCardButton isFollowing'
        : 'followCardButton';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };


    console.log(isFollowing);


    return (
        <div >
            <header className="card">
                <img src={`https://wallpapercave.com/wp/wp784569${img}.jpg`} alt="icono de super heroe" />
                <div className='card-info'>
                    <strong> {children}</strong>
                    <span> {formatUserName(userName)}</span>
                </div>

                <aside>
                    <button
                        className={className}
                        onClick={handleClick}>
                        <span
                            className="followCard-text">
                            {texto}
                        </span>
                        <span
                            className="stopFollowing">
                            dejar de seguir
                        </span>
                    </button>
                </aside>
            </header>
        </div>
    );
}