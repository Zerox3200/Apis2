import './Body1.css'
import Working from './illustration-working.svg'

export function Body1() {
    return (
        <div className="Body1">
            <div className='Body1_Paragraphs'>
                <h1>More than just shorter links</h1>
                <p>
                    Build your brands's recognation and get detailed insights on how your links
                    are performing
                </p>
                <button className='btn btn-primary'>Get start</button>
            </div>
            <img src={Working} alt='Work' />
        </div>
    )
}