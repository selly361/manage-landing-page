import { ITestimonialProps } from './Testimonial.types'

function Testimonial({ image, name, description }: ITestimonialProps) { 
  return (
    <article className="testimonial">
      <img className="testimonial__image" src={image} alt={`${name}'s image`} />
      <h4 className="testimonial__name">{name}</h4>
      <p className="testimonial__description">{description}</p>
    </article>
  )
}

export default Testimonial
