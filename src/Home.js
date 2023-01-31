import StaticCard from './components/StaticCard';
import Img1 from './images/pexels-vishnu-r-nair-1105666.jpg';
import Img2 from './images/pexels-hendrik-b-744318.jpg';
import Img3 from './images/pexels-wallace-chuck-3587478.jpg';
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <motion.section animate={{opacity: [0, 1]}} className="App">
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
        reverse={true}
      />
      <StaticCard 
        title='The Harpist Zone'
        content='We can tune and string your harp, too!
        Harp Shredders have a home here.
        Keep ripping it up, you angel!'
        img={Img3}
      />
    </motion.section>
  );
}

export default Home;
