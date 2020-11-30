import CartProvider from "@/context/Cart/CartContext";
import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}

export default MyApp
