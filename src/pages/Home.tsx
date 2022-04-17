import Card from 'components/Card'
import 'styles/Home.css'

const Home = () => {
  return (
    <div className="main-content">
      <Card imageSrc="unsplash-weekly.jpg" title="firebase" />
      <Card imageSrc="https://picsum.photos/200/300" title="firebase" />
      <Card imageSrc="https://picsum.photos/300/200" title="firebase" />
      <Card imageSrc="https://picsum.photos/300/300" title="firebase" />
      <Card title="firebase" />
      {/* <Card imageSrc="unsplash-weekly.jpg" />
        <Card imageSrc="unsplash-weekly.jpg" />
        <Card imageSrc="unsplash-weekly.jpg" />
        <Card imageSrc="unsplash-weekly.jpg" /> */}
    </div>
  )
}

export default Home
