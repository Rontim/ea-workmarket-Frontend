import Nav from "../components/Navbar";

function Layout(props) {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
}

export default Layout;
