import './Grid.css'
import Key from '../keys/Keys'
import { IoBackspaceOutline } from "react-icons/io5";

export default function Grid(props){

    function updateOpration(character){

        if(character === 'Clear'){
            props.setOperation(prev => prev.slice(0, -1));           
            return
        }

        props.setOperation(props.operation + character)
    }

    return(
        <div className='Grid'>
            <table>
                <tbody>
                <tr>
                    <td onClick={()=>updateOpration("1")}><Key value={1}/></td>
                    <td onClick={()=>updateOpration("2")}><Key value={2}/></td>
                    <td onClick={()=>updateOpration("3")}><Key value={3}/></td>
                    <td onClick={()=>updateOpration("+")}><Key value={"+"}/></td>
                </tr>
                <tr>
                    <td onClick={()=>updateOpration("4")}><Key value={4}/></td>
                    <td onClick={()=>updateOpration("5")}><Key value={5}/></td>
                    <td onClick={()=>updateOpration("6")}><Key value={6}/></td>
                    <td onClick={()=>updateOpration("-")}><Key value={"-"}/></td>
                </tr>
                <tr>
                    <td onClick={()=>updateOpration("7")}><Key value={7}/></td>
                    <td onClick={()=>updateOpration("8")}><Key value={8}/></td>
                    <td onClick={()=>updateOpration("9")}><Key value={9}/></td>
                    <td onClick={()=>updateOpration("x")}><Key value={"x"}/></td>
                </tr>
                <tr>
                    <td onClick={()=>updateOpration("Clear")}><Key value={<IoBackspaceOutline/>}/></td>
                    <td onClick={()=>updateOpration("0")}><Key value={0}/></td>
                    <td onClick={()=>updateOpration(",")}><Key value={","}/></td>
                    <td onClick={()=>updateOpration("/")}><Key value={"/"}/></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}