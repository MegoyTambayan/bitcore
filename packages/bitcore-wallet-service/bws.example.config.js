module.exports = {
  basePath: '/bws/api',
  disableLogs: false,
  port: 3232,

  // Uncomment to make BWS a forking server
  // cluster: true,

  // Uncomment to set the number or process (will use the nr of availalbe CPUs by default)
  // clusterInstances: 4,

  // https: true,
  // privateKeyFile: 'private.pem',
  // certificateFile: 'cert.pem',
  ////// The following is only for certs which are not
  ////// trusted by nodejs 'https' by default
  ////// CAs like Verisign do not require this
  // CAinter1: '', // ex. 'COMODORSADomainValidationSecureServerCA.crt'
  // CAinter2: '', // ex. 'COMODORSAAddTrustCA.crt'
  // CAroot: '', // ex. 'AddTrustExternalCARoot.crt'

  storageOpts: {
    mongoDb: {
      uri: 'mongodb://127.0.0.1:27017/bws',
      dbname: 'bws'
    }
  },
  messageBrokerOpts: {
    //  To use message broker server, uncomment this:
    messageBrokerServer: {
      url: 'http://127.0.0.1:3380'
    }
  },
  blockchainExplorerOpts: {
    btc: {
      livenet: {
        url: 'https://api.bitcore.io'
      },
      testnet: {
        url: 'https://api.bitcore.io',
        regtestEnabled: false
      }
    },
    bch: {
      livenet: {
        url: 'https://api.bitcore.io'
      },
      testnet: {
        url: 'https://api.bitcore.io'
      }
    },
    eth: {
      livenet: {
        url: 'https://api-eth.bitcore.io'
      },
      testnet: {
        url: 'https://api-eth.bitcore.io'
      }
    },
    xrp: {
      livenet: {
        url: 'https://api-xrp.bitcore.io'
      },
      testnet: {
        url: 'https://api-xrp.bitcore.io'
      }
    },
    doge: {
      livenet: {
        url: 'https://api.bitcore.io'
      },
      testnet: {
        url: 'https://api.bitcore.io'
      }
    },
    ltc: {
      livenet: {
        url: 'https://api.bitcore.io'
      },
      testnet: {
        url: 'https://api.bitcore.io'
      }
    },
    socketApiKey: 'socketApiKey'
  },
  pushNotificationsOpts: {
    templatePath: 'templates',
    defaultLanguage: 'en',
    defaultUnit: 'btc',
    subjectPrefix: '',
    pushServerUrl: 'https://fcm.googleapis.com/fcm',
    authorizationKey: 'You_have_to_put_something_here'
  },
  fiatRateServiceOpts: {
    defaultProvider: 'BitPay',
    fetchInterval: 5 // in minutes
  },
  maintenanceOpts: {
    maintenanceMode: false
  },
  services: {
    buyCrypto: { simplexPromotion202002: false }
  },
  suspendedChains: [],
  staticRoot: '/tmp/static'
  // simplex: {
  //   sandbox: {
  //     apiKey: 'simplex_sandbox_api_key_here',
  //     api: 'https://sandbox.test-simplexcc.com',
  //     appProviderId: 'simplex_provider_id_here'
  //   },
  //   production: {
  //     apiKey: 'simplex_production_api_key_here',
  //     api: 'https://backend-wallet-api.simplexcc.com',
  //     appProviderId: 'simplex_provider_id_here'
  //   }
  // },
  // wyre: {
  //   sandbox: {
  //     apiKey: 'wyre_sandbox_api_key_here',
  //     secretApiKey: 'wyre_sandbox_secret_api_key_here',
  //     api: 'https://api.testwyre.com',
  //     widgetUrl: 'https://pay.testwyre.com',
  //     appProviderAccountId: 'wyre_provider_sandbox_account_id_here'
  //   },
  //   production: {
  //     apiKey: 'wyre_production_api_key_here',
  //     secretApiKey: 'wyre_production_secret_api_key_here',
  //     api: 'https://api.sendwyre.com',
  //     widgetUrl: 'https://pay.sendwyre.com/',
  //     appProviderAccountId: 'wyre_provider_production_account_id_here'
  //   }
  // },
  // changelly: {
  //   apiKey: 'changelly_api_key',
  //   secret: 'changelly_secret',
  //   api: 'https://api.changelly.com'
  // },
  // oneInch: {
  //   api: 'https://api.1inch.exchange',
  //   referrerAddress: 'one_inch_referrer_address', // ETH
  //   referrerFee: 'one_inch_referrer_fee', // min: 0; max: 3; (represents percentage)
  // },
  // To use email notifications uncomment this:
  // emailOpts: {
  //  host: '127.0.0.1',
  //  port: 25,
  //  ignoreTLS: true,
  //  subjectPrefix: '[Wallet Service]',
  //  from: 'wallet-service@bitcore.io',
  //  templatePath: 'templates',
  //  defaultLanguage: 'en',
  //  defaultUnit: 'btc',
  //  publicTxUrlTemplate: {
  //   btc: {
  //     livenet: 'https://bitpay.com/insight/#/BTC/mainnet/tx/{{txid}}',
  //     testnet: 'https://bitpay.com/insight/#/BTC/testnet/tx/{{txid}}',
  //   },
  //   bch: {
  //     livenet: 'https://bitpay.com/insight/#/BCH/mainnet/tx/{{txid}}',
  //     testnet: 'https://bitpay.com/insight/#/BCH/testnet/tx/{{txid}}',
  //   },
  //   eth: {
  //     livenet: 'https://etherscan.io/tx/{{txid}}',
  //     testnet: 'https://kovan.etherscan.io/tx/{{txid}}',
  //   },
  //   xrp: {
  //     livenet: 'https://xrpscan.com/tx/{{txid}}',
  //     testnet: 'https://test.bithomp.com/explorer//tx/{{txid}}',
  //   },
  //   doge: {
  //     livenet: 'https://blockchair.com/dogecoin/transaction/{{txid}}',
  //     testnet: 'https://sochain.com/tx/DOGETEST/{{txid}}',
  //  },
  //   ltc: {
  //     livenet: 'https://bitpay.com/insight/#/LTC/mainnet/tx/{{txid}}',
  //     testnet: 'https://bitpay.com/insight/#/LTC/testnet/tx/{{txid}}',
  //  }
  // },
  // },
  // To use sendgrid:
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  //
  //
  // //then add:
  // mailer: sgMail,
};
