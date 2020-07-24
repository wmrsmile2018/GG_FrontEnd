import { eventChannel } from 'redux-saga'
import { call, take, put } from 'redux-saga/effects';

import { NEW_WS, NEW_MESSAGE } from '../../constants';

const user_id1 = "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a10";

function initWebsocket() {
  return eventChannel(emitter => {
    // console.log(document.location.host);
    const ws = new WebSocket("ws://localhost:8000/ws?id=" + user_id1)

    ws.onopen = () => {
      console.log('WebSocket success')
      // ws.send('hello server')
      emitter({
        type: NEW_WS,
        payload: ws
      })
    }
    ws.onerror = (error) => {
      console.log('WebSocket error ' + error)
      console.dir(error)
    }

    ws.onmessage = (e) => {
      let data = null;
      let msg = null;
      data = e.data.split('\n');

      try {
        msg = JSON.parse(data[0])
        console.log(msg);
      } catch(e) {
        console.error(`Error parsing : ${e.data}`)
      }

      if (msg) {
        return emitter({
          type: NEW_MESSAGE,
          payload: {
            msg: msg
          }
        })
      }
    }

    // unsubscribe function
    return () => {
      console.log('Socket off')
    }
  })
}

export default function* wsSagas() {

  const channel = yield call(initWebsocket)

  while (true) {
      const action = yield take(channel)
      yield put(action)
    }
}
