import React, { useMemo, useState } from 'react';

const getAverage = numbers => {
    console.log('평균갑 계산 중..');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    }
    
    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        console.log(nextList);
        setList(nextList);
        setNumber('');
    }
    
    const avg = useMemo(()=>{getAverage(list)}, [list]);

    return (
        <div>
            <input onChange={onChange} value={number}/>
            <button onClick={onInsert}>
                저장
            </button>
            <ul>
                {
                    list.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })
                }
            </ul>
            <div>
                <b>평균값 : </b>{avg}
            </div>
        </div>
    );
};

export default Average;