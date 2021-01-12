import './Cards.css';

function Cards () {
  return (
    <div>
      <div className="hero-section">
        <div className="card-grid">
          <a className="card" href="#">
            <div className="card__background" id="img1"></div>
          <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Altimax</h3>
            </div>
          </a>
          <a className="card" href="#">
            <div className="card__background" id="img2"></div>
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Altimax</h3>
            </div>
          </a>
          <a className="card" href="#">
            <div className="card__background" id="img3"></div>
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Altimax</h3>
            </div>
          </a>
          <a className="card" href="#">
            <div className="card__background" id="img4"></div>
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Altimax</h3>
            </div>
          </a>
          <a className="card" href="#">
            <div className="card__background" id="img5"></div>
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Altimax</h3>
            </div>
          </a>
          <a className="card" href="#">
            <div className="card__background" id="img6"></div>
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Altimax</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Cards;
