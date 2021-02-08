import React from 'react';
import "../Styles/letter.css"

class Letter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prompt: ["blue", "night", "diagonal", "time", "drama", "light", "continuity", "ragged", "line", "contrast", "sharp", "dimension", "angle"],
            choice: '',
            seal: true,
            lid: 'letter-top-triangle',
            letter: 'inside-letter'
        }
    }

    open = () => {
        if (this.state.lid === 'letter-top-triangle') {
            this.setState({ seal: false });
            this.setState({ lid: 'letter-top-triangle-open' })
            this.setState({ letter: 'inside-letter-open' })
        }
    }

    componentDidMount() {
        let choices = (this.state.prompt[Math.floor(Math.random() * (this.state.prompt.length - 1))]);
        this.setState({ choice: choices });
    }

    letterStatus = () => {
        return (
            <div className='letter-closed-parent-div'>
                <div className={'seal' + this.state.seal} onClick={() => {
                    if
                        (this.state.lid === 'letter-top-triangle') {
                        this.setState({ seal: false });
                        this.setState({ lid: 'letter-top-triangle-open' })
                        this.setState({ letter: 'inside-letter-open' })
                    } else {
                        this.setState({ letter: 'inside-letter' })
                        this.setState({ lid: 'letter-top-triangle' })
                    }
                }}>
                </div>
                <div className={this.state.lid}></div>
                <div className='envelope'></div>
                <div className={this.state.letter}>
                    <p className="challenge-p">Your challenge is to create an original work with at least two of these images as inspiration,
                        and the alteration or addition of {this.state.choice}</p>
                </div>
                <div className='letter-back'></div>
            </div >
        )
    }

    render() {
        return (
            <div className="master-return-letter">
                {this.letterStatus()}
            </div>
        )
    }
}

export default Letter;