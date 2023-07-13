import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className='bg-primary text-4xl p-4 flex justify-between items-center'>
      <div>
        <img src={logo} alt='Company logo' className='' />
      </div>
      <ul className='flex justify-center space-x-4'>
        <li>
          <a href='/Home' className='text-white-1 hover:text-white-0'>
            Home
          </a>
        </li>
        <li>
          <a href='/About' className='text-white-1 hover:text-white-0'>
            About
          </a>
        </li>
        <li>
          <a href='/Events' className='text-white-1 hover:text-white-0'>
            Events
          </a>
        </li>
        <li>
          <a href='/Contact' className='text-white-1 hover:text-white-0'>
            Contact
          </a>
        </li>
      </ul>
      <span>
        <a
          href='/login'
          className='bg-secondary rounded-lg text-white-1 hover:text-white-0'
        >
          Sign In
        </a>
      </span>
    </nav>
  );
};

export default Navbar;
