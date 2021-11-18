import React from "react";
import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
export const ConsolidationOfAccounts = (props) => {
  const fileRef = React.useRef(null);

  return (
    <div className="left">
      <div className="requirements">
        <hr className="horizontal-line" />
        <ul className="ulllll">
          <li>Broker’s Indemnity</li>
          <li>Banker’s Confirmation of Signature </li>
          <li>Request Letter</li>
          <li>Sworn Affidavit</li>
          <li>Proof of Purchase</li>
          <li>CSCS Statement of Account</li>
          <li>
            Means of Identification in the new name i.e National ID Card,
            Driver’s License, International Passport or Permanent Voter’s Card
          </li>
          <li>Newspaper Publication</li>
        </ul>
      </div>
      <div className="file-input">
        <input
          type="file"
          ref={fileRef}
          multiple
          onChange={props?.setRequestFiles}
        />
        <span className="button">SELECT</span>
        <span className="label" data-js-label>
          png, jpeg (=300KB)
        </span>
      </div>
      <h6>Click the button below to make payment</h6>

      <div className="btn-container">
        <button className="btn-container1">PAY NOW</button>
        <button className="btn-container2" onClick={props?.onClick}>
          SUBMIT REQUEST
        </button>
      </div>
    </div>
  );
};
export const ConsolidationOfAccountsTitle = <h3>Consolidation of Accounts</h3>;

export const ConsolidationOfAccountsHeader = (
  <div>
    {ConsolidationOfAccountsTitle}
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
