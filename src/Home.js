import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
            <div className='Container '>
                <div className='innerBox'>
                    <div style={{ display: "flex", justifyContent: "space-evenly", fontSize: "20px", fontWeight: "bold" }}>
                     <div className='activeColor'>Login</div>
                    </div>
                    <h1 className='heading'>Login</h1>
                    <form>
                        <label htmlFor="">Email</label><br />
                        <input type="text" name='email' placeholder='enter your email' required /><br />
                        <label htmlFor="">Password</label><br />
                        <input type="text" name='password' placeholder='enter your Password' required /><br />
                        <button className='bttn my-3'>Login</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Home