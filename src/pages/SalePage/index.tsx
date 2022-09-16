/* eslint-disable max-len */
import React, { useEffect } from 'react';
import bem from 'utils/bem';
import { useNavigate } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ozonImage from 'img/ozon-image.png';
import yandexImage from 'img/yandex-image.png';
import wildberriesImage from 'img/wildberries-image.png';
import circleIcon from 'img/circle.png';
import rocketImageOne from 'img/rocket-1.png';
import rocketImageTwo from 'img/rocket-2.png';
import starImage from 'img/space-star.png';
import './style.scss';

const b = bem('sale-page');

function SalePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const handleClick = () => {
    navigate('/signup/saler');
  };

  return (
    <div className={b('')}>
      <Header />
      <div className={b('main-content')}>
        <div className={b('block-content')}>
          <span className={b('sub-title')}>Я продавец</span>
          <span className={b('title')}>Цель сайта </span>
          <span className={b('description')}>Помощь продавцам в продвижении товара на маркетплейсах: Wildberries, Ozon, Яндекс Маркет и др.</span>
          <div className={b('image-list')}>
            <img className={b('image')} src={wildberriesImage} alt="wildberries" />
            <img className={b('image')} src={ozonImage} alt="ozon" />
            <img className={b('image')} src={yandexImage} alt="yandex" />
          </div>
        </div>
        <div className={b('block-content')}>
          <span className={b('sub-title')}>Я продавец</span>
          <span className={b('title')}>Для кого сайт?</span>
          <span className={b('description')}>{'Данный сайт предназначен для продавцов маркетплейсов, которые хотят простимулировать покупателей\nсвоей продукции к написанию положительного отзыва за денежное вознаграждение (кэшбэк), поднять товар\nв рейтинге и повысить его узнаваемость.'}</span>
        </div>
        <div className={b('block-content')}>
          <span className={b('sub-title')}>Я продавец</span>
          <span className={b('title')}>{'Зачем нужны положительные\nотзывы на Маркетплейсах?'}</span>
          <ul>
            <li className={b('list-item')}>
              <span className={b('description')}>{'Рост процента конверсии. Покупатели склонны покупать товары, которые имеют много отзывов, даже если\nоценка находится в пределах «4» баллов.'}</span>
            </li>
            <li className={b('list-item')}>
              <span className={b('description')}>{'Описание преимуществ. Положительные отзывы раскрывают характеристики товара с разных сторон, что\nпридает ему дополнительную привлекательность в глазах покупателей.'}</span>
            </li>
            <li className={b('list-item')}>
              <span className={b('description')}>{'Повышение места в поисковой выдаче маркетплейса. Чем больше откликов и лучше оценка, тем вероятнее\nпоявление товарной карточки перед пользователем при поиске в определенной категории.'}</span>
            </li>
            <li className={b('list-item')}>
              <span className={b('description')}>{'Перекрытие негативных комментариев. Случается, что партия товара оказалась бракованная и покупатели\nоставили много негативных откликов. В таком случае, помимо решения основной проблемы с качеством,\nпридется также повышать рейтинг за счет положительных отзывов.'}</span>
            </li>
            <li className={b('list-item')}>
              <span className={b('description')}>{'SEO-оптимизация карточки. Вставка ключевых слов в отзывы может быть самостоятельным инструментом\nрекламы. Поисковики индексируют тексты комментариев и способны предлагать пользователям прямые\nссылки на товар при соответствующем поисковом запросе. Функция согласования отзыва перед\nпубликацией доступна на сайте.'}</span>
            </li>

          </ul>
        </div>
        <div className={b('block-content')}>
          <span className={b('sub-title')}>Я продавец</span>
          <span className={b('title')}>Какие могут быть санкции?</span>
          <span className={b('description')}>{'По сути, продавцы этого сайта используют «белый» способ стимуляции покупателей к написанию отзыва,\nтак как продукция выкупается реальными людьми, не возвращается обратно на склады маркетплейсов, а отзывы\nпишут реальные пользователи данной продукции и только в том случае если товар им действительно\nпонравился, и они продолжают им пользоваться.\n\nОднако, стоит учитывать, что некоторые маркетплейсы в борьбе с недобросовестными предпринимателями\nмогут задевать и честных продавцов, поэтому давайте все же рассмотрим за что могут быть применены\nсанкции.'}</span>
        </div>
        <div className={b('block-content')}>
          <span className={b('sub-title')}>Я продавец</span>
          <span className={b('title')}>{'Факторы, влияющие на\nвероятность применения санкций:'}</span>
          <ul>
            <li className={b('list-item')}>
              <span className={b('description')}>
                <span className={b('description-color')}>Возраст товарной карточки и бренда</span>
                . Если продавец только вышел на маркетплейс с эксклюзивным товаром и в первые дни начинает собирать реальные отзывы на Вайлдберриз, то велика вероятность их бана. Если же бренд представлен на маркетплейсе уже несколько месяцев, его артикулы добавлены в избранное, идут активные продажи, то отклики на новую продукцию можно с уверенностью размещать уже в первые дни без страха их отклонения модераторами.
              </span>
            </li>
            <li className={b('list-item')}>
              <span className={b('description')}>
                <span className={b('description-color')}>Динамика продаж определенного артикула</span>
                . Резкие скачки количества заказов определенного товара расцениваются маркетплейсом, как вероятность применения продавцом искусственных выкупов и отзывов.
              </span>
            </li>
            <li className={b('list-item')}>
              <span className={b('description')}>
                <span className={b('description-color')}>Большой процент откликов</span>
                . Купить отзывы на Вайлдберриз можно, главное – не переусердствовать. Нормой в онлайн-продажах считается, когда своё мнение о товаре оставляет не больше 8% покупателей. Если этот показатель резко возрастает, значит написание комментариев каким-либо образом стимулируется.
              </span>
            </li>
            <li className={b('list-item')}>
              <span className={b('description')}>
                <span className={b('description-color')}>Частота размещения отзывов</span>
                . Это, наверное, самый простой критерий для определения заказных откликов. Отзывы не должны идти один за другим.
              </span>
            </li>
            <li className={b('list-item')}>
              <span className={b('description')}>
                <span className={b('description-color')}>Скорость оформления заказа</span>
                . Прямые переходы на определенную карточку товара с последующей быстрой покупкой и написанием отзыва вызывают сильное подозрение у маркетплейса. Обычно клиенты сначала или заходят на главную страницу, или переходят по ссылке с внешних поисковиков, или пользуют поиском самой площадки.
              </span>
            </li>
            <li className={b('list-item')}>
              <span className={b('description')}>
                <span className={b('description-color')}>Стандартные фразы в тексте</span>
                . В реальных отзывах на Вайлдберриз слова «быстрая доставка», «товар отличный», «упакован хорошо» используются редко. Но вот в дешевых заказных комментариях их можно встретить часто. Именно по наличию таких шаблонных фраз алгоритмы маркетплейса могут отклонять отзывы.
              </span>
            </li>
            <li className={b('list-item')}>
              <span className={b('description')}>
                <span className={b('description-color')}>Время после заказа</span>
                . Согласитесь, довольно странной выглядит ситуация, когда клиент ещё не получил посылку с товаром, а уже написал о нем положительный отзыв. Вероятность применения санкций в таком случае резко возрастает.
              </span>
            </li>
          </ul>
          <span className={b('sub-description')}>{'В дополнение хотим отметить, что есть примеры крупных компаний с большими оборотами, которые\nнапрямую прописывают у себя в договоре оферты вознаграждение за написание отзыва.'}</span>
          <div className={b('gray-block')} />
        </div>
        <div className={b('block-content')}>
          <span className={b('sub-title')}>Я продавец</span>
          <span className={b('title')}>Как работает сайт?</span>
          <span className={b('description')}>Вам необходимо пройти легкую регистрацию, добавить свой товар/товары. Заполнить информацию о нем. Указать маркетплейс на котором покупатель сможет его выкупить. Указать условия для получения кэшбэка. После этого Ваша продукция отобразится на сайте, и покупатели, в случае заинтересованности смогут начать выполнять условия, для получения кэшбэка. Все действия покупателей, согласившихся получить кэшбэк за положительный отзыв Вы сможете отслеживать в личном кабинете. Как только покупатель выполняет все условия и присылает необходимое подтверждение, Вы выплачиваете ему кэшбэк на карту, которую он укажет.</span>
          <span className={b('sub-description')}>
            <span className={b('description-color')}>Важно:</span>
            {' '}
            Необходимо четко прописать, как найти вашу продукцию по ключевым словам, так как в целях безопасности от санкций маркетплейсов мы не размещаем прямые ссылки на товар.
          </span>
        </div>
        <div className={b('block-content')}>
          <span className={b('sub-title')}>Я продавец</span>
          <span className={b('title')}>{'Преимущества использования\nданного сервиса'}</span>
          <div className={b('container')}>
            <div className={b('number-container')}>
              01
              <div className={b('text-container')}>
                {'Вашу продукцию выкупают и пишут отзыв только реальные\nпользователи, тем самым вы исключаете возможность\nблокировки.'}
              </div>
            </div>
            <div className={b('number-container')}>
              02
              <div className={b('text-container')}>
                {'Ваш товар быстрее поднимается в рейтинге за счет\nодновременного выкупа товара и написания\nположительного отзыва.'}
              </div>
            </div>
            <div className={b('number-container')}>
              03
              <div className={b('text-container')}>
                {'Благодаря автоматизации сайта не нужно тратить время на\nобщение с каждым человеком, который откликнулся\nполучить Ваш товар за кэшбэк'}
              </div>
            </div>
            <div className={b('number-container')}>
              04
              <div className={b('text-container')}>
                {'Все товары собраны на одном сайте, покупателю легко\nсориентироваться и найти нужную продукцию'}
              </div>
            </div>
            <div className={b('number-container', { width: true })}>
              05
              <div className={b('text-container', { color: true })}>
                {'Вы распродаете весь товар реальным людям,\nа не отправляете его снова на ПВЗ.'}
                <div className={b('space-container')}>
                  <img className={b('circle-icon')} src={circleIcon} alt="icon" />
                  <img className={b('rocket-image-one')} src={rocketImageOne} alt="icon" />
                  <img className={b('rocket-image-two')} src={rocketImageTwo} alt="icon" />
                  <img className={b('star-icon', { one: true })} src={starImage} alt="icon" />
                  <img className={b('star-icon', { two: true })} src={starImage} alt="icon" />
                  <img className={b('star-icon', { free: true })} src={starImage} alt="icon" />
                  <img className={b('star-icon', { four: true })} src={starImage} alt="icon" />
                </div>
              </div>
            </div>
            <button onClick={handleClick} className={b('register-btn')} type="button">Зарегистрироваться</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SalePage;
