import NavbarComponent from "@/components/navbar/NavbarComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavbarComponent />
      <Component {...pageProps} />
    </>
  );
}
