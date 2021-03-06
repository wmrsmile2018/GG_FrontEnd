import React, {Component} from 'react';
import { connect } from 'react-redux';

import History from '../../components/history/index';
import Profit from '../../components/profit/index';
import Statics from '../../components/statics/index';
import InputS from '../../components/inputSubmit/index';
import Graphic from '../../components/graphic/index';
import AddPaymentCard from '../../components/addPaymentCard/index';

import getHistory from '../../modules/history';

import { setPath } from '../../redux/actions/actionPath.js';

// const currentDateTime = new Date();
// const startTimeOfCurrentYear = (new Date(currentDateTime.getFullYear(), 0, 1)).getTime();
// const currentTime = currentDateTime.getTime();
// const pastTimeOfStartCurrentYear = currentTime - startTimeOfCurrentYear;
// const hourOfMillisecs = 3600000;
// const hoursOfOneWeek = 168;

const base = 1577836800; // когда пользователь впервые получил деньги 01/01/2020 03:00:00

const Data = [
  {
    "number": 1,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": 400,
    "timestamp": 1585190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 2,
    "id_history": "5e8a2987856e68b2fd62605b",
    "id_user": "5e8a29876fa50f774116f06e",
    "id_command": "5e8a29879b0ebd78cb436d9e",
    "profit": 1500,
    "timestamp": 1586190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e8a2987a4f04c6a12d532a2",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873e702a53d6b05ba3",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987b5de9651783d4fcb",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987ec868c92d1b28f32",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 3,
    "id_history": "5e8a29877eac29d29268b6ca",
    "id_user": "5e8a29873aed3a85a7667c7f",
    "id_command": "5e8a298775904164724fb18a",
    "profit": 600,
    "timestamp": 1587190413,
    "score": "16:23",
    "isWin": false,
    "team1": [
      {
        "id_user": "5e8a29874ff0c79304a514c7",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29870a55bf77b831721f",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a298774edac8e273e1e12",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a298760a9d78881aa3727",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 4,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": 800,
    "timestamp": 1597190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 5,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": 2000,
    "timestamp": 1697190413,
    "score": "16:23",
    "isWin": false,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 6,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": 4000,
    "timestamp": 1797190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 7,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": 100,
    "timestamp": 1897190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 8,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": 500,
    "timestamp": 1997190413,
    "score": "16:23",
    "isWin": false,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 9,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": 400,
    "timestamp": 2007190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 10,
    "id_history": "5e8a2987856e68b2fd62605b",
    "id_user": "5e8a29876fa50f774116f06e",
    "id_command": "5e8a29879b0ebd78cb436d9e",
    "profit": 1000,
    "timestamp": 2017190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e8a2987a4f04c6a12d532a2",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873e702a53d6b05ba3",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987b5de9651783d4fcb",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987ec868c92d1b28f32",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 11,
    "id_history": "5e8a29877eac29d29268b6ca",
    "id_user": "5e8a29873aed3a85a7667c7f",
    "id_command": "5e8a298775904164724fb18a",
    "profit": -2000,
    "timestamp": 2027190413,
    "score": "16:23",
    "isWin": false,
    "team1": [
      {
        "id_user": "5e8a29874ff0c79304a514c7",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29870a55bf77b831721f",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a298774edac8e273e1e12",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a298760a9d78881aa3727",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 12,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": -200,
    "timestamp": 2037190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 13,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": -1000,
    "timestamp": 2047190413,
    "score": "16:23",
    "isWin": false,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 14,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": 1000,
    "timestamp": 2057190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 15,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": 100,
    "timestamp": 2067190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 16,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": 2000,
    "timestamp": 2077190413,
    "score": "16:23",
    "isWin": false,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 17,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": 200,
    "timestamp": 2087190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 18,
    "id_history": "5e8a2987856e68b2fd62605b",
    "id_user": "5e8a29876fa50f774116f06e",
    "id_command": "5e8a29879b0ebd78cb436d9e",
    "profit": -1000,
    "timestamp": 2097190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e8a2987a4f04c6a12d532a2",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873e702a53d6b05ba3",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987b5de9651783d4fcb",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987ec868c92d1b28f32",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 19,
    "id_history": "5e8a29877eac29d29268b6ca",
    "id_user": "5e8a29873aed3a85a7667c7f",
    "id_command": "5e8a298775904164724fb18a",
    "profit": 500,
    "timestamp": 2107190413,
    "score": "16:23",
    "isWin": false,
    "team1": [
      {
        "id_user": "5e8a29874ff0c79304a514c7",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29870a55bf77b831721f",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a298774edac8e273e1e12",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a298760a9d78881aa3727",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 20,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": 700,
    "timestamp": 2117190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 21,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": -700,
    "timestamp": 2127190413,
    "score": "16:23",
    "isWin": false,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 22,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": 100,
    "timestamp": 2137190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 23,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": 1000,
    "timestamp": 2147190413,
    "score": "16:23",
    "isWin": true,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
  {
    "number": 24,
    "id_history": "5e8a2987c21ec6922e6bd101",
    "id_user": "5e8a2987e5c916d96bd9fd03",
    "id_command": "5e8a2987460df88378760144",
    "profit": 2000,
    "timestamp": 2157190413,
    "score": "16:23",
    "isWin": false,
    "team1": [
      {
        "id_user": "5e8a2987ffd3a96ee6e483dd",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a2987b145d37943eba877",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "team2": [
      {
        "id_user": "5e8a2987ec982528621bb3c4",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_user": "5e8a29873b92b7cf4aa46d2e",
        "photo": "http://placehold.it/32x32"
      }
    ]
  },
];

///////////////////
// const days = {
//   "Mon": 1,
//   "Tue": 2,
//   "Wed": 3,
//   "Thu": 4,
//   "Fri": 5,
//   "Sat": 6,
//   "Sun": 7
// }

// const diffDaysFirstWeek = (unixTimestamp) => {
//   const date = new Date(startTimeOfCurrentYear);
//   const firstDayOfTheYear = date.getDate();
//   return (8 - firstDayOfTheYear) % 7;
// }
// const currentWeek = () => {
//   const currentDay = Math.ceil(pastTimeOfStartCurrentYear / hourOfMillisecs / 24);
//   return (currentDay - diffDaysFirstWeek()) / 7;
// }
///////////////////
const getDiffYear = (unixTimestampBase, unixTimestampCurrent) => {
  const date1 = new Date(unixTimestampBase * 1000);
  const date2 = new Date(unixTimestampCurrent * 1000);
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  return year2 - year1;
}

const getDiffHalvesYear = (unixTimestampBase, unixTimestampCurrent) => {
  const date1 = new Date(unixTimestampBase * 1000);
  const date2 = new Date(unixTimestampCurrent * 1000);
  const month1 = date1.getMonth() + 1;
  const year1 = date1.getFullYear();
  const month2 = date2.getMonth() + 1;
  const year2 = date2.getFullYear();
  return (Math.floor((month2 - month1) / 6) + (year2 - year1) * 100);
}

const getDiffMonth = (unixTimestampBase, unixTimestampCurrent) => {
  const date1 = new Date(unixTimestampBase * 1000);
  const date2 = new Date(unixTimestampCurrent * 1000);
  const month1 = date1.getMonth() + 1;
  const year1 = date1.getFullYear();
  const month2 = date2.getMonth() + 1;
  const year2 = date2.getFullYear();
  return (month2 - month1 + (year2 - year1) * 100);
}

const getDiffWeek = (unixTimestampBase, unixTimestampCurrent) => {
  const diff = unixTimestampCurrent - unixTimestampBase;
  return Math.floor(diff / 60 / 60 / 24 / 7) + 1;
}

const getDiffDay = (unixTimestampBase, unixTimestampCurrent) => {
  const diff = unixTimestampCurrent - unixTimestampBase;
  return Math.floor(diff / 60 / 60 / 24) + 1;
}

const getDate1 = (unixTimestamp) => {
  const currentDate = new Date(unixTimestamp * 1000);
  return (currentDate.getDate() + "/" +
      (currentDate.getMonth() + 1)
      + "/" + currentDate.getFullYear());
}

const getDate2 = (unixTimestamp) => {
  const currentDate = new Date(unixTimestamp * 1000);
  return (currentDate.getMonth() + 1 + "/" + currentDate.getFullYear());
}

const getDate3 = (unixTimestamp) => {
  const currentDate = new Date(unixTimestamp * 1000);
  return (currentDate.getFullYear());
}

///////////////////

const fillXAxisWeek = (base, objs) => {
  let sum = 0;
  let flag = -1;
  const times = objs.map(value => value.timestamp).sort();
  const XAxis = [], YAxis = [];
  let number = -1;
  for (let i = 0; i < times.length; i++) {
    const diff = getDiffWeek(base, times[i])
    if (diff !== flag) {
      flag = diff;
      if (sum !== 0) {
        YAxis.push(sum);
      }
      XAxis.push(diff);
    }
    sum += objs.filter(val => val.timestamp === times[i])[0].profit;
    if (objs.length > 1) {
      number = objs.filter(val => val.timestamp === times[i])[0].number
      objs = objs.filter(val => val.number !== number);
    }
  }
  YAxis.push(sum);
  return {XAxis, YAxis};
}

const fillXAxis = (base, objs, funDiff, funShow) => {
  let sum = 0;
  let flag = -1;
  const times = objs.map(value => value.timestamp).sort();
  const XAxis = [], YAxis = [];
  let number = -1;
  for (let i = 0; i < times.length; i++) {
    const diff = funDiff(base, times[i]);
    if(diff !== flag) {
      flag = diff;
      if (sum !== 0) {
        YAxis.push(sum);
      }
      XAxis.push(funShow(times[i]));
    }
    sum += objs.filter(val => val.timestamp === times[i])[0].profit;
    if (objs.length > 1) {
      number = objs.filter(val => val.timestamp === times[i])[0].number
      objs = objs.filter(val => val.number !== number);
    }
  }
  YAxis.push(sum);
  return {XAxis, YAxis};
}
///////////////////

class PersonalPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      showHGames: true,
      showHFinances: false,
      showMMoney: false,

      activeD: true,
      activeW: false,
      activeM: false,
      activeHY: false,
      activeY: false,

      showButtons: 'none',
      YAxis: [],
      XAxis: []
    }
    this.showYears = this.showYears.bind(this);
    this.showHalvesYear = this.showHalvesYear.bind(this);
    this.showMonths = this.showMonths.bind(this);
    this.showWeeks = this.showWeeks.bind(this);
    this.showDays = this.showDays.bind(this);
    this.handleOnClickMMoney = this.handleOnClickMMoney.bind(this);
    this.handleOnClickHGames = this.handleOnClickHGames.bind(this);
    this.handleOnClickHFinances = this.handleOnClickHFinances.bind(this);
  }

  componentDidMount() {
    this.showDays()
    this.props.setPath(getHistory().location.pathname);
  }

  handleOnClickHGames() {
    this.setState({
      showHGames: true,
      showHFinances: false,
      showMMoney: false,
      showButtons: 'none'
    })
  }

  handleOnClickHFinances() {
    this.setState({
      showHGames: false,
      showHFinances: true,
      showMMoney: false,
      showButtons: 'block'
    })
  }

  handleOnClickMMoney() {
    this.setState({
      showHGames: false,
      showHFinances: false,
      showMMoney: true,
      showButtons: 'block'
    })
  }

  showDays() {
    const {XAxis, YAxis} = fillXAxis(base, Data, getDiffDay, getDate1);
    this.setState({
      XAxis: XAxis,
      YAxis: YAxis,
      activeD: true,
      activeW: false,
      activeM: false,
      activeHY: false,
      activeY: false,
    })
  }

  showWeeks() {
    const {XAxis, YAxis} = fillXAxisWeek(base, Data);
    this.setState({
      XAxis: XAxis,
      YAxis: YAxis,
      activeD: false,
      activeW: true,
      activeM: false,
      activeHY: false,
      activeY: false,
    })
  }

  showMonths() {
    const {XAxis, YAxis} = fillXAxis(base, Data, getDiffMonth, getDate2);
    this.setState({
      XAxis: XAxis,
      YAxis: YAxis,
      activeD: false,
      activeW: false,
      activeM: true,
      activeHY: false,
      activeY: false,
    })
  }

  showHalvesYear() {
    const {XAxis, YAxis} = fillXAxis(base, Data, getDiffHalvesYear, getDate2);
    this.setState({
      XAxis: XAxis,
      YAxis: YAxis,
      activeD: false,
      activeW: false,
      activeM: false,
      activeHY: true,
      activeY: false,
    })
  }

  showYears() {
    const {XAxis, YAxis} = fillXAxis(base, Data, getDiffYear, getDate3);
    this.setState({
      XAxis: XAxis,
      YAxis: YAxis,
      activeD: false,
      activeW: false,
      activeM: false,
      activeHY: false,
      activeY: true,
    })
  }


  render() {
    const { showHFinances, showHGames, showMMoney } = this.state;
    const { activeD, activeW, activeM, activeHY, activeY } = this.state;
    const displayF = showHFinances ? {display: "block"} : {display: "none"};

    return (
      <div className="personalPage">
        <div className="personalPage__header">
          <div className="personalPage__header-top">
            <InputS type="submit" classN="personalPage"
              actionOnClick={this.handleOnClickHGames}
              active={this.state.showHGames}
              >
              <p>Игры</p>
            </InputS>
            <InputS type="submit"  classN="personalPage"
              actionOnClick={this.handleOnClickHFinances}
              active={!showHGames}
              >
              <p>Финансы</p>
            </InputS>
          </div>
          <div className="personalPage__header-bottom">
            <InputS type="submit" classN="personalPage"
              display={this.state.showButtons} active={showHFinances}
              actionOnClick={this.handleOnClickHFinances}
              >
              <p>Статистика</p>
            </InputS>
            <InputS type="submit" classN="personalPage"
              display={this.state.showButtons} active={showMMoney}
              actionOnClick={this.handleOnClickMMoney}
              >
              <p>Управление деньгами</p>
            </InputS>
          </div>
        </div>

        <div className="personalPage__graphic" style={displayF}>
          <Graphic XAxis={this.state.XAxis} YAxis={this.state.YAxis}/>
          <div className="personalPage__chooseInterval">
            <InputS type="submit" classN="personalPage"
              actionOnClick={this.showDays} active={activeD}
              >
              <p>день</p>
            </InputS>
            <InputS type="submit" value="неделя" classN="personalPage"
              actionOnClick={this.showWeeks} active={activeW}
              >
              <p>неделя</p>
            </InputS>
            <InputS type="submit" value="месяц" classN="personalPage"
              actionOnClick={this.showMonths} active={activeM}
              >
              <p>месяц</p>
            </InputS>
            <InputS type="submit" value="6 мес" classN="personalPage"
              actionOnClick={this.showHalvesYear} active={activeHY}
              >
              <p>де6 мес.</p>
            </InputS>
            <InputS type="submit" value="12 мес." classN="personalPage"
              actionOnClick={this.showYears} active={activeY}
              >
              <p>12 мес.</p>
            </InputS>
          </div>
        </div>

        <Statics
          visibility={showHGames}
          classN="personalPage"
          kills="12649"
          deaths="7344"
          matchesPlayed="100"
          mathcesWon="23"
          roundsPlayed="7100"
          roundsWon="3213"
          mvp="849"
          winRate="55"
        />

        <History visibility={showHGames} classN="personalPage" response={Data}/>
        <Profit visibility={showHFinances} classN="personalPage" response={Data}/>
        <AddPaymentCard visibility={showMMoney} classN="personalPage"/>
      </div>
    )
  }
}

export default connect(state => ({}), { setPath })(PersonalPage);
