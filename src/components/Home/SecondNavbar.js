import './SecondNavbar.css';

function SecondNavbar () {
  return (
    <div>
        <ul className="ch-grid">
          <li>
            <div className="ch-item ch-img-1">
              <div className="ch-info">
                <h3>Le parc</h3>
                <p><a href="http://drbl.in/eOPF">Plus d'infos</a></p>
              </div>
            </div>
          </li>
        <li>
          <div className="ch-item ch-img-2">
            <div className="ch-info">
              <h3>Organisez votre journée</h3>
              <p><a href="http://drbl.in/eKMi">Plus d'infos</a></p>
            </div>
            </div>
          </li>
        <li>
          <div className="ch-item ch-img-3">
            <div className="ch-info">
              <h3>Nos événements</h3>
              <p><a href="http://drbl.in/ekhp">Plus d'infos</a></p>
            </div>
          </div>
        </li>
        <li>
          <div className="ch-item ch-img-4">
            <div className="ch-info">
              <h3>Nos offres</h3>
              <p><a href="http://drbl.in/eOPF">Plus d'infos</a></p>
            </div>
          </div>
        </li>
        </ul>
    </div>
  );
}

export default SecondNavbar;
