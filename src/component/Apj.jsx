import React from "react";
import "./Apj.css";
import apjimg from "../assets/image/A._P._J 1.png";
import { ExternalLink } from "react-external-link";
export const Apj = () => {
  return (
    <div>
      <div className="container">
        <div className="section-1 d-flex mt-3 justify-content-between">
          <div className="image-section">
            <img src={apjimg} alt="first image" />
          </div>
          <div className="heading-section">
            <div className="heading-content">
              <h1 className="name-heading">A.P.J Abdul Kalam</h1>
              <h4 className="year">1931-2015</h4>
            </div>
          </div>
        </div>
        <div className="main-section-1 mt-5">
          <h1 className="missile-heading">Missile Man of India</h1>
          <div className="para-font">
            <p>
              Avul Pakir Jainulabdeen Abdul Kalam (About this soundlisten) (15
              October 1931 - 27 July 2015) was an Indian aerospace scientist who
              served as the 11th president of India from 2002 to 2007. He was
              born and raised in Rameswaram, Tamil Nadu and studied physics and
              aerospace engineering. He spent the next four decades as a
              scientist and science administrator, mainly at the Defence
              Research and Development Organisation (DRDO) and Indian Space
              Research Organisation (ISRO) and was intimately involved in
              India's civilian space programme and military missile development
              efforts.[1] He thus came to be known as the Missile Man of India
              for his work on the development of ballistic missile and launch
              vehicle technology. He also played a pivotal organisational,
              technical, and political role in India's Pokhran-II nuclear tests
              in 1998, the first since the original nuclear test by India in
              1974.
            </p>
          </div>
        </div>
        <div className="main-section-2 mt-5">
          <h3 className="biographies-heading">Biographies</h3>
          <div className="para-font">
            <ul>
              <li>
                Eternal Quest: Life and Times of Dr Kalam by S Chandra; Pentagon
                Publishers, 2002.
              </li>
              <li>
                President A P J Abdul Kalam by R K Pruthi; Anmol Publications,
                2002.
              </li>
              <li>
                A P J Abdul Kalam: The Visionary of India by K Bhushan, G
                Katyal; A P H Pub Corp, 2002.
              </li>
              <li>
                A Little Dream (documentary film) by P. Dhanapal; Minveli Media
                Works Private Limited, 2008.
              </li>
              <li>
                The Kalam Effect: My Years with the President by P M Nair;
                Harper Collins, 2008.
              </li>
              <li>
                My Days With Mahatma Abdul Kalam by Fr A K George; Novel
                Corporation, 2009.
              </li>
              <li>
                A.P.J. Abdul Kalam: A Life by Arun Tiwari; Haper Collins, 2015.
              </li>
              <li>
                The People's President: Dr A P J Abdul Kalam by S M Khan;
                Bloomsbury Publishing, 2016.
              </li>
            </ul>
          </div>
        </div>
        <footer className="text-end my-5">
          <h6>
            Read more about A. P. J. Abdul Kalam on &nbsp;
            <ExternalLink href="https://en.wikipedia.org/wiki/API">
              Wikipedia
            </ExternalLink>
          </h6>
        </footer>
      </div>
    </div>
  );
};
