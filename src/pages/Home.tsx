import Card from 'components/Card'
import Carousel from 'components/Carousel'
import 'styles/Home.css'

const Home = () => {
  return (
    <div className="main-content">
      <div style={{ width: '200px', height: '400px' }}>
        <Carousel
          images={[
            'unsplash-weekly.jpg',
            'photo-1647783365213-d36a02739b75.jpg',
            'photo-1648481613148-bfdcdbb305c8.jpg',
          ]}
        />
      </div>
      {/* <Card imageSrc="unsplash-weekly.jpg" title="firebase" />
      <Card imageSrc="https://picsum.photos/200/300" title="firebase" />
      <Card imageSrc="https://picsum.photos/300/200" title="firebase" />
      <Card imageSrc="https://picsum.photos/300/300" title="firebase" />
      <Card title="firebase" /> */}
      {/* <Card imageSrc="unsplash-weekly.jpg" />
        <Card imageSrc="unsplash-weekly.jpg" />
        <Card imageSrc="unsplash-weekly.jpg" />
        <Card imageSrc="unsplash-weekly.jpg" /> */}
    </div>
  )
}

export default Home
