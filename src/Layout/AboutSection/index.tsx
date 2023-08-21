

interface IAboutSectionProps {
	forwardedRef: React.MutableRefObject<HTMLDivElement | null>
}


function AboutSection({ forwardedRef }: IAboutSectionProps) {
  return (
    <section ref={forwardedRef} className="about-section">
      <section className="about-section__introduction">
        <article className="about-section__introduction__article">
          <h1 className="about-section__introduction__article__title">
            Bring everyone together to build better products.
          </h1>
          <p className="about-section__introduction__article__description">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="button button--primary">Get Started</button>
        </article>
        <img
          src="images/illustration-intro.svg"
          className="about-section__introduction__image"
        />
      </section>
      <section className="about-section__info">
        <article className="about-section__info__article">
          <h2 className="about-section__info__article__title">What’s different about Manage?</h2>
          <p className="about-section__info__article__description">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </article>
        <ul className="about-section__info__list">
          <li className="about-section__info__list__list-item">
            <h3 className="about-section__info__list__list-item__title">
              Track company-wide progress
            </h3>
            <p className="about-section__info__list__list-item__description">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </li>

          <li className="about-section__info__list__list-item">
            <h3 className="about-section__info__list__list-item__title">
              Advanced built-in reports
            </h3>
            <p className="about-section__info__list__list-item__description">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </li>
          <li className="about-section__info__list__list-item">
            <h3 className="about-section__info__list__list-item__title">
              Everything you need in one place
            </h3>
            <p className="about-section__info__list__list-item__description">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default AboutSection
