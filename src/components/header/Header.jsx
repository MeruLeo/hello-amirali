const Header = () => {
  const headerLinks = [
    { title: "خانه", icon: <i className="fi fi-sr-house-chimney"></i> },
    { title: "درباره من", icon: <i className="fi fi-sr-id-card-clip-alt"></i> },
    { title: "ارتباط", icon: <i className="fi fi-sr-phone-call"></i> },
    { title: "سفارش کار", icon: <i className="fi fi-sr-display-code"></i> },
  ];

  const HeaderLink = ({ title, icon }) => {
    return (
      <li>
        <a
          href="#"
          className="text-light-text p-2 flex flex-col items-center justify-center rounded-lg transition-all duration-200 hover:bg-active-link-text"
        >
          {icon}
          {title}
        </a>
      </li>
    );
  };

  return (
    <>
      <header className="text-white flex z-20 justify-center items-center backdrop-blur-2xl fixed w-full p-3 hidden sm:flex">
        <nav>
          <ul className="flex justify-between w-80 p-0 m-0">
            {headerLinks.map((headerLink, index) => (
              <HeaderLink key={index} title={headerLink.title} />
            ))}
          </ul>
        </nav>
      </header>

      {/* first header */}
      <header className="flex z-20 justify-center backdrop-blur-2xl items-center sm:bg-dark-header fixed w-full py-2 sm:hidden">
        <img
          src="/src/assets/imgs/A-white.png"
          className="w-12 h-12"
          alt="Amirali logo"
        />
      </header>

      {/* mobile - bottom menu */}
      <nav className="flex bottom-0 z-20 justify-center backdrop-blur-2xl items-center sm:bg-dark-header fixed w-full py-2 sm:hidden">
        <ul className="flex justify-between w-80 p-0 m-0">
          {headerLinks.map((headerLink, index) => (
            <HeaderLink
              key={index}
              title={headerLink.title}
              icon={headerLink.icon}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
