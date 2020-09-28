import React, { Component } from 'react';

class Registrasi extends Component {
  constructor(props){
    super(props)
    this.state={
      // judul: 'Contoh Judul',
      // contohPerubahan: 'Judul yang akan di ubah',
      valueInput: ''
    }
    this.ubahState=this.ubahState.bind(this)
  }

ubahState(e){
  e.preventDefault()
  // console.log(e.target.value)

  this.setState((state, props)=>({
    judul: 'ubah Melalui Input'
  }))


// perubahan state secara reguler, tidak boleh menggunakan state dan props
  // this.setStates({judul: 'Merubah Judul Secara reguler, data biasa'})


//Perubahan state secara Asynchronous di tulis dengan cara arrow function
// this.setState((state, props)=>({
//   judul: state.contohPerubahan
// }))


//Perubahan state secara Asynchronous di tulis dengan cara reguler function
//   this.setState(function(state, props){
//     return{
//     judul: 'Merubah Judul Asynchronous secara reguler function'
//   }
// });

}

  render() {
    return(
      <div>
        <h2>{this.state.judul}</h2>
        {
        // <button type="button" onClick={this}>Klik Untuk Berubah</button>
        // <input onChange={this.ubahStates} />
        }
        <p>{this.state.valueInput}</p>
        <input value={this.state.valueInput} onChange={(e)=>this.ubahStates(e)} />
      </div>
    )
  }
}
export default Registrasi;
