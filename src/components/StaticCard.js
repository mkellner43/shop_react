const StaticCard = ({title, content, img, reverse=false}) => {

  return (
    <>
    { reverse ? 
        <section className='home-card'>
        <img className='home-card--img' src={img} alt='icon'></img>
        <div>
        <p className='home-card--title'>{title}</p>
        <p className='home-card-content'>{content}</p>
        </div>
        </section>
      :
        <section className='home-card'>
        <div>
        <p className='home-card--title'>{title}</p>
        <p className='home-card-content'>{content}</p>
        </div>
        <img className='home-card--img' src={img} alt='icon'></img>
        </section>
    }
    </>
      )
}

export default StaticCard;