import "./App.css";
import { useMemo, useEffect } from "react";

import Minter from "./Minter";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getMathWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { ThemeProvider, createTheme } from "@material-ui/core";
//components
import NavbarComponent from "./components/NavbarComponent";
import Introduction from "./components/Introduction";
import FirstCollection from "./components/FirstCollection";
import Purpose from "./components/Purpose";
import SecondCollection from "./components/SecondCollection";
import WhySolana from "./components/WhySolana";
import ThirdCollection from "./components/ThirdCollection";
import Roadmap from "./components/Roadmap";
import FourthCollection from "./components/FourthCollection";
import FAQ from "./components/FAQ";
import FifthCollection from "./components/FifthCollection";
import TheTeam from "./components/TheTeam";
import Footer from "./components/Footer";
//bootstrap components
import { Button, Container, Row, Col } from "react-bootstrap";

//assets
import landingImg from "./assets/greenplanet.svg";
// aos library
import Aos from "aos";
import "aos/dist/aos.css";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const candyMachineId = process.env.REACT_APP_CANDY_MACHINE_ID
  ? new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID)
  : undefined;

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSolletWallet(),
      getMathWallet(),
    ],
    []
  );

  function toggleMenu() {
    const menu = document.getElementById("mobileNavContainer")!;
    menu.classList.toggle("open-menu");
    console.log("pressed");
  }
  //this aos is for the transition animations
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="mainComponent">
      <NavbarComponent />
      {/* landing component starts */}
      <div className="landingPageComponent">
        <Container>
          {/* first row starts  */}
          <Row>
            <Col xs={12} md={6} className="columns">
              <img src={landingImg} alt="" />
            </Col>
            <Col xs={12} md={6} className="columns">
              {" "}
              <Row className="columns  landingColumn d-flex justify-content-center">
                <div className="title">
                  {" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore neque cupiditate aliquid natus, magnam rerum aut dicta
                  dolores? Nisi numquam fugiat placeat delectus eveniet
                  obcaecati ad a fugit libero aliquam!
                </div>
              </Row>{" "}
              {/* <Row className="columns  landingColumn d-flex justify-content-center">
                <p className="para">
                  {" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore neque cupiditate aliquid natus, magnam rerum aut dicta
                  dolores? Nisi numquam fugiat placeat delectus eveniet
                  obcaecati ad a fugit libero aliquam!
                </p>
              </Row>{" "}
              <Row className="columns  landingColumn d-flex justify-content-center">
                <div className="title">
                  {" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore neque cupiditate aliquid natus, magnam rerum aut dicta
                  dolores? Nisi numquam fugiat placeat delectus eveniet
                  obcaecati ad a fugit libero aliquam!
                </div>
              </Row>{" "} */}{" "}
              <Col
                className="columns landingBtn d-flex justify-content-center"
                xs={12}
              >
                {" "}
                <Button variant="warning">Follow us on Twitter!</Button>{" "}
              </Col>
              <Col
                className="columns landingBtn d-flex justify-content-center"
                xs={12}
              >
                {" "}
                <Button variant="warning">Join the Discord!</Button>{" "}
              </Col>
            </Col>
          </Row>
          <div className="connectButton" data-aos="zoom-in">
            <ThemeProvider theme={theme}>
              <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                  <WalletDialogProvider>
                    <Minter
                      candyMachineId={candyMachineId}
                      connection={connection}
                      startDate={startDateSeed}
                      txTimeout={txTimeout}
                      rpcHost={rpcHost}
                    />
                  </WalletDialogProvider>
                </WalletProvider>
              </ConnectionProvider>
            </ThemeProvider>
          </div>
          {/* first row ends */}

          {/* second row ends */}
        </Container>
      </div>
      {/* landing component ends */}
      {/* introduction component */}
      <div data-aos="slide-up">
        <Introduction />
      </div>
      {/* <FirstCollection /> */}
      <div data-aos="fade-in">
        <Purpose />
      </div>
      {/* <SecondCollection /> */}
      <div data-aos="zoom-out">
        <WhySolana />
      </div>
      {/* <ThirdCollection /> */}
      <Roadmap />
      {/* <FourthCollection /> */}
      <FAQ />
      <FifthCollection />
      <div data-aos="fade-out">
        <TheTeam />
      </div>
      <Footer />
    </div>
  );
};

export default App;
