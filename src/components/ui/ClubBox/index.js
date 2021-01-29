import './style.css';

function ClubBox(props) {
    return (
        <div className="ClubBox">
            <div className="col-12">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-3 item" style={{backgroundColor: '#df523c'}}>
                        <div className="row">
                            <div
                                className="col-5 club-badge"
                                style={{ backgroundImage: `url(https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e5.png)` }}
                            >

                            </div>

                            <div className="col-7 club-name d-flex align-items-center justify-content-center">
                                <span>Liverpool</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 item mx-4" style={{backgroundColor: '#03529f'}}>
                        <div className="row">
                            <div
                                className="col-5 club-badge"
                                style={{ backgroundImage: `url(https://logodownload.org/wp-content/uploads/2016/03/real-madrid-logo-escudo-1.png)` }}
                            >

                            </div>

                            <div className="col-7 club-name d-flex align-items-center justify-content-center">
                                <span>Real Madrid</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 item" style={{backgroundColor: '#a3344b'}}>
                        <div className="row">
                            <div
                                className="col-5 club-badge"
                                style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/FCBarcelona.svg/473px-FCBarcelona.svg.png)` }}
                            >

                            </div>

                            <div className="col-7 club-name d-flex align-items-center justify-content-center">
                                <span>Barcelona</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClubBox;