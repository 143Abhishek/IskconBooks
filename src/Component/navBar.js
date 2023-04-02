import '../App.css';

export default function navBar(props) {

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className={`navbar-brand`} href="/">Iskcon Books</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item pe-5">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item pe-5">
                                <a className="nav-link active" aria-current="page" href="/Books">Books</a>
                            </li>
                            <li className="nav-item pe-5">
                                <a className="nav-link active" aria-current="page" href="/About">About</a>
                            </li>
                            <li className="nav-item pe-5">
                                <a className="nav-link active" aria-current="page" href="https://forms.gle/MEy3VuT8cqxXDjKw6">Contact</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.toogleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${props.text}`} for="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
