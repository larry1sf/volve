export default function LogoMM({ keyprop = '../../public/img.png' }) {
    return (
        <div
            className="logoMM">
            <img src={keyprop} alt="logo momcada models" />
        </div>
    );
}