import { useRef, useState, useEffect} from "react";

import classNames from "classnames/bind";
import styles from "./Wheel.module.scss";

import { useAppDispatch, useAppSelector } from "../../store";
import { finishWheel } from "../../store/reducers/wheel";

import useOutsideClick from '../../pages/Home/hooks/useOutsideClick'; // Импортируйте ваш хук

import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
const cn = classNames.bind(styles);

const Wheel = () => {
   const dispatch = useAppDispatch();
   const isOpen = useAppSelector((state) => state.wheel.isOpen);

   // Состояние прелоудреа
   const isLoading = useAppSelector((state) => state.preloader.isLodaing);
   // const user = useSelector((state: RootState) => state.user.user);
   const [rotation, setRotation] = useState(0);
   const [isSpinning, setIsSpinning] = useState(false);
   const [step, setStep] = useState(1);

  const sectors = [
    { name: "Sector 1", weight: 91 },
    { name: "Sector 2", weight: 1 },
    { name: "Sector 3", weight: 1 },
    { name: "Sector 4", weight: 1 },
    { name: "Sector 5", weight: 1 },
    { name: "Sector 6", weight: 1 },
    { name: "Sector 7", weight: 1 },
    { name: "Sector 8", weight: 1 },
    { name: "Sector 9", weight: 1 },
    { name: "Sector 10", weight: 1 }
  ];
  
   
  const getRandomSector = () => {
    const totalWeight = sectors.reduce((total, sector) => total + sector.weight, 0);
    const random = Math.random() * totalWeight;

    let currentWeight = 0;
    for (let i = 0; i < sectors.length; i++) {
        currentWeight += sectors[i].weight;
        if (random <= currentWeight) {
            return i;
        }
    }
    return 0; // если что-то пойдет не так
};

const spin = () => {
    if (isSpinning) return; // Предотвращает повторный запуск спина во время текущего

    const sectorIndex = getRandomSector();
    const sectorAngle = 360 / sectors.length;
    const targetAngle = sectorIndex * sectorAngle + sectorAngle / 2;

    const spins = Math.floor(Math.random() * 3) + 5; // случайное количество оборотов от 5 до 7
    const finalAngle = rotation + spins * 360 + targetAngle;

    setIsSpinning(true);
    setRotation(finalAngle);

    setTimeout(() => {
        setIsSpinning(false);
        // dispatch(finishWheel());
    }, 5000); // Время завершения анимации
};

   function goNext() {
      setStep((prev) => prev + 1);
   }
//    async function addCoins(userId: number, amount: number) {   
//       console.log(`пользователь ${JSON.stringify(user)} количество ${amount}`)
//       try {
//          const response = await axios.post(
//             `https://coinfarm.club/api/reward/first/${userId}`
//           ); 
//           console.log(response)
//           const response1 = await axios.patch(
//             `https://coinfarm.club/api/user/${userId}/earn/${amount}`
//           );
//           const updatedUser = response1.data;
//           // Обновление состояния пользователя и локальных монет
//           dispatch(
//             setUser({
//               ...updatedUser,
//               coins: updatedUser.coins,
//               totalEarnings: updatedUser.totalEarnings,
//             })
//           );
//           setLocalCoins(2000)
//           dispatch(updateGrassEarnings(0));

//           console.log(localCoins)
//             //   const updatedUser = await response.json();
//             //   // Преобразование значений coins и totalEarnings в числа
//             //   console.log(`updated user ${JSON.stringify(updatedUser)}`)
//             //   dispatch(setUser({
//             //       ...updatedUser,
//             //       coins: Number(updatedUser.coins),
//             //       totalEarnings: Number(updatedUser.totalEarnings)
//             //   })); // Обновляем данные пользователя в Redux
              
          
//       } catch (error) {
//           console.error('Error:', error);
//       }
//   }
  
   // function handleAddCoins() {
   //    if (user?.id) {
   //       addCoins(user.id, 0);
   //       fihish();
   //    } else {
   //       console.error("User ID not found");
   //    }
   // }

   function fihish() {
      // coinMoneyAnimRef.current?.classList.add("moneyAnim");

      // setTimeout(() => {
      //    coinMoneyAnimRef.current?.classList.remove("moneyAnim");
         setStep(1)
         dispatch(finishWheel());
      // }, 500);
   }
   
   const { t } = useTranslation();
   useEffect(() => {
     const initData = window.Telegram.WebApp.initDataUnsafe;
     const userLanguage = initData.user?.language_code || 'en'; // Получаем язык пользователя
     
     if (['en', 'ru', 'uk'].includes(userLanguage)) { // Добавьте другие поддерживаемые языки
       i18n.changeLanguage(userLanguage);
     } else {
       i18n.changeLanguage('en'); // Язык по умолчанию, если язык пользователя не поддерживается
     }
 
   const applyStyles = () => {
      document.querySelectorAll('.textMenu').forEach(element => {
         if (element instanceof HTMLElement) { // Проверяем, что элемент является HTMLElement
           element.style.fontSize = '14px';
           element.style.fontWeight = '700';
         }
       });
       document.querySelectorAll('.textMenu2').forEach(element => {
         if (element instanceof HTMLElement) { // Проверяем, что элемент является HTMLElement
           element.style.fontSize = '18px';
           element.style.fontWeight = '700';
         }
       });
       document.querySelectorAll('.textMenu1').forEach(element => {
          if (element instanceof HTMLElement) { // Проверяем, что элемент является HTMLElement
            element.style.fontSize = '13px';
            element.style.fontWeight = '700';
          }
        });
        document.querySelectorAll('.textInvite').forEach(element => {
         if (element instanceof HTMLElement) { // Проверяем, что элемент является HTMLElement
           element.style.fontSize = '20px';
           element.style.fontWeight = '700';
         }
       });
       document.querySelectorAll('.textInvite1').forEach(element => {
         if (element instanceof HTMLElement) { // Проверяем, что элемент является HTMLElement
           element.style.fontSize = '15px';
           element.style.fontWeight = '400';
         }
       });
       document.querySelectorAll('.textInvite2').forEach(element => {
         if (element instanceof HTMLElement) { // Проверяем, что элемент является HTMLElement
           element.style.fontSize = '12px';
           element.style.fontWeight = '700';
         }
       });
       document.querySelectorAll('.textInvite3').forEach(element => {
        if (element instanceof HTMLElement) { // Проверяем, что элемент является HTMLElement
          element.style.fontSize = '18px';
          element.style.fontWeight = '700';
        }
      });
      document.querySelectorAll('.textInvite4').forEach(element => {
        if (element instanceof HTMLElement) { // Проверяем, что элемент является HTMLElement
          element.style.fontSize = '10px';
          element.style.fontWeight = '700';
        }
      });
      document.querySelectorAll('.textInvite5').forEach(element => {
        if (element instanceof HTMLElement) { // Проверяем, что элемент является HTMLElement
          element.style.fontSize = '14px';
          element.style.fontWeight = '700';
        }
      });
         document.querySelectorAll('.textInvite6').forEach(element => {
         if (element instanceof HTMLElement) { // Проверяем, что элемент является HTMLElement
            element.style.fontSize = '10px';
            element.style.fontWeight = '700';
         }
         });
      // Добавьте остальные стили аналогичным образом
    };
    if (userLanguage !== 'en') {
 
      applyStyles();

    }
  
    // Перезапуск применения стилей при изменении количества элементов
    const observer = new MutationObserver(applyStyles);
    observer.observe(document.body, { childList: true, subtree: true });
  
    return () => {
      observer.disconnect();
    };
   }, []);
   const wheelRef = useRef<HTMLDivElement>(null);

   useOutsideClick(() => dispatch(finishWheel()), [wheelRef]);

   return (
      <div className={cn("greeting", !isLoading && isOpen && "_active")} style={{zIndex: '100'}} >
         {/* Introduction */}
         {step === 1 && (
            <div className={cn("greeting__body", "_first")} ref={wheelRef}>
               {/* Popup border */}
               <img
                  src="img/global/popup-border.svg"
                  className={cn("greeting__border")}
               />

               {/* Надпись на popup-border */}
               <strong className={`${cn("greeting__label", "_first")}` + ' textInvite3'}>
               {t('wheel_title')}
               </strong>

               {/* Иконка next */}
               <img
                  src="img/global/next-btn.svg"
                  className={cn("greeting__next")}
                  alt="Далее"
                  onClick={goNext}
               />

               {/* Контент */}
               <div className={cn("greeting__content", "content")}>
                  <img
                     src="img/pages/home/menu/Wheel.png"
                     className={cn("content__person-img", "_first")}
                  />
                  <p className={`${cn("content__text", "_first")}` + ' textInvite3'}>
                  {t('wheel')}
                  </p>
               </div>
            </div>
         )}
{step === 2 && (
            <div style={{display: 'flex', flexDirection:'column', width: '100%', height:'100%', position:'relative'}}>
               <div className={cn("greeting__body", "_first")} >


        <div className={cn("content__person-img", "_first")} ref={wheelRef}>
          <div
           className={cn("wheel", { spinning: isSpinning })}
         //   style={{
         //     transform: `rotate(${rotation}deg)`,
         //     transition: isSpinning ? "transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)" : "none",
         //     transformOrigin: "center", // Центр вращения
         //   }}
            
          >
            <img src="img/pages/home/menu/Wheel.png" style={{width: '389px', transform: `rotate(${rotation}deg)`,transition: isSpinning ? "transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)" : "none",transformOrigin: "center", border: '1px solid red' }} alt="Wheel" />
            <img src="img/global/spin.png" className={cn("greeting__next")} style={{width: '80px', position: 'absolute', top: '70vh', left: '45vw'}} alt="Spin" onClick={spin} />

          </div>
        </div>

        {/* <img src="img/global/spin.png" className={cn("greeting__next")} style={{width: '100px', marginTop: '600px'}} alt="Spin" onClick={spin} /> */}
        <img src="img/global/next-btn.svg" className={cn("greeting__next")} alt="Finish" onClick={fihish} />
      </div>
               {/* <img
                     src="img/pages/home/menu/Wheel.png"
                     className={cn("content__person-img", "_first")}
                  />
                                 <img
                  src="img/global/spin.png"
                  className={cn("greeting__next")}
                  alt="Далее"
                  onClick={spin}
               />
                                                <img
                  src="img/global/next-btn.svg"
                  className={cn("greeting__next")}
                  alt="Далее"
                  onClick={fihish}
               /> */}
               
            </div>
         )}
        
      </div>
   );
}

export default Wheel;
