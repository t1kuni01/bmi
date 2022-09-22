import { useEffect, useState  } from 'react';
import './App.css';

function App() {
    const [time, setTime] = useState(new Date())
    
    useEffect( () => {
        const id = setInterval( () => {
            setTime(new Date());
        },1000);

    return () => {
        clearInterval(id);
    }
}, [] );
return (
    <div style={{margin: "30px"}}>
        {time.toLocaleTimeString()}
        </div>
)
}