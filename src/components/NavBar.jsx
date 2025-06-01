function NavBar() {
  return (
    <nav className="py-4">
      <div className="bg-transparent flex justify-center text-gray-500 group">
        <ul className="flex space-x-8 py-3 shadow-lg rounded-4xl p-4 duration-300 ">
          <li className="hover:text-gray-900 duration-200 hover:bg-gray-50 hover:rounded-2xl">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-gray-900 duration-200 hover:bg-gray-50 hover:rounded-2xl">
            <a href="#">Store</a>
          </li>
          <li className="hover:text-gray-900 duration-200 hover:bg-gray-50 hover:rounded-2xl">
            <a href="#">Manage</a>
          </li>
          <li className="hover:text-gray-900 duration-200 hover:bg-gray-50 hover:rounded-2xl">
            <a href="#">Security</a>
          </li>
          <li className="hover:text-gray-900 duration-200 hover:bg-gray-50 hover:rounded-2xl">
            <a href="#">Download</a>
          </li>
          <li className="hover:text-gray-900 duration-200 hover:bg-gray-50 hover:rounded-2xl">
            <a href="#">FAQs</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
