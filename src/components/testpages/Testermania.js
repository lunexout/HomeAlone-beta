import React from "react";
import "./Testermania.css";

import photo1 from "./../../assets/photo1.jpg";
import photo2 from "./../../assets/photo2.jpg";
import photo3 from "./../../assets/photo3.jpg";
import photo4 from "./../../assets/276058849_519282252914345_4672874935782026919_n-min.jpg";

const Testermania = () => {
  return (
    <div className="projcard-container">

<div className="projcard projcard-red">
        <div className="projcard-innerbox">
          <img alt="Home Alone" className="projcard-img" src={photo4} />
          <div className="projcard-textbox">
            <div className="projcard-title">
            BATUMI BUILD 2022
            </div>
            <div className="projcard-subtitle"></div>
            <div className="projcard-bar" />
            <div className="projcard-description">
            🟩 ჭკვიანი სახლის სისტემების კომპანია Home Alone  <br />
🛡 მე-11 საერთაშორისო სამშენებლო მასალების, ტექნოლოგიებისა და უძრავი ქონების გამოფენა <br />
"BATUMI BUILD 2022"<br />
            </div>
            <div className="projcard-tagbox">
              <span className="projcard-tag">Expo</span>
              <span className="projcard-tag">Batumi</span>
              <span className="projcard-tag">Renovation</span>
              <span className="projcard-tag">Smart Home</span>

            </div>
          </div>
        </div>
      </div>


      <div className="projcard projcard-blue">
        <div className="projcard-innerbox">
          <img alt="Home Alone" className="projcard-img" src={photo1} />
          <div className="projcard-textbox">
            <div className="projcard-title">
              შექმენით იდეალური პირობები თქვენი სახლისთვის Ltd Home Alone-თან
              ერთად
            </div>
            <div className="projcard-subtitle"></div>
            <div className="projcard-bar" />
            <div className="projcard-description">
              „მარტო სახლში“ კომპანია, რომელიც იყენებს წამყვან ტექნოლოგიებს,
              რათა შექმნას მარტივი, ჭკვიანი და იდეალური პროდუქტები, რომელიც
              აუმჯობესებს ჩვენს ყოველდღიურობას. ზუსტად ეს არის ჭკვიანი სახლისა
              და სისტემების მიზანი თანამედროვე საზოგადოებაში. კომპანია ცდილობს
              უკეთესი საცხოვრებელი პირობები შეუქმნას მომავალ თაობებს.
            </div>
            <div className="projcard-tagbox">
              <span className="projcard-tag">ჭკვიანი სახლი</span>
              <span className="projcard-tag">LTD Home Alone</span>
            </div>
          </div>
        </div>
      </div>
      <div className="projcard projcard-red">
        <div className="projcard-innerbox">
          <img alt="Home Alone" className="projcard-img" src={photo2} />
          <div className="projcard-textbox">
            <div className="projcard-title">
              მარტო სახლში – თქვენი სრული კომფორტის გარანტია
            </div>
            <div className="projcard-subtitle"></div>
            <div className="projcard-bar" />
            <div className="projcard-description">
              „თავდაუზოგავ შრომას და მუდმივად განვითარების სურვილს ყოველთვის
              მოაქვს წარმატება. იმისთვის, რომ მოიპოვო ადამიანების ნდობა,
              აუცილებელია ხარისხიანი პროდუქცია შესთავაზო მათ“, – ასე ფიქრობენ
              კომპანია „მარტო სახლში“- დამფუძნებლები ზურაბ მესხიძე და ჯოვანი
              ღოღობერიძე.
            </div>
            <div className="projcard-tagbox">
              <span className="projcard-tag">Smart</span>
              <span className="projcard-tag">Modern</span>
              <span className="projcard-tag">Great</span>
            </div>
          </div>
        </div>
      </div>
      <div className="projcard projcard-green">
        <div className="projcard-innerbox">
          <img alt="Home Alone" className="projcard-img" src={photo3} />
          <div className="projcard-textbox">
            <div className="projcard-title">
              ჭკვიანი სახლი - მომავლის ტექნოლოგია
            </div>
            <div className="projcard-subtitle"></div>
            <div className="projcard-bar" />
            <div className="projcard-description">
              კომპანიის მიზნებია ჭკვიანი სისტემების მუდმივი განვითარება და
              გაუმჯობესება. კომპანია აქცენტს ამახვილებს IOT-სისტემების
              დანერგვაზე, რომელიც მოიცავს: სახლის ავტომატიზაციას,
              ენერგოეფექტურობას, ვენტილაციას და გათბობას; ფარდებისა და მზის
              სინათლის მართვას, ჭკვიანი აუდიო და ჩამკეტების სისტემებს.
            </div>
            <div className="projcard-tagbox">
              <span className="projcard-tag">განვითარება</span>
              <span className="projcard-tag">გაუმჯობესება</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testermania;
