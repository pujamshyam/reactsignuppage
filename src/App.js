import "./styles.css";
import imag from "../src/01.png";

export default function App() {
  return (
    <div className="wrapp">
      <div className="App">
        <div className="first">
          <div className="firstfirst">
            <div className="card">
              <h2 className="tex">Sign Up</h2>
              <p className="par">Create your Webkit account.</p>

              <form>
                <div className="roww">
                  <div className="oneone">
                    <div className="onetwo">
                      <label></label>
                      <input
                        type="text"
                        className="firstname"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="oneone">
                    <div className="onetwo">
                      <input
                        type="text"
                        className="firstname"
                        placeholder="Last Name"
                      />
                      <label></label>
                    </div>
                  </div>
                  <div className="oneone">
                    <div className="onetwo">
                      <input
                        type="email"
                        className="firstname"
                        placeholder="Email"
                      />
                      <label></label>
                    </div>
                  </div>
                  <div className="oneone">
                    <div className="onetwo">
                      <input
                        type="phonenumber"
                        className="firstname"
                        placeholder="Phone No."
                      />
                      <label></label>
                    </div>
                  </div>
                  <div className="oneone">
                    <div className="onetwo">
                      <input
                        type="password"
                        className="firstname"
                        placeholder="Password"
                      />
                      <label></label>
                    </div>
                  </div>
                  <div className="oneone">
                    <div className="onetwo">
                      <input
                        type="password"
                        className="firstname"
                        placeholder="Confirm Password"
                      />
                      <label></label>
                    </div>
                  </div>
                  <p>
                    <input className="cbox" type="checkbox" />
                    <label className="lab">I agree with the terms of use</label>
                  </p>
                </div>
                <button>Sign Up</button>
                <p>
                  Already have an Account <a href="#">SignIn</a>
                </p>
              </form>
            </div>
          </div>
          <div className="firstsecond">
            <img src={imag} className="imaag" alt="loading" />
          </div>
        </div>
      </div>
    </div>
  );
}
