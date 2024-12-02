import './Footnote.css'
import { FaGithub } from "react-icons/fa";

export default function Footnote(){
    return(
        <div className='Footnote'>
            <a href='https://github.com/JoaoVictorFdeBarros/Calculadora'><FaGithub /> Repositório</a>
            <p>Desenvolvido por João Victor F. Barros - Dezembro 2024</p>
        </div>
    )
}