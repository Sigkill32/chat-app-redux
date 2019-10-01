import { takeEvery, put } from "redux-saga/effects";
import { db } from "../config/firebaseConf";

async function f1() {
  const collection = await db.collection("Users").get();
  const docs = collection.docs.map(doc => doc.data());
  return docs.map(doc => ({
    name: doc.name,
    email: doc.email,
    message: doc.message,
    sub: doc.sub
  }));
}

function* getData() {
  let users = yield f1();
  yield put({ type: "ASYNC_FETCH_DATA", users: users });
}

export function* watchAsyncData() {
  yield takeEvery("FETCH_MESSAGES", getData);
}
