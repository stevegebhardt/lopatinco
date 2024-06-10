import React from "react";
import Header from "../shared/Header";

export default function Photos() {
  return (
    <>
      <div>
        <Header />
      </div>
      <section className="w-100vw">
        <div className="flex-row-center">
          <div className="w-25">
            <img
              src="/windsorRaceway.jpeg"
              alt="Windsor Raceway Grandstands"
            ></img>
            <h4>Windsor Raceway, Windsor, Otario Canada</h4>
          </div>
          <div className="w-25">
            <p>
              This LoPatin & Co. project returned horse racing to Windsor,
              Ontario after a 30 year hiyatus. The Windsor Raceway demonstrated
              the matchless effectiveness of two features that have since become
              trademarks of our work: energetic and precise financing and a
              heartfelt attention to detain.
            </p>
            <p>
              The raceway's physical plant - stables of a water resistant,
              light-weight, fiberglass-reinforces material never before used in
              race-course construction; glass-enclosed grand-stands and a club
              house to accommodate 3,100; and a specially designed, all-weather
              track of the new serface material, Tartan, engineered by 3M. All
              of these features have become standard design for similar projects
              throught the world.
            </p>
            <p>
              It's safe to say that with this project, LoPatin's outstanding
              track-record was firmly established.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <img
              src="/MISpeedway.jpeg"
              alt="Michigan International Speedway Grandstands"
            ></img>
            <h4>Michigan International Speedway, Brooklyn, Michigan</h4>
          </div>
          <div>
            <p>
              Michigan's first major auto raceway began to take form when
              Lawrence LoPatin raised $3.5 million and secured approvals for the
              development of nearly 800 acres in Lenawee County
            </p>
            <p>
              The track's combined 2-mile oval and road course, created
              especially for LoPatin by Charles Moneypenny and world champion
              race-car driver, Sterling Moss, received high praise from drivers,
              owners and fans. Race-driver celebrities Al and Bobby Unser called
              MIS the finest track in the country.
            </p>
            <p>
              And once again, innovation was key. LoPatin & Co.'s architechtural
              design called for a new kind of track that respected driver safety
              but still offered more excitement than any track in the country.
            </p>
            <p>
              Unlike other tracks where fans only see the cars for a few brief
              seconds per lap - from MIS's comfortable grandstand seats,
              virtually the entire track is visible.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <img
              src="/sevenMileCrossing.jpeg"
              alt="Exterior Architecture"
            ></img>
            <h4>Seven Mile Crossings, Livonia, Michigan</h4>
          </div>
          <div>
            <p>
              This project features two of the same type of buildings that total
              250,000-square-feet of general office space and one freestanding
              restuarant.
            </p>
            <p>
              LoPatin & Co. was selected as lead developer for the project
              following a protracted and very thorough evaluation process
              conducted by a local community college. The college sought a
              development team with the financial qualifications, environmental
              and aesthetic sensitivity to develop 16 acres of the school's
              surplus property in an innovative way.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <img
              src="/embassySuitesHotel.jpeg"
              alt="Exterior shot of the hotel"
            ></img>
            <h4>Embassy Suites Hotel, Southfield, Michigan</h4>
          </div>
          <div>
            <p>
              The mixed-use development project that is made up of a 240-unit,
              all suite hotel and a 350,000-square-foot multi-tenant, general
              office complex. It contains Embassy Suites and One Northwestern
              Plaza.
            </p>
          </div>
        </div>
      </section>
      {/* <section>
        <div>
          <div>
            <img src="/" alt="Windsor Raceway Grandstands"></img>
            <h4>Windsor Raceway, Windsor, Otario Canada</h4>
          </div>
          <div></div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <img src="/" alt="Windsor Raceway Grandstands"></img>
            <h4>Windsor Raceway, Windsor, Otario Canada</h4>
          </div>
          <div></div>
        </div>
      </section> */}
    </>
  );
}
