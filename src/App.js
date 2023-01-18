import './App.css';
import {RickAndMortyComponent} from "./components/RickAndMorty/RickAndMortyComponent";

function App() {
  return (
      <div className="App">
        {/*1. Описати всю сім'ю сімпсонів  (5 персонажів)*/}
        <div>
          <h1>Simpsons</h1>
        </div>

        <div>
          <h2>Bart</h2>
          <div>Бартолом'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв
            мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є
            дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі.
            Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.</div>
          <img src={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'} alt="Bart"/>
        </div>

        <div>
          <h2>Homer</h2>
          <div>Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони».
            Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний.
            Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.</div>
          <img src={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'} alt="Homer"/>
        </div>

        <div>
          <h2>Marge</h2>
          <div>Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) —
            постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит
            зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом
            универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза
            цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме,
            детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов.
            Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность
            не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир.
            Любимое блюдо — лапша с маслом.</div>
          <img src={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'} alt="Marge"/>
        </div>

        <div>
          <h2>Lisa</h2>
          <div>Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны».
            Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим
            умом и рассудительностью.</div>
          <img src={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'} alt="Lisa"/>
        </div>

        <div>
          <h2>Maggie</h2>
          <div>Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала
            «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night
            (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом,
            пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в
            шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют
            произошёл 17 декабря 1989 года.</div>
          <img src={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'} alt="Maggie"/>
        </div>

        {/*2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image)*/}
        <div>
          <h1>The Rick and Morty</h1>
        </div>
        <div className="App-bloks">
          <RickAndMortyComponent
              id = {'1'}
              name ={'Rick Sanchez'}
              status = {'Alive'}
              species = {'Human'}
              gender = {'Male'}
              image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}/>

          <RickAndMortyComponent
              id = {'2'}
              name ={'Morty Smith'}
              status = {'Alive'}
              species = {'Human'}
              gender = {'Male'}
              image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}/>

          <RickAndMortyComponent
              id = {'3'}
              name ={'Summer Smith'}
              status = {'Alive'}
              species = {'Human'}
              gender = {'Female'}
              image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}/>

          <RickAndMortyComponent
              id = {'4'}
              name ={'Beth Smith'}
              status = {'Alive'}
              species = {'Human'}
              gender = {'Male'}
              image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}/>

          <RickAndMortyComponent
              id = {'5'}
              name ={'Jerry Smith'}
              status = {'Alive'}
              species = {'Human'}
              gender = {'Male'}
              image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}/>

          <RickAndMortyComponent
              id = {'6'}
              name ={'Abadango Cluster Princess'}
              status = {'Alive'}
              species = {'Alien'}
              gender = {'Female'}
              image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}/>
        </div>
      </div>
  );
}

export default App;