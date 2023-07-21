import { forwardRef } from "react";
import format from "date-fns/format";

const NewDoc = (props, ref) => {
  const { newData, previewImage } = props;
  return (
    <>
      {newData?.map((item, id) => (
        <div className="main-resume-card" ref={ref} key={id}>
          <div className="resume-header">
            <div>
              <img
                className="header-image"
                width={150}
                height={150}
                src={previewImage}
                alt="dfg"
              />
            </div>
            <div className="head-section">
              <h1 className="header-title">{item.name}</h1>
              <p className="head-new-address">{item.addresses}</p>
              <div className="set-email-phone">
                <div className="head-contact">
                  <p>{item.email}|</p>
                </div>
                <div className="head-contact">
                  <p>{item.Phone}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="second-head-summary">
              <div>
                <ul className="new-list">
                  <li>
                    <h3>Professional summary</h3>
                  </li>
                </ul>
              </div>
              <div className="about-sumary">
                <p>{item.professionalSummary}</p>
              </div>
            </div>
            <div className="resume-section">
              <div>
                <ul className="new-list">
                  <li>
                    <h3>Work history</h3>
                  </li>
                </ul>
                <div className="resume-companyName">
                  <p>
                    {item?.companyName?.map((element) => (
                      <ul className="new-unorder-list">
                        <li className="company-designation">
                          {element.designation}
                        </li>
                        <li className="company-list-set">
                          {element.companyName}
                        </li>
                        <div className="new-list-order">
                          <li>
                            {element.from
                              ? format(new Date(element.from), "MMM-yyyy")
                              : null}
                          </li>
                          <li>
                            <p className="set-middle-para">To</p>
                          </li>
                          <li>
                            {element.to
                              ? format(new Date(element.to), "MMM-yyyy")
                              : null}
                          </li>
                        </div>
                      </ul>
                    ))}
                  </p>
                </div>
              </div>
              <div>
                <ul className="new-list">
                  <li>
                    <h3>Skills</h3>
                  </li>
                </ul>
                <div className="Skills-list">
                  <p>
                    {item?.skills?.map((element) => (
                      <ul>
                        <li>{element.skills}</li>
                      </ul>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <div className="education-section">
              <div>
                <ul className="new-list">
                  <li>
                    <h3>EDUCATION</h3>
                  </li>
                </ul>
              </div>
              <div className="education-list">
                <p>
                  {item?.education?.map((element) => (
                    <ul>
                      <li>{element.education}</li>
                    </ul>
                  ))}
                </p>
              </div>
            </div>

            <div className="education-section">
              <div>
                <ul className="new-list">
                  <li>
                    <h3>ACHIEVEMENTS</h3>
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  {item?.achievements?.map((element) => (
                    <ul>
                      <li>{element.achievements}</li>
                    </ul>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default forwardRef(NewDoc);
