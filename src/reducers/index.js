import { combineReducers } from "redux";
import formFields from "./formFields";
import queue from "./queue";
import sendedTable from "./sendedTable";

const rootreducer = combineReducers({ formFields, queue, sendedTable });

export default rootreducer;
