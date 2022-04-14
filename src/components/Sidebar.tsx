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
          deserunt natus. Natus neque architecto magni voluptatum harum sapiente
          eum obcaecati debitis vitae? Veritatis doloribus rerum omnis eius!
          Deserunt ipsum odio, officia voluptatum nobis facilis inventore
          assumenda fuga reiciendis amet omnis quos optio, dolorem natus quo.
          Quis maxime vero culpa minima doloremque ex, sapiente, amet molestiae
          nesciunt omnis explicabo rem placeat aperiam debitis facere. Quisquam
          adipisci fuga vel commodi iure dolorum, et autem voluptatem ducimus
          culpa odit reiciendis tenetur cupiditate facilis doloribus nobis
          facere quis praesentium ipsa omnis id nesciunt nemo dicta! Repellendus
          corrupti consectetur fugiat quia cum cupiditate numquam alias, quod
          velit, quisquam excepturi hic, aperiam rerum magni veritatis iure
          commodi cumque maiores nesciunt delectus pariatur? Ipsam tempore
          minima tenetur ducimus sint sunt beatae fugit reprehenderit
          consequuntur accusantium, delectus, placeat deserunt similique.
          Necessitatibus itaque ipsam amet a laboriosam. Reiciendis facere
          labore corporis? Inventore, nostrum accusantium perferendis ut velit
          eveniet pariatur, tempora illum architecto repellendus ex autem.
        </div>
      </aside>
      <div className="overlay" onClick={closeSidebar}></div>
    </>
  )
}

export default Sidebar
