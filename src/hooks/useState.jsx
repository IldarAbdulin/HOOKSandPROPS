import { useState } from "react";
import sneaker from '../img/1.svg'
import FirstTab from '../tabs/FirstTab'
import SecondTab from '../tabs/SecondTab'
import ThirdTab from '../tabs/ThirdTab'

function State() {
    const [count, setCount] = useState(0)
    const [showImg, setShowImg] = useState(false)
    const [active, setActive] = useState();

    return(
        <div>
            <br />
            <button onClick={() => {setCount(count + 1)}} style={{margin:"0 10px"}}>Plus btn</button>
            {count}
            <button onClick={() => {setCount(count - 1)}} style={{margin:"0 10px"}}>Minus btn</button>
            <br />
            <br />
            <br />
            <button onClick={() => {setShowImg(!showImg)}}>{showImg ? 'Скрыть' : 'Добавить'} картинку</button>
            <br />
            {
                showImg && <img src={sneaker} alt='1'/>
            }
            <br />
            <br />
            {/* <ul>
                <li style={{color: active === 1 ?  'red' : "black"}} onClick={() => setActive(1)}>Item 1</li>
                <li style={{color: active === 2 ? 'red' : 'black'}} onClick={() => setActive(2)}>Item 2</li>
            </ul> */}

            <button style={{margin:5}} onClick={() => setActive('Данные скрыты')}>Скрыть</button>
            <button style={{margin:5, color: active === 1 ? 'red' : 'black'}} onClick={() => setActive(<FirstTab />)}>Tab #1</button>
            <button style={{margin:5}} onClick={() => setActive(<SecondTab />)}>Tab #2</button>
            <button style={{margin:5}} onClick={() => setActive(<ThirdTab />)}>Tab #3</button>
            <p className='active'>
                {active}
            </p>
        </div>
    )
}
export default State