import React, { Component } from 'react';
import './App.css';
import ParticlesBg from 'particles-bg';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation'
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import 'tachyons';

class App extends Component {
  constructor(){
    super()
    this.state={
      user: '',
      ranking: '',
      inputUrl: '',
      img:'',
      box: []
    }
  }

  onInputChange = (event) => {
    this.setState({inputUrl: event.target.value})
  }

  submitImage = () => {
    this.setState({img: this.state.inputUrl})
    if(this.state.inputUrl.length === 0){
      this.setState({box:''})
      return
    }

    const requestOptions = {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            // 'Key ' + PAT
            "Authorization": "Key 39d74df2b88749ac87f80a2c39754dc3"
        },
        body: JSON.stringify({
          "user_app_id": {
              "user_id": "pol7sw0nfrd9",
              "app_id": "smartbrain"
          },
          "inputs": [
              {
                  "data": {
                      "image": {
                          "url": this.state.inputUrl
                      }
                  }
              }
          ]
        })
    }

    fetch("https://api.clarifai.com/v2/models/face-detection/outputs", requestOptions)
        .then(response => response.json())
        .then(result => this.faceDetectionBox(result))
        .then(result => this.setState({box: result}))
        .catch(error => {
          console.log('error', error);
          this.setState({img:''});
        });
  }

  faceDetectionBox = (data) => {
    const image = document.getElementById('imgDisplay');
    const width = image.width;
    const height = image.height;
    const boxInfo = data.outputs[0].data.regions.map( region => {
      return region.region_info.bounding_box
    });
    const boxPosition = boxInfo.map(info => {
      let {top_row, left_col, bottom_row, right_col} = info;
      const box = {
        top: top_row * height,
        left: left_col * width,
        right: (1-right_col) * width,
        bottom: (1-bottom_row) * height,
        border: '3px solid #D6E4E5' // add border style to box, no box no border
      }
      return box
    })
    return boxPosition
  }

  render(){
    return (
      <div>
        <ParticlesBg num={300} type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} submitImage={this.submitImage} />
        <FaceRecognition imgUrl={this.state.img} box={this.state.box} />
      </div>
    );    
  }

}

export default App;
