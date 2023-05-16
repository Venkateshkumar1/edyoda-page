import React from 'react';

const Footer = () => {
  return (
   
    <nav class="navbar navbar-expand-lg bg-body-tertiary m-2">
        <div class="container-fluid" >
         <a class="navbar-brand text-primary" href=" "><b>EDYODA</b></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href=" ">Action</a></li>
                  <li><a class="dropdown-item" href=" ">Another action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href=" ">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Programs
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href=" ">Action</a></li>
                  <li><a class="dropdown-item" href=" ">Another action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href=" ">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search m-2" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <p className="log m-2">Log In</p>
            <button class="btn btn-primary m-2" type="submit">Join Now</button>

          </div>
        </div>
      </nav>
  )
};
export default Footer;