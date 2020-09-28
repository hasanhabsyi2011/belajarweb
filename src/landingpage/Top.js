import React from 'react';

const Top = () =>{

  const handlePesan = () =>{
    alert('Pesan dari Top')
  }

  // function handlePesan1(){
  //   alert('Hasan Habsyi')
  // }

  function handlePesan1(satu, dua, e){
// e di bawah dan di atas ini mencegah reload
    e.preventDefault()

    alert(satu)
    alert(dua)
  }

  return(
    <div>
      <a href="/" onClick={handlePesan} >Halaman Top</a>
      <br/>
      <a href="/" onClick={(e)=>handlePesan1("pesan pertama", "pesan kedua", e)} >Halaman Top2</a>
    </div>
  )
}

export default Top;
