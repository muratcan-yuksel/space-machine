import "./App.css";
import { useMemo } from "react";

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

//bootstrap components
import { Button, Container, Row, Col } from "react-bootstrap";

//assets
import landingImg from "./assets/greenplanet.svg";

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

  return (
    <div className="mainComponent">
      <NavbarComponent />
      {/* landing component starts */}

      <Container>
        {/* first row starts  */}
        <Row>
          <Col xs={12} md={6} className="columns">
            <img src={landingImg} alt="" />
          </Col>
          <Col xs={12} md={6} className="columns">
            {" "}
            <Row className="columns title landingColumn d-flex justify-content-center">
              <h3>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                neque cupiditate aliquid natus, magnam rerum aut dicta dolores?
                Nisi numquam fugiat placeat delectus eveniet obcaecati ad a
                fugit libero aliquam!
              </h3>
            </Row>{" "}
            <Row className="columns para landingColumn d-flex justify-content-center">
              <p>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                neque cupiditate aliquid natus, magnam rerum aut dicta dolores?
                Nisi numquam fugiat placeat delectus eveniet obcaecati ad a
                fugit libero aliquam!
              </p>
            </Row>{" "}
            <Row className="columns title landingColumn d-flex justify-content-center">
              <h4>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                neque cupiditate aliquid natus, magnam rerum aut dicta dolores?
                Nisi numquam fugiat placeat delectus eveniet obcaecati ad a
                fugit libero aliquam!
              </h4>
            </Row>{" "}
            <div className="connectButton">
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
          </Col>
        </Row>
        {/* first row ends */}
        <Row>
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
        </Row>
        {/* second row ends */}
      </Container>
      {/* landing component ends */}
      {/* introduction component */}
      <Introduction />
    </div>
  );
};

export default App;
