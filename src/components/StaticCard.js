const StaticCard = ({title, content, img}) => {
  return (
    <section className='home-card'>
      <div>
        <p className='home-card--title'>{title}</p>
        <p className='home-card-content'>{content}</p>
      </div>
      <img className='home-card--img' src={img} alt='icon'></img>
    </section>
  )
}

export default StaticCard;