import Link from 'next/link';

const UsersPage = async () => {
  const response = await fetch('https://dummyjson.com/users');
  const { users } = await response.json();
  return (
    <div>
      <h3>Users Page</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id} className='m-3'>
            <Link href={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
