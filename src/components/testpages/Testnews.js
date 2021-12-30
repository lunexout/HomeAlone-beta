import React from 'react'
import './Testermania.css'
import photo1 from './photo1.jpg'
import photo2 from './photo2.jpg'
import photo3 from './photo3.jpg'
export const Testnews = () => {
    return (
        <div className="wrap">
        <div className="blog">
          <div className="conteudo">
            <img alt="home alone"  src={photo1} />
            <h1>შექმენით იდეალური პირობები თქვენი სახლისთვის Ltd Home Alone-თან ერთად </h1>
            <hr />
            <p>
            „მარტო სახლში“ კომპანია, რომელიც იყენებს წამყვან ტექნოლოგიებს, რათა შექმნას მარტივი, ჭკვიანი და იდეალური პროდუქტები, რომელიც აუმჯობესებს ჩვენს ყოველდღიურობას. ზუსტად ეს არის ჭკვიანი სახლისა და სისტემების მიზანი თანამედროვე საზოგადოებაში. კომპანია ცდილობს უკეთესი საცხოვრებელი პირობები შეუქმნას მომავალ თაობებს.
            </p>
            <a href="https://okmagazine.ge/ok-sheqmenit-idealuri-pirob/?fbclid=IwAR1Zrsy2lwIuB5ftENGLwfudFVZaO2wmSHylevmmpZPr0YDDtViE_TU09rk" className="continue-lendo">მეტის ნახვა →</a>
          </div>
          <div className="conteudo">
            
            <img alt="home alone"  src={photo2} />
            <h1>მარტო სახლში – თქვენი სრული კომფორტის გარანტია </h1>
            <hr />
            <p>
            „თავდაუზოგავ შრომას და მუდმივად განვითარების სურვილს ყოველთვის მოაქვს წარმატება. იმისთვის, რომ მოიპოვო ადამიანების ნდობა, აუცილებელია ხარისხიანი პროდუქცია შესთავაზო მათ“, – ასე ფიქრობენ კომპანია „მარტო სახლში“- დამფუძნებლები ზურაბ მესხიძე და ჯოვანი ღოღობერიძე.
            </p>
            
            <a href="https://okmagazine.ge/ok-marto-saxlshi-tqveni-srul/?fbclid=IwAR20MHg8Di50ck1Fk6g3dU4J2WnW81qRCZ-WLdOoMW_QC0HOHOaSPd9_YDc" className="continue-lendo">მეტის ნახვა →</a>
          </div>

          <div className="conteudo">
            
            <img alt="home alone"  src={photo3} />
            <h1>ჭკვიანი სახლი - მომავლის ტექნოლოგია </h1>
            <hr />
            <p>
            კომპანიის მიზნებია ჭკვიანი სისტემების მუდმივი განვითარება და გაუმჯობესება. კომპანია აქცენტს ამახვილებს IOT-სისტემების დანერგვაზე, რომელიც მოიცავს: სახლის ავტომატიზაციას, ენერგოეფექტურობას, ვენტილაციას და გათბობას; ფარდებისა და მზის სინათლის მართვას, ჭკვიანი აუდიო და ჩამკეტების სისტემებს.
            </p>
            
            <a href="https://okmagazine.ge/ok-sheqmenit-idealuri-pirob/?fbclid=IwAR1Zrsy2lwIuB5ftENGLwfudFVZaO2wmSHylevmmpZPr0YDDtViE_TU09rk" className="continue-lendo">მეტის ნახვა →</a>
          </div>

        </div>
      </div>
    )
}

