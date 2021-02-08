import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Home.css';


class Home extends React.Component {
    render() {
        return (
            <div className='parent-div'>
                <div className='first-div'>
                </div>
                <div className='second-div'>
                    <Link to='/gallery'>
                        <button className='step-button'>Step Inside</button>
                    </Link>
                </div>
                <div className='third-div'>
                    <h1 className='third-div-title'>THE HARVARD INSPIRATION ARCHIVES</h1>
                    <p>Searching for inspiration? Carefully step down into the archives of Harvard's Art Museum to see historical images and objects curated just for you.</p>
                    <p>Be warned, the collection is unique and will not be the same if you ever return.</p>
                    <p>If you're inclined, a further challenge waits for you down in the archive.</p>
                    <p>Best of luck.</p>
                    <p>-The Curator</p>
                    <Link to='/gallery'>
                        <button className='enter-button'>Enter</button>
                    </Link>
                </div>
                <div className='fourth-div'>
                    <h2 className='fourth-div-number'>01</h2>
                </div>
            </div>)
    }
}
export default Home;