import React from "react";
import data from "../data";
import { Header } from "./Header";

export function Certificates() {
  return <div className="Certificates">
    <Header headerIcon="medal" headerText="Certificates" primary={false} />
    <div className="">
      {data.certificates.map(certificate =>
        <div key={certificate.name} className="flex br-5px bg-white align-center mv-10px p-15px Certificates-item br-5px shadow-lg relative">
          <img src={certificate.logo} alt={certificate.name} height={100} width={100} className="mr-15px" />
          <div>
            <div className="heading-5 mb-10px text-bold">
              <a className="link" href={certificate.credential_url} target="_blank">
                {certificate.name}
              </a>
            </div>
            <div className="flex align-center mb-5px">
              <div className="body-2 mr-10px text-bold">
                {certificate.organization}
              </div>
            </div>
            <div className="body-2">
              {certificate.issue_date} - {certificate.expiration_date}
            </div>
          </div>
        </div>)}
    </div>
  </div>
}