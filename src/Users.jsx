// User component will generate UserItem components, so we need to import that component
import UserItem from "./UserItem";

const Users = ({ users }) => {
    // returns a div
    return (
        <div>
            {/* map over the array "users" */}
            {users.map((user) =>
                // return a UserItem component with a user object and a key set to user.id
                <UserItem 
                    user={user}
                    key={user.id}
                />
            )}
        </div>
    );
}

export default Users;