import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '',
      output: '',
      err: ''
    }
    
  }
  update( e ){
    let code = e.target.value;
    try {
      this.setState({
        output: window.Prism.highlight(
          code, window.Prism.languages.java),
        err: ''
      })
    }
    catch (err) {
      this.setState({err: err.message});
    }
  }
  render() {
    return (
      <div>
        <div className='container'>
          <TextareaCode placeholder={'Digite seu código aqui'} onTextChange={this.update.bind(this)}/>
          <HighlightedCode output={this.state.output} />
        </div>
      </div>
    )
  }
}

const HighlightedCode = (props) => 
  <pre>
    <code dangerouslySetInnerHTML={ {__html: props.output} }></code>
  </pre>

const TextareaCode = (props) => {
  function handleChange(e) {
    props.onTextChange(e);
  }
  return <textarea placeholder={props.placeholder} onChange={handleChange}/>
}

export default App;