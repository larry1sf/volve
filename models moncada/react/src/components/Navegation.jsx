export default function Navegation({ listAcess = ['uno', 'dos'] }) {

    const lista = listAcess;
    return (
        <div
            className="navegation">

            {
                lista.map(
                    (i, index) => {
                        return (
                            <ul key={index}>
                                <li>{i}</li>
                            </ul>
                        );
                    }
                )
            }
        </div>
    );
}