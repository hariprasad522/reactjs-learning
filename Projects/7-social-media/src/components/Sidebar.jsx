const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-black sidebar"
      style={{ width: "280px" }}
      data-bs-theme="dark"
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 md:mb-0 md:me-auto fg-white text-decoration-none"
      >
        <svg
          className="bi pe-none me-2"
          width="40"
          height="32"
          aria-hidden="true"
        >
          <use href="#bootstrap"></use>
        </svg>
        <span className="fs-xl">Sidebar</span>
      </a>
      <hr />
      <ul className="nav flex-column align-items-start mb-auto">
        <li className="nav-item" onClick={() => setSelectedTab("Home")}>
          <a
            href="#"
            className={`nav-link fg-white ${selectedTab === "Home" && "active"}`}
            aria-current="page"
          >
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use href="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li onClick={() => setSelectedTab("Create Post")}>
          <a
            href="#"
            className={`nav-link fg-white ${selectedTab === "Create Post" && "active"}`}
          >
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use href="#speedometer2"></use>
            </svg>
            Create Post
          </a>
        </li>
      </ul>
      <hr />
      <div>
        <a
          className="d-flex align-items-center fg-white text-decoration-none"
          href="#"
          role="button"
          data-bs-toggle="menu"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <div className="menu shadow">
          <a className="menu-item" href="#">
            New project...
          </a>
          <a className="menu-item" href="#">
            Settings
          </a>
          <a className="menu-item" href="#">
            Profile
          </a>
          <hr className="menu-divider" />
          <a className="menu-item" href="#">
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
