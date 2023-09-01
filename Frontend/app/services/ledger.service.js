import axios from "axios";
import { getAuthorizationHeader } from "../utils/getAuthorizationHeader";
import qs from "qs";

export class LedgerService {
  instance;
  constructor(url) {
    this.instance = axios.create({
      baseURL: url,
      timeoutErrorMessage: "Time out!",
    });
  }
  saveLedger = async (baseUrl, residentId, data) => {
    return this.instance
      .post(`/${baseUrl}/${residentId}`, data, {
        headers: getAuthorizationHeader(),
      })
      .then((res) => res.data)
      .catch((err) => err);
  };
  getLedger = async (baseUrl) => {
    return this.instance
      .get(`/${baseUrl}`, {
        headers: getAuthorizationHeader(),
      })
      .then((res) => res.data)
      .catch((err) => err);
  };
  deleteLedger = async (id) => {
    return this.instance
      .delete(`/api/v1/account/ledger/addLedger/deleteOne/${id}`, {
        headers: getAuthorizationHeader(),
      })
      .then((res) => res.data)
      .catch((err) => err);
  };

}
