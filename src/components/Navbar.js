import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/userActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartstate = useSelector((state) => state.cartReducer);

  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;

  console.log(currentUser)

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <div className="bg">
      <nav className="navbar navbar-expand-lg shadow-lg p-2 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/homepage">
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
            {currentUser ? (
              <div class="dropdown mt-2">
                <a
                style={{color:"black", textDecoration:"none"}}
                  class="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                 {currentUser.name}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item m-1" href="/orders">
                    Orders
                  </a>
                  <a className="dropdown-item" href="#" onClick={handleLogout}>
                    <li>Logout</li>
                  </a>
                
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart{cartstate.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// {
//   currentUser ? (<li>{currentUser.name}</li>) : (
//     <li className="nav-item">
//     <a className="nav-link" href="/login">
//       Login
//     </a>
//   </li>
//   )
// }
