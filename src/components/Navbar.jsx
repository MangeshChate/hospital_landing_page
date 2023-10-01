import React from 'react'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg p-3 ">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold fs-3 text-primary" href="#"style={{fontFamily:"'Indie Flower', cursive"}} >Dr Chopper</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav fs-5">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
