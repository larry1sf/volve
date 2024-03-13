
// import React from 'react';
import './App.css';
import { TwiterFollowCard } from './TwiterFollowCard';

const user = [
    {
        userName: 'dora',
        img: 5,
        initialIsFollowing: true
    }, {
        userName: 'sonia',
        img: 7,
        initialIsFollowing: false
    },
    {
        userName: 'kevin',
        img: 9,
        initialIsFollowing: true
    }
];

export function App() {

    const formatUserName = (userName) => `@${userName}`;

    // const hola = <h1>CARL</h1>;

    return (
        <div className="body">

            {
                user.map(({ userName, img, initialIsFollowing }) => (


                    <TwiterFollowCard
                        key={userName}
                        formatUserName={formatUserName}
                        userName={userName}
                        img={img}
                        initialIsFollowing={initialIsFollowing}
                    >
                        {userName}
                    </TwiterFollowCard>
                )
                )
            }
        </div >
    );
}