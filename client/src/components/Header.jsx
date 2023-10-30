import React, { useContext, useCallback } from "react";
import { Web3ModalContext } from "../context/Web3ModalProvider";

const Header = () => {
  function ellipseAddress(address, width = 4) {
    return `${address?.slice(0, width + 2)}...${address?.slice(-width)}`;
  }

  const { account, connect, disconnect } = useContext(Web3ModalContext);

  const handleConnectWallet = useCallback(() => {
    connect();
  }, [connect]);

  const handleDisconnectWallet = useCallback(() => {
    disconnect();
  }, [disconnect]);

  return (
    
          <div>
            <span>
            {!account ? (
              <div onClick={handleConnectWallet}>
                NOT CONNECTED
              </div>
            ) : (
              <div onClick={handleDisconnectWallet}>{ellipseAddress(account)}</div>
            )}
            </span>
          </div>
  );
};

export default Header;
