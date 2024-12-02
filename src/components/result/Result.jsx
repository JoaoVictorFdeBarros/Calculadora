import './Result.css'

export default function Result(props){
    return(
        <div className='Result'>
            <p className='Operation'>{props.operation}</p>
            <p className='Output'>= {props.output}</p>
        </div>
    )
}