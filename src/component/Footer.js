import React, { Component } from 'react';

class Footer extends Component{

  constructor(props){
    super(props)
    this.state={
    pesanDariState: 'ini pesan dari state awal'
    }
      this.ubahDataState=this.ubahDataState.bind(this);
  }

ubahDataState(e){
  e.preventDefault()
  //perintah untuk mengubah value/data/isi yang berada di dalam state
  this.setState({pesanDariState: "Data Akan Berubah"})
  // alert('testing ubah')
}

  render(){
    return(
      <div>
      <p>{this.props.pesanDariProps}</p>
      <p>{this.state.pesanDariState}</p>

      <a href="/" onClick={(e)=>this.ubahDataState(e)} >Ubah data</a>
      </div>
    )
  }
}
export default Footer;
