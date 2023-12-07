import logo1 from "../Img/step-1.webp";
import { BsArrowRightCircleFill } from "react-icons/bs";

const EditDetails = () => {
  return (
    <div className="content-grid">
      <div className="edit-header">
        <h2>How to edit photos with Fotor's online photo editor?</h2>
        <p>
          With Fotor's free image editor, you can edit photo online like a
          professional in just 3 simple steps.
        </p>
      </div>
      {/* card--------- */}
      <div className="edit-det-card">
        <div className="edit-card">
          <div className="edit-border"></div>
          <div className="card-one">
            <div>
              <img src={logo1} alt="" />
              <h3>1. Upload a photo</h3>
              <p>
                Upload or drag and drop a photo to our online photo editor to
                start editing.
              </p>
            </div>
          </div>
          <div className="card-two">
            <div className="edit-border"></div>
            <div className="card-two-draw">
              <h3>1. Upload a photo</h3>
              <p>
                Upload or drag and drop a photo to our online photo editor to
                start editing.
              </p>
              <BsArrowRightCircleFill size="50px" />
            </div>
          </div>
        </div>

        <div className="edit-card">
          <div className="edit-border edit-border-color-two"></div>
          <div className="card-one">
            <div>
              <img src={logo1} alt="" />
              <h3>1. Upload a photo</h3>
              <p>
                Upload or drag and drop a photo to our online photo editor to
                start editing.
              </p>
            </div>
          </div>
          <div className="card-two">
            <div className="edit-border edit-border-color-two"></div>
            <div className="card-two-draw">
              <h3>1. Upload a photo</h3>
              <p>
                Upload or drag and drop a photo to our online photo editor to
                start editing.
              </p>
              <BsArrowRightCircleFill size="50px" />
            </div>
          </div>
        </div>
        <div className="edit-card">
          <div className="edit-border edit-border-color-three"></div>
          <div className="card-one">
            <div>
              <img src={logo1} alt="" />
              <h3>1. Upload a photo</h3>
              <p>
                Upload or drag and drop a photo to our online photo editor to
                start editing.
              </p>
            </div>
          </div>
          <div className="card-two">
            <div className="edit-border edit-border-color-three"></div>

            <div className="card-two-draw">
              <h3>1. Upload a photo</h3>
              <p>
                Upload or drag and drop a photo to our online photo editor to
                start editing.
              </p>
              <BsArrowRightCircleFill size="50px" />
            </div>
          </div>
        </div>
      </div>
      {/* banner------------- */}
      <div></div>
    </div>
  );
};

export default EditDetails;
