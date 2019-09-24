import React from 'react';

import FeedbackForm from '../Forms/FeedbackForm/FeedbackForm'
import './styles.scss';

function MainPage() {
    return (
    <div className="main-page">
        <div className="container">
            <div className="main-column">
                <div className="description">
                Наш домик объединил группу людей, которые очень хотят внести свой вклад в изменение ситуации с бездомными животными в нашем городе.
                Сейчас под крышей домика нашли приют 15 собак и более 70 котов (из них 29 это котята, 14 особенных животных - 2 собаки и 12 котов), 3 собаки и 1 кот на квартирных передержках. Так же домик заботиться о голубях с птенцами в заброшенной голубятне. Все они разного возраста, с разными судьбами, с кураторами и без. Постепенно мы расскажем их истории.
                А пока, мы приглашаем всех неравнодушных присоединиться к нам, при чем не только на просторах интернета. 
                Мы будем очень рады увидеть вас на пороге приюта.
                Приходите, мы очень ждём Вас!
                </div>
            </div>
            <div className="help-column">
                <div className="button link-to-help">
                    <a href="https://vk.com/topic-149708458_35779829">Как нам помочь</a>
                </div>
                <FeedbackForm />
            </div>
        </div>
    </div>)
}

export default MainPage; 