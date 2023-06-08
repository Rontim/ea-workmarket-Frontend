import NavigationBar from "../components/Navbar";

function Layout(props) {
  return (
    <div>
      <NavigationBar />
      {props.children}
    </div>
  );
}

export default Layout;
