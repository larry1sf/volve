import Carro from "./Carro";
import LogoMM from "./LogoMM";
import Navegation from "./Navegation";

export default function Nav() {
    // const rutaLogo = 'nada aun';

    const firstLiNv = ['Urbana', 'Deportiv@', 'Pijama', 'Mas...'];

    const carro = '🚗';

    return (
        <>
            <header
                className="Nav">

                <LogoMM ></LogoMM>
                <Navegation listAcess={firstLiNv}></Navegation>
                <Carro element={carro}></Carro>
            </header >
        </>
    );
}