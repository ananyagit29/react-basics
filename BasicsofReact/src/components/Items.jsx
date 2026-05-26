import React from 'react'

const Items = () => {
    const age = 20;
  return (
    <div>
        {
            (age>=18) ? (
            <>
                <h1>You can drive</h1>
            </>
            ) : (
            <>
                <h1>You are not eligible to drive</h1>
            </>)
        }
    </div>
  )
}

export default Items