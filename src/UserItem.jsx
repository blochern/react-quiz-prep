// UserItem component
const UserItem = ({ user }) => {
    // callback function for click
    const handleClick = (e) => {
        console.log("id: " + e.currentTarget.id);
    }

    // return a div that has a click event handler and unique id
    return <div id={user.id} onClick={handleClick}>
        <h1>{user.name}</h1>
        <p>{"ID: " + user.id + "  Email: " + user.email}</p>
    </div>
}

export default UserItem;