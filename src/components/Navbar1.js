const Navbar1 = () => {
   
    return (
      <div className="bg">
        <nav className="navbar navbar-expand-lg shadow-lg p-2  bg-white rounded  caro">
          <a className="navbar-brand" href="/">
            <img
              src="https://www.pizzahut.co.in/order/images/logos/logo_wide@x2.38f9109e24d22d58d048837b27f54390.png"
              alt=""
              className="imglogo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              
  
             
            </ul>
          </div>
        </nav>
      </div>
    );
  };
  
  export default Navbar1;
  
  // {
  //   currentUser ? (<li>{currentUser.name}</li>) : (
  //     <li className="nav-item">
  //     <a className="nav-link" href="/login">
  //       Login
  //     </a>
  //   </li>
  //   )
  // }
  