import Link from 'next/link';

const Header = () => {
  return (
    <header className='p-8 h-16 flex justify-between items-center'>
      <h1>This is the header</h1>
      <Link href='/users'>Users</Link>
    </header>
  );
};

export default Header;
