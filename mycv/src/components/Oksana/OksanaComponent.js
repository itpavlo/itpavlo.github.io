import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { AppRoutes } from "../../common/AppRoutes";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Year = (props) => {
  const [year, setYear] = React.useState(props.initialValue);
  const minus = () => setYear(year - 1);
  const plus = () => setYear(year + 1);
  return (
    <span>
      <button onClick={minus}>-</button>
      {year}
      <button onClick={plus}>+</button>
    </span>
  );
};

const OksanaComponent = () => {

  const navigate = useNavigate();
  const location = useLocation()

  useEffect(()=>{
    console.log(location.pathname)
  // setTimeout(()=>{
  //   navigate(AppRoutes.IHOR)
  // }, 3000)
  },[])
  return (
    <div>
      <Navbar />
      <h1>Історія Львова</h1>
      <Link to={AppRoutes.IHOR}>
          <span style={{fontSize: '20px'}}>MENTOR</span>
      </Link>
      <img src="/XIX.jpg" />
      <p>
        <b>Львів</b> -
        <small>
          найбільше місто Західноі Украіни, що протягом багатовіковоі історії
          було, і є нині, культурним та національним центром регіону.
        </small>
        <br />
        <br />
        <strong>
          <i>В найдавніші часи</i>
        </strong>
        - столиця Галицько-Волинської держави, згодом - адміністративний центр
        Руського воєводства, автономного Королівства Галіції і Лодомерії. <br />
        <br />У
        <Year initialValue={1918} />
        році - столиця ЗУНР. Після захоплення міста Польщею, Львів став центром
        однойменного воєводства. <br />
        <br />
        У Другій світовій війні був окупований спочатку радянською, а потім
        німецькою арміями.
        <br />У повоєнний період відійшов до Рядянського Союзу.
        <ins>
          З <Year initialValue={1991} /> року - адміністративний центр
          Львівської області Незалежної України.
        </ins>
        <br />
      </p>
      <div>
        <h3>Зміст</h3>
        <ol style={{ listStyleType: "none" }}>
          <li>
            <b>Заснування</b>
          </li>
          <li>
            <b>1253-1349</b>: Руське Королівство (Галицько-Волинська держава):
            протистояння з Золотою Ордою
          </li>
          <li>
            <b>1349-1387</b>: Руське Королівство: протистояння з Польщею та
            Угорщиною
          </li>
          <li>
            <b>1387-1772</b>: під владою Польського королівства та Речі
            Посполитої
          </li>
          <li>
            <b>1772-1914</b>: у складі Австрійської (згодом Австро-Угорської)
            імперії
          </li>
          <li>
            <b>1914-1919</b>: у період Першої світової війни та Української
            революції
          </li>
          <li>
            <b>1919-1939</b>: у складі Другої Речі Посполитої
          </li>
          <li>
            <b>1939-1944</b>: у період Другої світової війни
          </li>
          <li>
            У
            <b>
              <Year initialValue={1990} />
            </b>
            відбувається розвал великих підприємств і триває затяжна економічна
            криза.
          </li>
          <li>
            Зранку 18 березня
            <b>
              <Year initialValue={2022} />
            </b>
            року Львів вперше з початку російського вторгнення зазнав ракетного
            удару.
          </li>
        </ol>
      </div>
      <Outlet />
      {/*<Routes>*/}
      {/*  <Route path="/more" element={<h1>MORE</h1>} />*/}
      {/*  <Route path="*" element={<h1>NOT FOUND</h1>} />*/}
      {/*</Routes>*/}
    </div>
  );
};

export default OksanaComponent;
