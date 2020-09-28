import React, { Component } from 'react';

class Registrasi extends Component {
  constructor(props){
    super(props)
    this.state={
      valueInput: '',
      valueInput2: '',
      valueInput3: '',
      valueInput4: ''

    }
    this.ubahState=this.ubahState.bind(this)
    this.ubahState2=this.ubahState2.bind(this)
    this.ubahState3=this.ubahState3.bind(this)
    this.ubahState4=this.ubahState4.bind(this)
  }

ubahState(e){
  e.preventDefault()
  this.setState({valueInput: e.target.value})
}

ubahState2(e){
  e.preventDefault()
  this.setState({valueInput2: e.target.value})
}

ubahState3(e){
  e.preventDefault()
  this.setState({valueInput3: e.target.value})
}

ubahState4(e){
  e.preventDefault()
  this.setState({valueInput4: e.target.value})
}

  render() {
    return(
      <div>
        <h5>Contoh 1</h5>
        <p>{this.state.valueInput}</p>
        <input value={this.state.valueInput} onChange={(e)=>this.ubahState(e)} />
        <h5>==========================</h5>

        <h5>Contoh 2</h5>
        <p>{this.state.valueInput2}</p>
        <input value={this.state.valueInput2} onChange={(e)=>this.ubahState2(e)} />
        <h5>==========================</h5>

        <h5>Contoh 3</h5>
        <p>{this.state.valueInput3}</p>
        <input value={this.state.valueInput3} onChange={(e)=>this.ubahState3(e)} />
        <h5>==========================</h5>

        <h5>Contoh 4</h5>
        <p>{this.state.valueInput4}</p>
        <input value={this.state.valueInput4} onChange={(e)=>this.ubahState4(e)} />
        <h5>==========================</h5>
      </div>
    )
  }
}
export default Registrasi;
