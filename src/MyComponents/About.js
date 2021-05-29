import React from 'react'
import CountdownTimer from "react-component-countdown-timer";

export const About = () => {
    return (
        <>
        <CountdownTimer count={5432} border showTitle noPoints />
        <div>
            This is an about component 
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum corporis odio, nesciunt sed eveniet, nemo amet, dignissimos magnam itaque ipsam possimus. Inventore vitae, perferendis harum quas cupiditate adipisci repellendus tempore asperiores at consequatur quos?</p>
        </div>
        </>
    )
}
