import React from 'react';
import './Styles/Artrefactor.css';
import Axios from 'axios';
import Letter from './Components/Letter'
import Zoom from './Components/Zoom'

class Art extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isloaded: false,
      whichClick: "",
      displayZoom: false,
    };
  }

  componentDidMount() {
    Axios.get('https://api.harvardartmuseums.org/image', {
      params: {
        apikey: 'b21678a9-dae3-4cdc-a3dd-e1ff27fc524b',
        page: 1,
        sort: 'random'
      }
    }
    )
      .then(res => {
        this.setState({ items: res.data.records, isloaded: true })
      }
      ).catch(err => console.log(err));
  }

  turnOff = () => {
    this.setState({ displayZoom: false })
  }

  checkInfo = () => {
    if (this.state.isloaded === true && this.state.displayZoom === true) {
      return <Zoom display={this.state.whichClick} turnOff={this.turnOff} />
    }
  }

  render() {
    return (
      <div className="fullspace-master">
        <div className="master">

          <div className="plaque-wording-div">
            <div className="plaque-stand-div">
              <h1 className="courtesy-h1">Courtesy of the Harvard Archives</h1>
              <p className="be-kind-p">Remember to be courteous and respectful of the art and artists displayed here. </p>
              <p className="many-untitled-p">Many of the works featured are unfortunately unknown and untitled</p>
            </div>
            <div className="letter-box-div"><Letter /></div>
          </div>

          <div className="art" >
            {this.state.items.map(item => {
              return <div className='art-frame' key={item.fileid + "div"}>
                <img onClick={() => {
                  this.setState({ whichClick: item, displayZoom: true })
                }} src={item.baseimageurl} alt={item.fileid} key={item.fileid} />
              </div>
            })}
          </div>

          <div className='floor' />
        </div>
        <div className='info'>
          {this.checkInfo()}
        </div>
      </div>
    );
  }
}
export default Art;
