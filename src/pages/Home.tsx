import Card from 'components/Card'
import 'styles/Home.css'

const Home = () => {
  return (
    <main>
      <div className="main-content">
        <Card imageSrc="unsplash-weekly.jpg" />
        <Card imageSrc="https://picsum.photos/200/300" />
        <Card imageSrc="https://picsum.photos/300/200" />
        <Card imageSrc="https://picsum.photos/300/300" />
        {/* <Card imageSrc="unsplash-weekly.jpg" />
        <Card imageSrc="unsplash-weekly.jpg" />
        <Card imageSrc="unsplash-weekly.jpg" />
        <Card imageSrc="unsplash-weekly.jpg" /> */}
      </div>
    </main>
  )
}

export default Home
