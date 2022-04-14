import { useRef } from 'react'
import 'styles/Sidebar.css'

const Sidebar = () => {
  const sidebarRef = useRef<HTMLElement>(null)
  const closeSidebar = () => {
    sidebarRef.current?.classList.remove('open')
  }
  return (
    <>
      <aside ref={sidebarRef} className="sidebar">
        <h1>Sidebar</h1>
        <div className="sidebar-inner">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam totam
          odit iste facere numquam cupiditate itaque dolore accusamus neque
          perferendis alias sed ad labore omnis impedit nobis exercitationem,
          nihil sint dolorem voluptas eaque deleniti dolorum. Alias iure saepe
          fugiat molestias eos, officia dicta labore laboriosam, ducimus
          praesentium cupiditate, quisquam molestiae nobis reiciendis beatae
          deserunt natus.
        </div>
      </aside>
      <div className="overlay" onClick={closeSidebar}></div>
    </>
  )
}

export default Sidebar
