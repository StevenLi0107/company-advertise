/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";

const OurClients = () => {
  const clientsList = useSelector((state) => state.adminReducer.clientsList);
  console.log("clientsList=", clientsList);
  return (
    <div className="OurClients-Container-module--cls2--2-EVq OurClients-Container-module--cls1--1kJDZ">
      <div className="OurClients-InnerContainer-module--cls2--2z1fX OurClients-InnerContainer-module--cls1--18V7B">
        {clientsList &&
          clientsList.map((client) => (
            <a className="OurClients-Company-module--cls2--3coqY OurClients-Company-module--cls1--1coVO">
              <div className="gatsby-image-wrapper">
                <div
                  aria-hidden="true"
                  style={{ width: "100%", paddingBottom: "10%" }}
                ></div>
                <img
                  //className="img"
                  aria-hidden="true"
                  src={`https://api.cowork.dev/data/img/${client.img}`}
                  alt={client.name}
                  style={{ width: 150 }}
                />
              </div>
            </a>
          ))}

        {/* <a className="OurClients-Company-module--cls2--3coqY OurClients-Company-module--cls1--1coVO">
          <div className="gatsby-image-wrapper">
            <div
              aria-hidden="true"
              style={{ width: "100%", paddingBottom: "30%" }}
            ></div>
            <img
              className="img"
              aria-hidden="true"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA3ElEQVQY02NgQAO6uroMBgYGYDaQ5tHT0/MGirUCcReQHQvE4iA5HR0dBiMjIwaCAGQgUBOMnQTEqcbGxly+vr6MQLY7EBcADeOFqSXKQCjNBMRZQNwMtCAb6spqfX19X5haoEWEDdTU1ATTGhoaHFpaWvFA13QB8Vognq+trb0DKJ8EkjczM2NkZWUlbGBERASYdnJyYoqOjvYF8pOBOCEqKioCiEF0dmhoKB9IDVCesIE5OTlgur6+njE7O7sUiCcAcWdmZmZTVlZWE1C+LT8/XwSkJjc3lxFdPwAtwzqI4ZtytgAAAABJRU5ErkJggg=="
              alt="логотип ПИК"
            />
          </div>
        </a> */}
        <a className="OurClients-Company-module--cls2--3coqY OurClients-Company-module--cls1--1coVO">
          <div className="gatsby-image-wrapper">
            <div
              aria-hidden="true"
              style={{ width: "100%", paddingBottom: "30%" }}
            ></div>
            <img
              className="img"
              aria-hidden="true"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA3ElEQVQY02NgQAO6uroMBgYGYDaQ5tHT0/MGirUCcReQHQvE4iA5HR0dBiMjIwaCAGQgUBOMnQTEqcbGxly+vr6MQLY7EBcADeOFqSXKQCjNBMRZQNwMtCAb6spqfX19X5haoEWEDdTU1ATTGhoaHFpaWvFA13QB8Vognq+trb0DKJ8EkjczM2NkZWUlbGBERASYdnJyYoqOjvYF8pOBOCEqKioCiEF0dmhoKB9IDVCesIE5OTlgur6+njE7O7sUiCcAcWdmZmZTVlZWE1C+LT8/XwSkJjc3lxFdPwAtwzqI4ZtytgAAAABJRU5ErkJggg=="
              alt="логотип ПИК"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default OurClients;
