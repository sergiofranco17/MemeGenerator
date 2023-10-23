import React from 'react'

function CounterPractice() {
    const [count, setCount] = React.useState(0)
    function add(){
        setCount(prevCount => prevCount + 1)
    }

    function sus(){
        setCount(prevCount => prevCount - 1)
    }

  return (
    <div className='counter'>
        <button className='counter-minus' onClick={sus}>-</button>
        <div className='counter-count'>
            <h1>{count}</h1>
        </div>
        <button className='counter-plus' onClick={add}>+</button>
    </div>
  )
}

export default CounterPractice

/*.counter{
  display: flex;
  align-items: flex-end;
}

.counter > button{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: #737373;
  color: #D9D9D9;
  font-size: 1.5rem;
}

.counter > button:hover {
  background-color: #404040;
  color: #D9D9D9;
}

.counter > button:focus {
  outline: none;
}

.counter-count{
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #262626;
}

.counter-plus{
  margin-left: -20px;
}

.counter-minus{
  margin-right: -20px;
  z-index: 1;
} CSS STYLE 