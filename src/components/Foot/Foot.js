import './Foot.css'
import { faFacebookF, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function Foot() {
    return (
        <div className='Foot'>
            <div className='Foot_Title'>
                <h5>Shortly</h5>
            </div>
            <div className='Foot_links'>
                <p>Features</p>
                <ul>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
            </div>
            <div className='Foot_links'>
                <p>Resources</p>
                <ul>
                    <li>Blog </li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className='Foot_links'>
                <p>Company</p>
                <ul>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='Foot_links Logos'>
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faPinterest} />
            </div>
        </div>
    )
}