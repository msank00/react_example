import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Introduction</h2>
        <p>In this project a neural network is trained to 
        translate from French to English. This is made possible by the 
        simple but powerful idea of the sequence to sequence network, 
        in which two recurrent neural networks work together to transform one 
        sequence to another. An encoder network condenses an input sequence into a vector, 
        and a decoder network unfolds that vector into a new sequence.</p>
        <img src="https://pytorch.org/tutorials/_images/seq2seq.png" alt="seq2seq network"></img>
       
        <p>To improve upon this model we’ll use an attention mechanism, which lets the 
        decoder learn to focus over a specific range of the input sequence.</p>
      
        <p>
          Once the model has been trained using Pytorch, a REST api is created 
          for training and prediction. Finally this simple UI is built on top to call the 
          training and prediction API and display the result. 
        </p>

        <h3>Application Architecture</h3>
        <img src="https://github.com/msank00/api_seq2seq/raw/master/98_temp/architecture.png" alt="eq2seq network"></img>
      </div>
    );
  }
}
 
export default Home;