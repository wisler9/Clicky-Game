import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import images from  "./images.json";
import Body from "./components/Body";
import Footer from "./components/Footer";

let correctGuesses = 0;
let topScore = 0;
let clickMessage = "Click an image to begin!";


function shuffle(array){
  array.sort(() => Math.random() - 0.5);
}

class App extends React.Component {

  state = {
    images,
    clickMessage,
    topScore,
    correctGuesses
  }

  handleClick =(id) => {
    const images = this.state.images;

    const clickedImage = images.filter((image) => image.id === id);

    if (clickedImage[0].clicked){
      correctGuesses = 0;
      clickMessage = "You guessed incorrectly!";

      for (let i = 0; i < images.length; i++){
        images[i].clicked = false;
      }

      this.setState({clickMessage});
      this.setState({correctGuesses});
      this.setState({images});
    }else if (correctGuesses < 11){
      clickedImage[0].clicked = true;

      correctGuesses++;

      clickMessage = "You guessed correctly!";

      if (correctGuesses > topScore){
        topScore = correctGuesses;
        this.setState({topScore});
      }

      // randomly shuffle array?
      shuffle(images);

      this.setState({images});
      this.setState({correctGuesses});
      this.setState({clickMessage});
    }else{
      clickedImage[0].clicked = true;

      correctGuesses = 0;
      clickMessage = "You WON";
      topScore = 12;
      this.setState({topScore});

      for (let i = 0; i < images.length; i++){
        images[i].clicked = false;
      }

      //randomly shuffle array?
      shuffle(images);

      this.setState({images});
      this.setState({correctGuesses});
      this.setState({clickMessage});
    }
  }

  render(){
    const imgList = this.state.images.map(image => (
      <Body
      id={image.id}
      image={image.image}
      key={image.id}
      handleClick = {this.handleClick}
      />
    ))
    return(
      <div>
      <div className="wrapper">
        <Navbar clickMessage={this.state.clickMessage} topScore={this.state.topScore} correctGuesses={this.state.correctGuesses}/>
        <div className="container">
          <div class="row">
            {imgList}
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
      </div>
    )}
}

export default App;
