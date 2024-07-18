// import { useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
// import { useAppSelector } from './redux/hook';
function App() {
  // const cart = useAppSelector((state) => state.cart.cartItems);
 
  // useEffect(() => {
  //   const haveCartItem = cart.length > 0;

  //   const handlePageRefresh = (event: any) => {
  //     event.preventDefault();
  //     if (haveCartItem) {
  //       const message = "Are you confirm to leave? If so, your cart will be empty!";
  //       return message;
  //     }
  //   };

  //   window.addEventListener("beforeunload", handlePageRefresh);

  //   return () => {
  //     window.removeEventListener("beforeunload", handlePageRefresh);
  //   };
  // }, [cart]);

  return (
    <>
      <MainLayout/>
    </>
  )
}

export default App
