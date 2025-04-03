const Contacts = () => {
    return (<main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Czech Republic, Prague</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram </h2>
                        <p><a href="https://t.me/termsthm">@termsthm</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:ftomi809@gmail.com">ftomi809@gmail.com</a></p>
                    </li>
                </ul>

            </div>
        </main>
    );
}

export  default  Contacts;