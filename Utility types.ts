type User = 
{
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

type UpdateUser = Partial<User>;

let nextUserID = 1;

const users: User[] = 
[
    { id: nextUserID++, username: "john_doe", role: "member"},
    { id: nextUserID++, username: "jane_smith", role: "member"},
    { id: nextUserID++, username: "john_wick", role: "member"},
    { id: nextUserID++, username: "charlie_brown", role: "member"},
]

function updateUser(id: number, updates: UpdateUser): void
{
    const user = users.find(user => user.id === id);
    if(!user)
    {
        console.error("User not found");
        return;
    }

    Object.assign(user, updates);
}

function addNewUser(newUser: Omit<User, "id">): User
{
    const user: User = 
    {
        id: nextUserID++,
        username: newUser.username,
        role: newUser.role
    } 
    users.push(user);
    return user;
}


updateUser(1, { username: "new_john"});
updateUser(4, { role: "admin"});
addNewUser({ username: "new_user_john", role: "member"});