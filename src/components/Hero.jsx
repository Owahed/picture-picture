import HeroImg from "../Img/Fotor-free-online-photo-editor.webp";
const Hero = () => {
  return (
    <div>
      <div className="content-grid hero-section ">
        <div className="hero-content">
          <div className="hero-first">
            <h1>Online photo editor for everyone</h1>
            <p>
              Experience effortless photo editing with Fotor s free online photo
              editor. Edit, enhance, and <br /> create beautiful images online
              instantly.
            </p>
            {/* <div className="button">
              <button>Edit Photo for Free</button>
            </div> */}
            <div className="all-button ">
              <a className="ex" href="#">
                Edit photo for free
              </a>
            </div>
          </div>
          <div>
            <img src={HeroImg} alt="" />
          </div>
        </div>
        <div className="hero-option">
          <h6>Discover popular features</h6>
          <div className="hero-option-btn">
            <div className="hero-single-btn">
              <a href="#">
                <div className="JumpLink_jumpLink_contanier__icon__23Qei">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M21.7 17.1L16.6 12l5.1-5.1c.5-.5.5-1.4 0-1.9l-2.1-2.1c-.5-.5-1.4-.5-1.9 0L12.6 8 7.4 2.8c-.3-.3-.6-.4-1-.4s-.7.1-1 .4L3.3 4.9c-.5.5-.5 1.4 0 1.9L8.4 12l-3.3 3.3 4.1 4.1 3.3-3.3 5.2 5.2c.3.3.6.4 1 .4s.7-.1 1-.4l2.1-2.1c.5-.7.5-1.5-.1-2.1zM9.4 11L4.3 5.9l2.1-2.1 5.1 5.1L9.4 11zm9.2 9.2L13.5 15l2.1-2.1 5.2 5.2-2.2 2.1zm-15.7.5c-.2.6.3 1.1.9.9l4.6-1.5L4.3 16l-1.4 4.7z"
                      className="designIcon_svg__st0"
                    ></path>
                  </svg>
                </div>
                <span>Create a design</span>
              </a>
            </div>
            <div className="hero-single-btn">
              <a href="#">
                <div className="JumpLink_jumpLink_contanier__icon__23Qei">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M21.7 17.1L16.6 12l5.1-5.1c.5-.5.5-1.4 0-1.9l-2.1-2.1c-.5-.5-1.4-.5-1.9 0L12.6 8 7.4 2.8c-.3-.3-.6-.4-1-.4s-.7.1-1 .4L3.3 4.9c-.5.5-.5 1.4 0 1.9L8.4 12l-3.3 3.3 4.1 4.1 3.3-3.3 5.2 5.2c.3.3.6.4 1 .4s.7-.1 1-.4l2.1-2.1c.5-.7.5-1.5-.1-2.1zM9.4 11L4.3 5.9l2.1-2.1 5.1 5.1L9.4 11zm9.2 9.2L13.5 15l2.1-2.1 5.2 5.2-2.2 2.1zm-15.7.5c-.2.6.3 1.1.9.9l4.6-1.5L4.3 16l-1.4 4.7z"
                      className="designIcon_svg__st0"
                    ></path>
                  </svg>
                </div>
                <span>Create a design</span>
              </a>
            </div>
            <div className="hero-single-btn">
              <a href="#">
                <div className="JumpLink_jumpLink_contanier__icon__23Qei">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M21.7 17.1L16.6 12l5.1-5.1c.5-.5.5-1.4 0-1.9l-2.1-2.1c-.5-.5-1.4-.5-1.9 0L12.6 8 7.4 2.8c-.3-.3-.6-.4-1-.4s-.7.1-1 .4L3.3 4.9c-.5.5-.5 1.4 0 1.9L8.4 12l-3.3 3.3 4.1 4.1 3.3-3.3 5.2 5.2c.3.3.6.4 1 .4s.7-.1 1-.4l2.1-2.1c.5-.7.5-1.5-.1-2.1zM9.4 11L4.3 5.9l2.1-2.1 5.1 5.1L9.4 11zm9.2 9.2L13.5 15l2.1-2.1 5.2 5.2-2.2 2.1zm-15.7.5c-.2.6.3 1.1.9.9l4.6-1.5L4.3 16l-1.4 4.7z"
                      className="designIcon_svg__st0"
                    ></path>
                  </svg>
                </div>
                <span>Create a design</span>
              </a>
            </div>{" "}
            <div className="hero-single-btn">
              <a href="#">
                <div className="JumpLink_jumpLink_contanier__icon__23Qei">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M21.7 17.1L16.6 12l5.1-5.1c.5-.5.5-1.4 0-1.9l-2.1-2.1c-.5-.5-1.4-.5-1.9 0L12.6 8 7.4 2.8c-.3-.3-.6-.4-1-.4s-.7.1-1 .4L3.3 4.9c-.5.5-.5 1.4 0 1.9L8.4 12l-3.3 3.3 4.1 4.1 3.3-3.3 5.2 5.2c.3.3.6.4 1 .4s.7-.1 1-.4l2.1-2.1c.5-.7.5-1.5-.1-2.1zM9.4 11L4.3 5.9l2.1-2.1 5.1 5.1L9.4 11zm9.2 9.2L13.5 15l2.1-2.1 5.2 5.2-2.2 2.1zm-15.7.5c-.2.6.3 1.1.9.9l4.6-1.5L4.3 16l-1.4 4.7z"
                      className="designIcon_svg__st0"
                    ></path>
                  </svg>
                </div>
                <span>Create a design</span>
              </a>
            </div>{" "}
            <div className="hero-single-btn">
              <a href="#">
                <div className="JumpLink_jumpLink_contanier__icon__23Qei">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M21.7 17.1L16.6 12l5.1-5.1c.5-.5.5-1.4 0-1.9l-2.1-2.1c-.5-.5-1.4-.5-1.9 0L12.6 8 7.4 2.8c-.3-.3-.6-.4-1-.4s-.7.1-1 .4L3.3 4.9c-.5.5-.5 1.4 0 1.9L8.4 12l-3.3 3.3 4.1 4.1 3.3-3.3 5.2 5.2c.3.3.6.4 1 .4s.7-.1 1-.4l2.1-2.1c.5-.7.5-1.5-.1-2.1zM9.4 11L4.3 5.9l2.1-2.1 5.1 5.1L9.4 11zm9.2 9.2L13.5 15l2.1-2.1 5.2 5.2-2.2 2.1zm-15.7.5c-.2.6.3 1.1.9.9l4.6-1.5L4.3 16l-1.4 4.7z"
                      className="designIcon_svg__st0"
                    ></path>
                  </svg>
                </div>
                <span>Create a design</span>
              </a>
            </div>{" "}
            <div className="hero-single-btn">
              <a href="#">
                <div className="JumpLink_jumpLink_contanier__icon__23Qei">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M21.7 17.1L16.6 12l5.1-5.1c.5-.5.5-1.4 0-1.9l-2.1-2.1c-.5-.5-1.4-.5-1.9 0L12.6 8 7.4 2.8c-.3-.3-.6-.4-1-.4s-.7.1-1 .4L3.3 4.9c-.5.5-.5 1.4 0 1.9L8.4 12l-3.3 3.3 4.1 4.1 3.3-3.3 5.2 5.2c.3.3.6.4 1 .4s.7-.1 1-.4l2.1-2.1c.5-.7.5-1.5-.1-2.1zM9.4 11L4.3 5.9l2.1-2.1 5.1 5.1L9.4 11zm9.2 9.2L13.5 15l2.1-2.1 5.2 5.2-2.2 2.1zm-15.7.5c-.2.6.3 1.1.9.9l4.6-1.5L4.3 16l-1.4 4.7z"
                      className="designIcon_svg__st0"
                    ></path>
                  </svg>
                </div>
                <span>Create a design</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
