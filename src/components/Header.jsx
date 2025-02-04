import Link from 'next/link';

const Header = () => {
  return (
    <header className='p-8 h-16 flex justify-between items-center'>
      <Link href='/'>
        <h4>LOGO</h4>
      </Link>
      <h1>This is the heading</h1>
      <div>
        <Link href='/users' className='m-2 hover:underline'>
          Users
        </Link>
        <Link href='/about' className='m-2 hover:underline'>
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
