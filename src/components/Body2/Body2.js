import './Body2.css';
import recognation from './icon-brand-recognition.svg';
import records from './icon-detailed-records.svg';
import custimzed from './icon-fully-customizable.svg'

export function Body2() {
    return (
        <div className="Body2">
            <div className='Body2_pt1'>
                <h5>Advanced Statistics</h5>
                <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
            </div>
            <div className='Body_pt2'>
                <div className='Body_pt2_card1'>
                    <img src={recognation} alt='Img1' />
                    <h6>Brand Recognition</h6>
                    <p>Boost your brand recognition with each click.
                        Generic links don't mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>
                <div className='Body_pt2_card2'>
                    <img src={records} alt='Img1' />
                    <h6>Detailed Records</h6>
                    <p>Gain insights into who is clicking your links. Knowing when and where people
                        engage with your content helps inform better decisions.
                    </p>
                </div>
                <div className='Body_pt2_card3'>
                    <img src={custimzed} alt='Img1' />
                    <h6>Fully Customizable</h6>
                    <p>Improve brand awareness and content discoverability through customizable links,
                        supercharging audience engagement.
                    </p>
                </div>
            </div>
        </div>
    )
}