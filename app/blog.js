const Header = (props) => {
    return (<React.Fragment>
        <h3></h3>
    </React.Fragment>
    )
}

const UserInfo = (props) => {
    return (<React.Fragment>
        <img src={props.img} />
        <p>{props.name}</p>
        <p>{props.email}</p>
        <p>{props.dateOfBirth}</p>
    </React.Fragment>
    )
}

const UserList = (props) => {
    return (
        <div>
            {props.users.map(user => <UserInfo user={user} />)}
        </div>
    )
}


const Main = () => {
    return (
        <main>
            <UserList users={props.data} />
        </main>
    )
}

const Footer = () => {
    const time = new Date().getFullYear;
    return (

        <footer>
            <p>&copy{time}</p>
        </footer>
    )
}
const UserListData = [


]

const myAppp = () => {
    return (
        <React.Fragment>

            <Header />
            <Main user={} />
            <Footer />
        </React.Fragment>

    )
}
