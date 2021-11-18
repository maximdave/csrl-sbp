/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Requests.css";
import {
  TransferOfSharesForm,
  TransferHeader,
  TransferTitle,
} from "./requestForms/TransferOfSharesForm";
import {
  DematRequestForm,
  DematHeader,
  DematTitle,
} from "./requestForms/DematRequestForm";
import {
  OtherRelevantRequestForm,
  OtherRelevantRequestHeader,
  OtherRelevantRequestTitle,
} from "./requestForms/OtherRelevantRequestForm";
import {
  TransmisionOfSharesForm,
  TransmisionHeader,
  TransmisionTitle,
} from "./requestForms/TransmisionOfSharesForm";
import {
  OutstandingDividendsForm,
  OutstandingDividendsHeader,
  OutstandingDividendsTitle,
} from "./requestForms/OutstandingDividendsForm";
import {
  ConsolidationOfAccounts,
  ConsolidationOfAccountsHeader,
  ConsolidationOfAccountsTitle,
} from "./requestForms/ConsolidationOfAccounts";
import {
  StatementOfAccount,
  StatementOfAccountHeader,
  StatementOfAccountTitle,
} from "./requestForms/StatementOfAccount";
import {
  ChangeOfAddressForm,
  ChangeOfAddressHeader,
  ChangeOfAddressTitle,
} from "./requestForms/ChangeOfAddressForm";
import {
  SubmitBankerConfirm,
  SubmitBankerConfirmHeader,
  SubmitBankerConfirmTitle,
} from "./requestForms/SubmitBankerConfirm";
import {
  SignatureMandateForm,
  SignatureMandateHeader,
  SignatureMandateTitle,
} from "./requestForms/SignatureMandateForm";
import {
  ChangeOfNameFormCorporate,
  ChangeOfNameHeaderC,
  ChangeOfNameTitle,
} from "./requestForms/ChangeOfNameFormCorporate";
import {
  ChangeOfNameFormIndividual,
  ChangeOfNameHeaderI,
  ChangeOfNameTitleI,
} from "./requestForms/ChangeOfNameFormIndividual";
import {
  CorrectionOfNameForm,
  CorrectionOfNameHeader,
  CorrectionOfNameTitle,
} from "./requestForms/CorrectionOfNameForm";

const Requests = () => {
  // const [image1, setImage1] = useState();

  const onClick = () => {
    console.log("I was clicked");
    createRequest();
  };
  const [header, setHeader] = useState(<div>{DematHeader}</div>);
  const [title, setTitle] = useState(<div>{DematTitle} </div>);
  const [requestFiles, setRequestFiles] = useState([]);
  const files = React.useRef([]);
  const [form1, setForm1] = useState(
    <DematRequestForm
      onClick={onClick}
      setRequestFiles={(e) => {
        files.current = e.target.files;
      }}
    />
  );

  // console.log("Tiltile:::::", title);
  const [shareholderCHN, setShareholderCHN] = useState("");
  const [shareholderName, setShareholderName] = useState("");
  //
  const createRequest = async (e) => {
    // e.preventDefault();

    const config = {
      header: {
        "Content-type": "application/json",
      },
    };
    try {
      const formData = new FormData();
      formData.append("shareholderCHN", shareholderCHN);
      formData.append("shareholderName", shareholderName);
      console.log(files.current);
      for (let i = 0; i < files.current.length; i++) {
        formData.append("requestFiles", files.current[i]);
      }
      formData.append("requestType", title);
      const { data } = await axios.post(
        `http://localhost:5000/sbp/createrequest`,
        formData,
        config
      );
      console.log("data:::::", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="request-card">
      <div className="card-head">
        {header}
        <input
          type="text"
          placeholder="Shareholder’s fullname"
          onChange={(e) => setShareholderName(e.target.value)}
          value={shareholderName}
        />
        <input
          type="text"
          placeholder="Input Shareholder’s CHN"
          onChange={(e) => setShareholderCHN(e.target.value)}
          value={shareholderCHN}
        />
      </div>
      <div className="card-content">
        {form1}
        {/* <div className="line" /> */}
        <div className="right">
          <h3>Other Requests</h3>

          <p
            className="right-text"
            onClick={() => {
              setForm1(
                <DematRequestForm
                  onClick={onClick}
                  setRequestFiles={(e) => setRequestFiles(e.target.files)}
                />
              );
              setHeader(DematHeader);
              setTitle(<div>{DematTitle} </div>);
            }}
          >
            Demat Request
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(
                <TransferOfSharesForm
                  onClick={onClick}
                  setRequestFiles={(e) => setRequestFiles(e.target.files)}
                />
              );
              setHeader(TransferHeader);
              setTitle(<div>{TransferTitle} </div>);
            }}
          >
            Transfer of Shares Request
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(
                <CorrectionOfNameForm
                  onClick={onClick}
                  setRequestFiles={(e) => setRequestFiles(e.target.files)}
                />
              );
              setHeader(CorrectionOfNameHeader);
              setTitle(<div>{CorrectionOfNameTitle} </div>);
            }}
          >
            Correction of Name Request
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(
                <ChangeOfNameFormIndividual
                  onClick={onClick}
                  setRequestFiles={(e) => setRequestFiles(e.target.files)}
                />
              );
              setHeader(ChangeOfNameHeaderI);
              setTitle(<div>{ChangeOfNameTitleI} </div>);
            }}
          >
            Request For Change Of Name Individual
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(
                <ChangeOfNameFormCorporate
                  onClick={onClick}
                  setRequestFiles={(e) => setRequestFiles(e.target.files)}
                />
              );
              setHeader(ChangeOfNameHeaderC);
              setTitle(<div>{ChangeOfNameTitle} </div>);
            }}
          >
            Request For Change Of Name Coporates
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(
                <SignatureMandateForm
                  onClick={onClick}
                  setRequestFiles={(e) => setRequestFiles(e.target.files)}
                />
              );
              setHeader(SignatureMandateHeader);
              setTitle(<div>{SignatureMandateTitle} </div>);
            }}
          >
            Request For Signature Mandate
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(
                <SubmitBankerConfirm
                  onClick={onClick}
                  setRequestFiles={(e) => setRequestFiles(e.target.files)}
                />
              );
              setHeader(SubmitBankerConfirmHeader);
              setTitle(<div>{SubmitBankerConfirmTitle} </div>);
            }}
          >
            Submission of Banker's Confirmation Letters
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(
                <ChangeOfAddressForm
                  onClick={onClick}
                  setRequestFiles={(e) => setRequestFiles(e.target.files)}
                />
              );
              setHeader(ChangeOfAddressHeader);
              setTitle(<div>{ChangeOfAddressTitle} </div>);
            }}
          >
            Request for Change of Address
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(
                <StatementOfAccount
                  onClick={onClick}
                  setRequestFiles={(e) => setRequestFiles(e.target.files)}
                />
              );
              setHeader(StatementOfAccountHeader);
              setTitle(<div>{StatementOfAccountTitle} </div>);
            }}
          >
            Request for Statement Of Account
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(
                <ConsolidationOfAccounts
                  onClick={onClick}
                  setRequestFiles={(e) => setRequestFiles(e.target.files)}
                />
              );
              setHeader(ConsolidationOfAccountsHeader);
              setTitle(<div>{ConsolidationOfAccountsTitle} </div>);
            }}
          >
            Request for Consolidating Accounts
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(
                <TransmisionOfSharesForm
                  onClick={onClick}
                  setRequestFiles={(e) => setRequestFiles(e.target.files)}
                />
              );
              setHeader(TransmisionHeader);
              setTitle(<div>{TransmisionTitle} </div>);
            }}
          >
            Request for Transmision Of Shares
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(
                <OutstandingDividendsForm
                  onClick={onClick}
                  setRequestFiles={(e) => setRequestFiles(e.target.files)}
                />
              );
              setHeader(OutstandingDividendsHeader);
              setTitle(<div>{OutstandingDividendsTitle} </div>);
            }}
          >
            Request for Outstanding Dividends
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(
                <OtherRelevantRequestForm
                  onClick={onClick}
                  setRequestFiles={(e) => setRequestFiles(e.target.files)}
                />
              );
              setHeader(OtherRelevantRequestHeader);
              setTitle(<div>{OtherRelevantRequestTitle} </div>);
            }}
          >
            Other Relevant Requests
          </p>
        </div>
      </div>
    </div>
  );
};

export default Requests;
