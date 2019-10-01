import { takeEvery, put, call } from "redux-saga/effects";
import { db, rsf } from "../config/firebaseConf";

function* getData() {
  let users = [];
  db.collection("Users")
    .get()
    .then(collection => {
      const docs = collection.docs.map(doc => doc.data());
      docs.map(doc =>
        users.push({
          name: doc.name,
          email: doc.email,
          message: doc.message,
          sub: doc.sub
        })
      );
      console.log(users);
      return users;
    });

  yield put({ type: "ASYNC_FETCH_DATA", data: users });
}

export function* watchAsyncData() {
  yield takeEvery("FETCH_MESSAGES", getData);
}
