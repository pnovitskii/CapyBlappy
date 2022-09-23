import React from "react";
import style from "./landing.module.css";
import background from './capybara.png';
const Landing = () => {
    return (
        <div className={style.landing}>
            <img className={style.background} src={background}></img>
            <div className={style.topic}>Притулок для тварин</div>
            <div className={style.text}>Перш ніж купувати собаку чи кота – зайдіть до нас. У притулку знайдуться друзі будь-кому до душі – великі, маленькі, охоронці, компаньйони, лінивці та непосидьки. Коли ми беремо тваринку з притулку, то рятуємо одразу трьох: тваринку, яку забрали додому, бездомну тварину з вулиці, що займе звільнене місце у притулку, і, звичайно, Людину в собі. Не купуй – прихисти, адже справжня дружба не продається!</div>
            <div className={style.button1}>Знайти друга</div>
            <div className={style.button2}>Допомогти</div>
        </div>
    )
}

export default Landing;