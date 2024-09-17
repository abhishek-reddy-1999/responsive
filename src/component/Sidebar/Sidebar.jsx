import { useTheme } from '@emotion/react';
import { tokens } from '../theme/Theme.js';
import './Sidebar.css';
function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const showSidebar = () => {

   const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

  }
  

  return (
    <>
      
        <aside id='sidebar' style={{
              backgroundColor: colors.primary[500],
              color: colors.grey[100],
            }}>
          <div className='d-flex'>
            <button type='button' class="toggle-btn" onClick={showSidebar}>
              <i className='fa-solid fa-bars'></i>
            </button>
            <div className='sidebar-logo'>
              <a href="#">HRM</a>
            </div>
          </div>
          <ul className='sidebar-nav'>
            <li className='sidebar-item'>
              <a className='sidebar-link' href='#'>
                <i className='fa-solid fa-house'></i>
                <span>Home</span>
              </a>
            </li>
            <li className='sidebar-item'>
              <a className='sidebar-link' href='#'>
                <i className="lni lni-agenda"></i>
                <span>Task</span>
              </a>
            </li>
            <li className='sidebar-item'>
              <a className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
                <i className="lni lni-protection"></i>
                <span>Auth</span>
              </a>
              <ul id="auth" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                <li className='sidebar-item'>
                <a href="#" class="sidebar-link">Login</a>
                </li>
                <li className='sidebar-item'>
                <a href="#" class="sidebar-link">Register</a>
                </li>
              </ul>
            </li>
            <li className='sidebar-item'>
              <a className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                data-bs-target="#multi" aria-expanded="false" aria-controls="multi">
                <i className="lni lni-layers"></i>
                <span>Multilevel</span>
              </a>
              <ul id='multi' className='sidebar-dropdown list-unstyled collapse' data-bs-parent='#sidebar'>
                <li className="sidebar-item">
                  <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse"
                    data-bs-target="#multi-two" aria-expanded="false" aria-controls="multi-two">
                    Two Links
                  </a>
                  <ul id="multi-two" className="sidebar-dropdown list-unstyled collapse">
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">Link 1</a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">Link 2</a>
                    </li>
                  </ul>

                </li>
              </ul>
            </li>
          </ul>

        </aside>
        
     
    </>
  )
}
export default Sidebar;