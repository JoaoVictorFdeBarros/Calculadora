import './Footnote.css'
import { FaGithub } from "react-icons/fa";

export default function Footnote(){
    return(
        <div className='Footnote'>
            <a href='google.com'><FaGithub /> Repositório</a>
            <p>Desenvolvido por João Victor F. Barros - Dezembro 2024</p>
        </div>
    )
}