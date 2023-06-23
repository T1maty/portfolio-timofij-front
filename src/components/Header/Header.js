
const Header = () => {
    return(<header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Timofey</em></strong><br />
                a full-stack developer
            </h1>
            <div className="header__text">
                <p>with passion for learning,creating, development.</p>
            </div>
            <a href="/"  className="btn">My Github Link</a>
            <a href="/"  className="btn2">GitHub Link in my buddy</a>
        </div>
    </header>);
}

export default  Header;