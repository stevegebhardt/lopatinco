import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

export default function About() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex-col-center">
        <section className="middleSection">
          <h3 className="align-center">A VISION REALIZED</h3>
          <p>
            When Lawrence LoPatin started his business back in 1952 he had a
            vision of creating a new firm with a seamless ensemble spirit. His
            plan called for bringing together a team of experts - real-estate
            developers, architects, accountants and lawyers - who would link
            their skills in ways that were both innovative and effective. His
            central idea was this: Every single phase of the construction or
            renewal process would be covered by experienced and dedicated
            professionals - each of whom had a stake in the project's outcome.
          </p>
          <p>
            LoPatin's idea turned out to be a winner. Today, LoPatin & Co.
            Remains a family owned business that is loyal to those founding
            principles. By now, we're veterans of this integrated-team approach
            to real-estate development. And our team is primarily made up of
            family members - legal, accounting, marketing, management and
            planning specialists. We're committed to applying our knowledge and
            experience along with creative vision, instinct and innovative ideas
            to the development of land as well as to the renewal of existing
            structures.
          </p>
          <br />
          <h3 className="align-center">A HISTORY OF DEVELOPMENT AND RENEWAL</h3>
          <br />
          <p>
            Lawrence LoPatin began his career assembling large tracts of
            farmland in Nankin township (now known as Westland) and developing
            them into hundreds of residential lots. By 1961 LoPatin & Co.
            successfully completed it's first major commercial project - the
            Windsor Raceway. Since that time we've become one of the most
            respected development companies in the Metropolitan Detroit area.
            And our project portfolio has diversified and grown to include
            hotels, office buildings, restaurants, and residential developments
            for both public sector and private clients. We operate in a
            straightforward manner. In any development project, there are
            typically four phases - all interrelated and interdependent:
            <ul className="uList">
              <li>Design and Development</li>
              <li>Financing</li>
              <li>Marketing and Construction</li>
              <li>Management and Maintenance</li>
            </ul>
            <br />
            Because LoPatin & Co. is a full service development firm, our
            professional team handles each of these phases with precision and
            commitment to detail. By connecting all the dots in any public or
            private project, we're able to make the most effective use of scale,
            economy, mix, integrity and viability.
          </p>
          <br />
          <h3 className="align-center">A HISTORY OF SUCCESS</h3>
          <br />
          <p>
            Since 1952, LoPatin & Co. has embraced the guiding principles set
            forth by our founder - not because we're afraid to break the ice of
            tradition, but because these principles work. We've tackled new
            projects, dealt effectively with new legislation and in the process,
            learned quite a bit. And most important, we're always looking for
            new challenges.
          </p>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
