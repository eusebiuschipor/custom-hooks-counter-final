import { useState, useEffect } from 'react';
import loremData from '../data/loremData';

const useCounter = (forwards, lorem) => {
    const [counter, setCounter] = useState(0);

    /*
        - useEffect - executa o functie de fiecare data cand se schimba o dependinta din al doilea array trimis ca parametru
        - daca vrem ca functia sa fie executata o singura data, array-ul de depinde trebuie sa fie gol
    */
    useEffect(() => {
        const interval = setInterval(() => {
            /*
                - suntem intr-un closure si nu putem accesa valoarea globala a state-ului, decat printr-un parametru trimis la setState, 
                care reprezinta valoarea anterioara a stateului
            */

            if (forwards) {
                setCounter((prevCounter) => {
                    if (lorem) {
                        if (prevCounter < 9) {
                            return prevCounter + 1
                        } else {
                            return 0
                        }
                    } else {
                        return prevCounter + 1
                    }
                });
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
            
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);

    if (lorem) {
        return loremData[counter];
    }
    
    return counter;
}

export default useCounter;