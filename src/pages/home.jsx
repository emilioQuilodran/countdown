import face from '../assets/images/icon-facebook.svg'
import insta from '../assets/images/icon-instagram.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import CountdownTimer from '../components/countdouwnTimer';

const Home = () => {
    return(
        <div className='under-construction'>
            <main>
                <CountdownTimer></CountdownTimer>
            </main>
            <footer>
                <ul>
                    <li>
                        <img src={face} alt='facebook'></img>
                    </li> 
                    <li>
                        <img src={insta} alt='instagram'></img>
                    </li>
                    <li>
                        <img src={pinterest} alt='pinterest'></img>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Home;