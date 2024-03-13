export default function Carro({ element = 'nada' }) {
    return (
        <>
            <aside
                className="conteCarro">
                <div>
                    {
                        element
                    }
                </div>
            </aside>
        </>
    );
}