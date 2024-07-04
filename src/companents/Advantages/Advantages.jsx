import React from "react";
import "./Advantages.scss";
import img1 from "../../Image/img1.jpeg";
import img2 from "../../Image/img2.jpeg"; 
import img3 from "../../Image/img3.jpeg"; 
import img4 from "../../Image/img4.jpeg"; 

const Advantages = () => {
  return (
    <>
      <section className="advantages" id="advantages">
        <h2 className="advantages__title">ОЩУТИТЕ ВСЕ ПРЕИМУЩЕСТВА РАБОТЫ С НАМИ</h2>
        <img src={img1} alt="Приемущества 1" />
        <h3 className="advantages__main">НИКАКИХ ПРЕДОПЛАТ</h3>
				<p className="advantages__text">Вы платите только за выполненную работу.</p>
				<img src={img2} alt="Приемущества 2" />
        <h3 className="advantages__main">ВЫСОКИЙ УРОВЕНЬ КАЧЕСТВА</h3>
				<p className="advantages__text">Качественое выполнение работ - это гарантия положительных отзывов и долгосрочных отношений.</p>
				<img src={img3} alt="Приемущества 3" />
        <h3 className="advantages__main">ОПЫТ РАБОТЫ</h3>
				<p className="advantages__text">Наши специалисты имеют многолетний опыт в области электромонтажных работ.</p>
				<img src={img4} alt="Приемущества 4" />
        <h3 className="advantages__main">БЕЗОПАСНОСТЬ</h3>
				<p className="advantages__text">Мы используем только качественные, проверенные временем и опытом материалы.</p>
      </section>
    </>
  );
};

export default Advantages;