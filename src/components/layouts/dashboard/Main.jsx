import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import {useState} from 'react';


const Main = (props) => {

    const [MenuIsOpen, setMenuIsOpen] = useState(true)
    function change_menu_status() {
        MenuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);
    }
    const content_class = MenuIsOpen ? "w-full rounded-lg mr-1 p-2 pt-20 pr-64" : "w-full rounded-lg mr-1 p-2 pt-20"

  return (
    <>
      <Topbar change_menu_status={() => change_menu_status()} />
      <div className="flex mt-1">
        <Sidebar MenuIsOpen={MenuIsOpen}/>
        <div className={content_class} >{props.children}</div>
      </div>
    </>
  );
};

export default Main;
