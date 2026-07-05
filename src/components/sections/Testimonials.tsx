import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { testimonials } from '../../data/testimonials'
import { Section, SectionTitle } from '../ui/Section'

import 'swiper/css'
import 'swiper/css/pagination'

export function Testimonials() {
  return (
    <Section id="testimonials" muted>
      <SectionTitle
        title="Testimonials"
        description="Positive feedback from satisfied clients and colleagues."
      />
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="fade-in"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.name}>
            <div className="testimonial-card">
              <p className="testimonial-card__quote">
                <i className="bx bxs-quote-alt-left quote-icon-left" /> {t.quote}{' '}
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
              <img src={t.image} alt={t.name} className="testimonial-card__img" loading="lazy" />
              <h3>{t.name}</h3>
              <h4>{t.role}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  )
}
