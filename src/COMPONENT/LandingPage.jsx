import React, { useState } from "react";
import gif from "/Tick.gif";
import gifx from "/cancel.png";
const LandingPage = () => {
  const [Data, setData] = useState([
    {
      Plan: "FREE",
      PerMonth: 0,
      UserLimit: "Single User",
      Storage: "50 GB Storage",
      Project: "Unlimited Public Projects",
      CommunityAccess: " Community Access",
      PrivateProject: "Unlimited Private Projects",
      Support: "Dedicated Phone Support",
      Domain: "Free Subdomain",
      Gif: gif,
      png: gifx,
      Report: "Monthly Status Reports",
    },
    {
      Plan: "PLUS",
      PerMonth: 9,
      UserLimit: "5 User",
      Storage: "50 GB Storage",
      Project: "Unlimited Public Projects",
      CommunityAccess: " Community Access",
      PrivateProject: "Unlimited Private Projects",
      Support: "Dedicated Phone Support",
      Domain: "Free Subdomain",
      Report: "Monthly Status Reports",
      Gif: gif,
      png: gifx,
    },
    {
      Plan: "PRO",
      PerMonth: 49,
      UserLimit: "Unlimited User",
      Storage: "50 GB Storage",
      Project: "Unlimited Public Projects",
      CommunityAccess: " Community Access",
      PrivateProject: "Unlimited Private Projects",
      Support: "Dedicated Phone Support",
      Domain: "Free Subdomain",
      Report: "Monthly Status Reports",
      Gif: gif,
      png: gifx,
    },
  ]);

  return (
    <>
      {Data.map((Element) => (
        <div className="container-wrap">
          <div className="wrap ">
            <p className="Free-One">{Element.Plan}</p>
            <h2 className="Month-One">${Element.PerMonth}/month</h2>
            <p className="All-Font">
              <img src={gif} height={"20px"} />
              <span className="Gap">{Element.UserLimit}</span>
            </p>
            <p className="All-Font">
              <img src={gif} height={"20px"} />
              <span className="Gap">{Element.Storage}</span>
            </p>
            <p className="All-Font">
              <img src={gif} height={"20px"} />
              <span className="Gap">{Element.Project}</span>
            </p>
            <p className="All-Font">
              <img height={"15px"} src={Element.Plan === "FREE" ? gifx : gif} />
              <span
                className={Element.Plan === "FREE" ? "text-opacity Gap" : "Gap"}
              >
                {Element.CommunityAccess}
              </span>
            </p>
            <p className="All-Font">
              <img height={"15px"} src={Element.Plan === "FREE" ? gifx : gif} />
              <span
                className={Element.Plan === "FREE" ? "text-opacity Gap" : "Gap"}
              >
                {Element.PrivateProject}
              </span>
            </p>
            <p className="All-Font">
              <img height={"15px"} src={Element.Plan === "FREE" ? gifx : gif} />
              <span
                className={Element.Plan === "FREE" ? "text-opacity Gap" : "Gap"}
              >
                {Element.Support}
              </span>
            </p>
            <p className="All-Font">
              <img height={"15px"} src={Element.Plan === "FREE" ? gifx : gif} />
              <span
                className={Element.Plan === "FREE" ? "text-opacity Gap" : "Gap"}
              >
                {" "}
                {Element.Domain}
              </span>
            </p>
            <p className="All-Font">
              <img height={"15px"} src={Element.Plan != "PRO" ? gifx : gif} />
              <span
                className={Element.Plan != "PRO" ? "text-opacity Gap" : "Gap"}
              >
                {Element.Report}
              </span>
            </p>
            <div className="Button-Value">
              <button
                className={Element.Plan !== "PRO" ? "button" : "DarkButton"}
              >
                BUTTON
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LandingPage;
