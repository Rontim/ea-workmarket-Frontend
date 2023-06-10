import NavigationBar from "../components/common/navbar/Navbar";

function Layout(props) {
  return (
    <div>
      <NavigationBar />
      {props.children}
    </div>
  );
}

export default Layout;
