import { useState, useEffect } from "react";

function List() {
    const [numbers, setNumbers] = useState([1,2])

    const addRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 10)
        const pushRandomNumber = [...numbers, randomNumber]
        setNumbers(pushRandomNumber)
    }
    useEffect(() => {
        console.log('Число изменилось')
    }, [numbers])
    useEffect(() => {
        console.log('Компонент существует');
        return () => {
            console.log('Компонент удален')
        }
    }, [])

    return (
        <div className="List">
            {
                numbers.map((number, index) => (
                    <span key={index} style={{margin:'0 5px'}}>{number}</span>
                ))
            }
            <br />
            <button onClick={addRandomNumber}>Add random number</button>
            <br />
        </div>
    )
}
export default List