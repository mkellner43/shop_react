import './style/App.css';
import StaticCard from './components/StaticCard';
import Img1 from './images/icon-18.svg'
import Img2 from './images/icon-14.svg'
import Img3 from './images/icon-10.svg'

const Home = () => {
  return (
    <div className="App">
      <h1 className='home-title'>Welcome to our Store!</h1>
      <StaticCard 
        title="We've got all kinds of stuff that makes cool sounds!"
        content="Like the enchanting, whimsical xylophone.
        Sure to drive your roommates crazy."
        img={Img1}
      />
      <StaticCard 
        title="Producers, we've got you covered!"
        content='We have a huge stock of mixers on sale!
        Be the next Dr. Dre of Rock Sandwich.'
        img={Img2}
      />
      <StaticCard 
        title='The Harpist Zone'
        content='We can tune and string your harp, too!
        Harp Shredders have a home here.
        Keep ripping it up, you angel!'
        img={Img3}
      />
    </div>
  );
}

export default Home;
