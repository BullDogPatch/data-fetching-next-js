import Link from 'next/link';

const UsersPage = async ({ searchParams }) => {
  const query = await searchParams;
  console.log(query);
  const response = await fetch('https://dummyjson.com/users');
  const { users } = await response.json();

  if (query.sort === 'desc') {
    users.sort((a, b) => b.firstName.localeCompare(a.firstName));
  } else if (query.sort === 'asc') {
    users.sort((a, b) => a.firstName.localeCompare(b.firstName));
  }

  return (
    <div>
      <h3>Users Page</h3>
      <Link href='users?sort=asc'>A-Z</Link>
      <Link href='users?sort=desc'>Z-A</Link>
      <ul>
        {users.map((user) => (
          <li key={user.id} className='m-3'>
            <Link
              href={`/users/${user.id}`}
              className='px-4 py-2 rounded-md hover:bg-sky-700'
            >
              {user.username}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
