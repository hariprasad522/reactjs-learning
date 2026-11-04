const Header = () => {
  return (
    <header className="p-3 bg-body fg-body" data-bs-theme="dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center lg:justify-content-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 lg:mb-0 fg-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use href="#bootstrap"></use>
            </svg>
          </a>
          <ul className="nav col-12 lg:col-auto lg:me-auto mb-2 justify-content-center md:mb-0">
            <li>
              <a href="#" className="nav-link px-2 fg-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 fg-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 fg-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 fg-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 fg-white">
                About
              </a>
            </li>
          </ul>
          <form
            className="col-12 lg:col-auto mb-3 lg:mb-0 lg:me-3"
            role="search"
          >
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          <div className="text-end">
            <button type="button" className="btn-outline theme-secondary me-2">
              Login
            </button>
            <button type="button" className="btn-solid theme-warning">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
