/* eslint-disable no-console */
import { createContext, useEffect, useState } from 'react';
import { ReactProps } from 'types';
import { Web3Auth } from '@web3auth/web3auth';
import {
  WALLET_ADAPTERS,
  CHAIN_NAMESPACES,
  SafeEventEmitterProvider,
} from '@web3auth/base';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';
import { EthereumRpc } from 'utils';
import Web3 from 'web3';

const clientId =
  'BPnVZ7aHOOmlD_QGKd0P13dJkNVbyBJFTOAFtQN8hPv6SYHWXhJJtrFEBaGXcsmTVAmn5r3qCvajYsDAtA7sMWE'; // get from https://dashboard.web3auth.io

type ApplicationContextType = {
  provider: SafeEventEmitterProvider | null;
  web3Provider: Web3 | null;
  login: () => void;
  logout: () => void;
  signMessage: () => void;
  user: {} | null;
};

const ApplicationContext = createContext<ApplicationContextType>({
  provider: null,
  web3Provider: null,
  login: () => {},
  logout: () => {},
  signMessage: () => {},
  user: null,
});

const ApplicationProvider = ({ children }: ReactProps) => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null,
  );
  const [web3Provider, setWeb3Provider] = useState<Web3 | null>(null);
  const [user, setUser] = useState<{} | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: '0x1',
            rpcTarget: 'https://rpc.ankr.com/eth', // This is the public RPC we have added, please pass on your own endpoint while creating an app
          },
          uiConfig: {
            theme: 'dark',
            loginMethodsOrder: ['facebook', 'google'],
            appLogo: 'https://web3auth.io/images/w3a-L-Favicon-1.svg', // Your App Logo Here
          },
        });

        const openloginAdapter = new OpenloginAdapter({
          adapterSettings: {
            clientId,
            network: 'testnet',
            uxMode: 'popup',
            whiteLabel: {
              name: 'Kryptonomic',
              logoLight: 'https://kryptonomic.kamfeskaya.com/kryptonomic.png',
              logoDark: 'https://kryptonomic.kamfeskaya.com/kryptonomic.png',
              defaultLanguage: 'en',
              dark: true,
            },
          },
        });

        web3auth.configureAdapter(openloginAdapter);
        setWeb3auth(web3auth);

        await web3auth.initModal({
          modalConfig: {
            [WALLET_ADAPTERS.OPENLOGIN]: {
              label: 'openlogin',
              loginMethods: {
                reddit: {
                  showOnModal: false,
                  name: 'reddit',
                },
              },
            },
          },
        });

        if (web3auth.provider) {
          setProvider(web3auth.provider);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  useEffect(() => {
    if (provider) {
      //@ts-ignore
      const web3 = new Web3(provider);
      setWeb3Provider(web3);
    }
  }, [provider]);

  useEffect(() => {
    if (web3auth && web3Provider && web3Provider?.currentProvider) {
      web3Provider.eth.getAccounts().then((a) => {
        if (a.length > 0) {
          setUser((user) => ({ ...user, address: a[0] }));
        }
      });

      web3auth.getUserInfo().then(async (u) => {
        await setUser((user) => ({
          ...user,
          email: u.email,
          name: u.name,
        }));
      });
    }
  }, [web3Provider, web3auth]);

  const login = async () => {
    console.log('Lets do this');
    if (!web3auth) {
      console.log('web3auth not initialized yet');
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
  };

  const logout = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet');
      return;
    }
    await web3auth.logout();
    setProvider(null);
  };

  const signMessage = async () => {
    if (!provider) {
      console.log('provider not initialized yet');
      return;
    }
    const rpc = new EthereumRpc(provider);
    const signedMessage = await rpc.signMessage();
    console.log(signedMessage);
  };

  return (
    <ApplicationContext.Provider
      value={{
        provider,
        web3Provider: web3Provider,
        login,
        logout,
        signMessage,
        user,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export { ApplicationContext, ApplicationProvider };
