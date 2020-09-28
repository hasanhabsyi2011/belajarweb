// import React, { Component } from 'react';
//
// class Header extends Component{
//   constructor(props){
//     super(props)
//     this.state={}
//     this.handlePesanHeader=this.handlePesanHeader.bind(this);
//     this.handlePesanHeader=this.pesankhusus.bind(this);
//
//   }
//
//   handlePesanHeader(){
//     alert('Pesan dari Header')
//   }
//
//   handlePesanHeader2(){
//     alert('Pesan dari Header2')
//   }
//
//   render(){
//     return(
//       <div>
//       <a href="/" onClick={this.handlePesanHeader}>Klik Header</a>
//       <br/>
//       <a href="/" onClick={this.pesankhusus}>Klik Header2</a>
//       </div>
//     )
//   }
//
// }
// export default Header;
import React, { Component } from 'react';

class Header extends Component{

  constructor(props){
    super(props)
    this.state={
    pesanKhusus: 'Pesan khusus pakai this.state.pesanKhusus'
    }
    this.handlePesanKhusus=this.handlePesanKhusus.bind(this);
  }

  handlePesanKhusus(valueke1, ke2, e){
    // e di bawah dan di atas ini mencegah reload
      e.preventDefault()

       alert(this.state.pesanKhusus)
       alert(valueke1)
       alert(ke2)

     }

  render(){
    return(
      <div>
      <p>{this.state.pesanKhusus}</p>
      <a href="/" onClick={this.handlePesanKhusus}>Klik Header Pesan Khusus</a>
      <br/>
      <a href="/" onClick={(e)=>this.handlePesanKhusus("dari render Kelas", "Pesan 2",e)}>Klik Header</a>
      </div>
    )
  }

}
export default Header;
