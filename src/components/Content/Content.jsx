import React from "react";

import './content.scss';

export default function Content() {
  return (
    <div className="content">
      <div className="content-block">
        <div className="content-info">
          <div className="content-infoItems">
            <div className="content-sortCard">
              <h3>НОВОСТИ</h3>
              <h4>ЗА НЕДЕЛЮ</h4>
              <h4>ЗА МЕСЯЦ</h4>
            </div>
            <div className="content-separation"></div>
            <div className="content-substanceDraft">
              <h3>СУТЬ ПРОЕКТА</h3>
            </div>
          </div>
        </div>
        <div className="content-news">
          <div className="content-newsItems">
            <div className="content-newsItem">
              <img src="./img/image-test.png" alt="" />
              <div className="content-itemText">
                <h3>ЗАГОЛОВОК</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt turpis ut commodo nulla ultrices. Habitant et sed at
                  congue phasellus. Integer ut mauris condimentum ut sed
                  vulputate sagittis aliquam sit. Donec proin quis orci id
                  euismod faucibus dignissim. Maecenas iaculis lobortis turpis
                  ut enim dolor molestie nec. Purus massa amet tellus feugiat a,
                  pulvinar erat. Vitae feugiat ornare platea habitant ultric
                </p>
                <a className="content-itemBtn" href="#">
                  <p>БОЛЕЕ</p>
                </a>
              </div>
            </div>
            <div className="content-newsItem">
              <img src="./img/image-test.png" alt="" />
              <div className="content-itemText">
                <h3>ЗАГОЛОВОК</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt turpis ut commodo nulla ultrices. Habitant et sed at
                  congue phasellus. Integer ut mauris condimentum ut sed
                  vulputate sagittis aliquam sit. Donec proin quis orci id
                  euismod faucibus dignissim. Maecenas iaculis lobortis turpis
                  ut enim dolor molestie nec. Purus massa amet tellus feugiat a,
                  pulvinar erat. Vitae feugiat ornare platea habitant ultric
                </p>
                <a className="content-itemBtn" href="#">
                  <p>БОЛЕЕ</p>
                </a>
              </div>
            </div>
            <div className="content-newsItem">
              <img src="./img/image-test.png" alt="" />
              <div className="content-itemText">
                <h3>ЗАГОЛОВОК</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt turpis ut commodo nulla ultrices. Habitant et sed at
                  congue phasellus. Integer ut mauris condimentum ut sed
                  vulputate sagittis aliquam sit. Donec proin quis orci id
                  euismod faucibus dignissim. Maecenas iaculis lobortis turpis
                  ut enim dolor molestie nec. Purus massa amet tellus feugiat a,
                  pulvinar erat. Vitae feugiat ornare platea habitant ultric
                </p>
                <a className="content-itemBtn" href="#">
                  <p>БОЛЕЕ</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
