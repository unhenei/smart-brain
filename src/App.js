import React, { Component } from 'react';
import './App.css';
import ParticlesBg from 'particles-bg';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation'
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import 'tachyons';
import toast, {Toaster} from 'react-hot-toast'


class App extends Component {
  constructor(){
    super()
    this.state={
      inputUrl: '',
      img:'',
      box: [],
      route: 'signin',
      user: {
        id:'',
        name:'',
        email:'',
        entries: 0,
        joined: ''
      }
    }
  }


  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  onInputChange = (event) => {
    this.setState({inputUrl: event.target.value})
  }

  onImageSubmit = () => {
    this.setState({img: this.state.inputUrl})
    if(this.state.inputUrl.length === 0){
      this.setState({box:[]})
      return
    }

    fetch('https://smart-brain-server.herokuapp.com/imageUrl', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            inputUrl: this.state.inputUrl
          })
       })
      .then(response => response.json())
      .then(result => {
        fetch("https://api.clarifai.com/v2/models/face-detection/outputs", result)
        .then(response => response.json())
        .then(result => {
          if(result){
            fetch('https://smart-brain-server.herokuapp.com/image',{
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                id: this.state.user.id
              })
            })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user,{entries: count}))
            })
            .catch(err => {
              console.log('fetch entries error', err)
              toast.error('Something went wrong. Please try again or submit another image.')
            })
          }
          return result
        })
        .then(result => this.faceDetectionBox(result))
        .catch(err => {
          console.log('fetch entries error', err)
          toast.error('Something went wrong. Please try again or submit another image.')
        })
      })
      .catch(err => {
        console.log('fetch image error', err);
        toast.error('Something went wrong. Please try again or submit another image.')
        this.setState({img:''});  // app wont break due to unable process img
      })
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
    this.setState({box: boxPosition})
  }

  onRouteChange = (props) => {
    this.setState({
      route: props,
      inputUrl: '',
      img: '',
      box: []
    })
  }

  render(){
    return (
      <div>
        <ParticlesBg num={300} type="cobweb" bg={true} />
        <div><Toaster /></div>
        <Navigation onRouteChange={this.onRouteChange} route={this.state.route} />
        <Logo />
        {(this.state.route === 'signin')?
          <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />:
        (this.state.route === 'register')?
          <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />:
        (this.state.route === 'profile')?
          <Profile user = {this.state.user} onRouteChange={this.onRouteChange} loadUser={this.loadUser} loadPopup={this.loadPopup} />:
          <div>
            <Rank user={this.state.user.name} entries={this.state.user.entries} />
            <ImageLinkForm onInputChange={this.onInputChange} onImageSubmit={this.onImageSubmit} />
            <FaceRecognition imgUrl={this.state.img} box={this.state.box} />
          </div>
        }
      </div>
    )   
  }
}

export default App;
