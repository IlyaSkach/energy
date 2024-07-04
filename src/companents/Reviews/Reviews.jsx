import React from "react";
import "./Reviews.scss";

import img1 from "../../Image/rew1.jpeg";
import img2 from "../../Image/rew2.jpeg"; 
import img3 from "../../Image/rew3.jpeg"; 


const Reviews = () => {
  return (
    <>
      <section className="reviews" id="reviews"> 
			<h2 className="reviews__title">ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h2>
        <img src={img1} alt="Отзав 1" />
        <h3 className="reviews__main">SHAMAN</h3>
				<p className="reviews__text">
Искал специалиста для выполнения работ по электрике . Оставил заявку на сайте. Перезвонили и проконсультировали бесплатно. Вызвал ребят на дом, заменили проводку, подключили УЗО и автоматы. Все работает. Цена улучшила настроение. Рекомендую!</p>
				<img src={img2} alt="Отзав 2" />
        <h3 className="reviews__main">СОЛОВЬЕВ ВЛАДИМЕР</h3>
				<p className="reviews__text">Единственные люди, которые согласились реализовать освещение в квартире согласно моих требований. Спасибо огромное. Успехов!</p>
				<img src={img3} alt="Отзав 3" />
        <h3 className="reviews__main">ФИЛИП</h3>
				<p className="reviews__text">По рекомендации знакомых я обратился к Вам. Парни за пару дней устранили все неисправности! Мы с женой остались довольны, и по оплате договорились - все остались довольны. Зaменили: электрощиток, aвтомaты, узо, рoзeтки, перенесли счетчик в квартиру. Спасибо!!!</p>
       
      </section>
    </>
  );
};

export default Reviews;