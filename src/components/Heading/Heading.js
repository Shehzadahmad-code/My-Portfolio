import React from 'react'
import './Heading.css'
import sheze from './Jav.jpg'
import reaticon from './react.png'
import javascript from './js.png'
import htm from './html.png'
import cs from './css-3.png'

export default function Heading() {
    return (
        <>
            <section className='heading-container' id='home'>
                <div className='heading-content'>
                   <p><h2>Hi,</h2></p>
                   <h3> 
                                 This is Shehzad Ahmad a Web Developer.
                    </h3>
                    <p>
                        Passionate Fronted Developer | Transforming Ideas into
                        Seamless and Visuall Stunning Web Solutions
                    </p>
                </div>
                <div className='heading-img'>
                    <div>
                        <div className='icon'>
                            <img src={reaticon} alt="reacticon" />
                        </div>
                        <div className='mainpic'>
                        <img src={sheze} alt="./sheze" />
                        </div>
                        
                    </div>

                    <div className='divicon'>
                        <div className='icon'>
                            <img src={javascript} alt="" />
                        </div>
                        <div className='icon'>
                            <img src={htm} alt="" />
                        </div>
                        <div className='icon'>
                            <img src={cs} alt="" />
                        </div>
                        {/* <div className='icon'>
                            <img src={reaticon} alt="reacticon" />
                            <img src={sheze} alt="./sheze" />
                        </div>
                        <div className='icon2'>
                             <img src={javascript} alt="" />
                             <img src={htm} alt="" />
                             <img src={cs} alt="" />
                        </div> */}

                    </div>

                </div>

            </section>

        </>
    )
}
