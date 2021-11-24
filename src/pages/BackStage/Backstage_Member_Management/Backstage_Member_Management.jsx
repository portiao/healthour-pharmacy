import './Backstage_Member_Management.css'
import Axios from 'axios'
import { useState, useEffect } from 'react'

function Backstage_Member_Management() {
  const [getMember, setGetMembers] = useState([])

  const getMembers = (e) => {
    Axios.get('http://localhost:3003/Backstage_Member_Management').then(
      (response) => {
        setGetMembers(response.data)
      }
    )
  }
  useEffect(() => {
    getMembers()
  }, [])

  return (
    <>
      <div className="Backstage-Member-Management">
        <div className="Backstage-Member-Management-search-area">
          <div className="Backstage-Member-Management-search">
            <input
              className="Backstage-Member-Management-search-input"
              type="text"
              placeholder="姓名查詢"
            />
            <button className="Backstage-Member-Management-search-button">
              <img
                src="http://localhost:3000/images/icon/magnifier.png"
                alt=""
              />
            </button>
          </div>

          <div className="Backstage-Member-Management-search">
            <input
              className="Backstage-Member-Management-search-input"
              type="text"
              placeholder="身分證字號查詢"
            />
            <button className="Backstage-Member-Management-search-button">
              <img
                src="http://localhost:3000/images/icon/magnifier.png"
                alt=""
              />
            </button>
          </div>
        </div>

        <table className="Backstage-Member-Management-memberlist">
          <tbody>
            <tr className="Backstage-Member-Management-table-title">
              <td className="Backstage-Member-Management-table-title-sid">
                編號
              </td>
              <td className="Backstage-Member-Management-table-title-name">
                姓名
              </td>
              <td className="Backstage-Member-Management-table-title-mail">
                信箱
              </td>
              <td className="Backstage-Member-Management-table-title-phone">
                電話
              </td>
              <td className="Backstage-Member-Management-table-title-id">
                身分證字號
              </td>
              <td className="Backstage-Member-Management-table-title-birthday">
                生日
              </td>
              <td
                className="Backstage-Member-Management-table-title-address"
                id="Backstage-Member-Management-table-title-address"
              >
                地址
              </td>
            </tr>
            {getMember.map((val, i) => {
              return (
                <tr
                  key={val.sid}
                  className="Backstage-Member-Management-table-list"
                >
                  <td className="Backstage-Member-Management-table-list-sid">
                    {val.sid}
                  </td>
                  <td className="Backstage-Member-Management-table-list-name">
                    {val.name}
                  </td>
                  <td className="Backstage-Member-Management-table-list-mail">
                    {val.email}
                  </td>
                  <td className="Backstage-Member-Management-table-list-phone">
                    {val.mobile}
                  </td>
                  <td className="Backstage-Member-Management-table-list-id">
                    {val.idNumber}
                  </td>
                  <td className="Backstage-Member-Management-table-list-birthday">
                    {val.birthday.substr(0, 10)}
                  </td>
                  <td
                    className="Backstage-Member-Management-table-list-address"
                    id="Backstage-Member-Management-table-list-address"
                  >
                    {val.address}
                  </td>

                  <td>
                    <div className="Backstage-Member-Management-table-list-buttons">
                      <a
                        href="#/"
                        className="Backstage-Member-Management-table-list-buttons-edit"
                      >
                        <div>
                          <img
                            src="http://localhost:3000/images/icon/edit.png"
                            alt=""
                          />
                        </div>
                      </a>
                      <a
                        href="#/"
                        className="Backstage-Member-Management-table-list-buttons-edit-delete"
                      >
                        <div>
                          <img
                            src="http://localhost:3000/images/icon/delete.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {getMember.map((val, i) => {
          return (
            <div
              key={val.sid}
              className="Backstage-Member-Management-mobile-memberlist"
            >
              <div className="Backstage-Member-Management-mobile-memberlist-cardline"></div>
              <div className="Backstage-Member-Management-mobile-memberlist-title">
                <ul>
                  <li
                    className="Backstage-Member-Management-mobile-memberlist-title-sid"
                    id="Backstage-Member-Management-mobile-memberlist-title-sid"
                  >
                    {val.sid}
                  </li>
                  <li className="Backstage-Member-Management-mobile-memberlist-title-mail">
                    信箱
                  </li>
                  <li className="Backstage-Member-Management-mobile-memberlist-title-phone">
                    電話
                  </li>
                  <li className="Backstage-Member-Management-mobile-memberlist-title-id">
                    身分證
                  </li>
                  <li className="Backstage-Member-Management-mobile-memberlist-title-birthday">
                    生日
                  </li>
                  <li className="Backstage-Member-Management-mobile-memberlist-title-address">
                    地址
                  </li>
                </ul>
              </div>
              <div className="Backstage-Member-Management-mobile-memberlist-info">
                <ul>
                  <li
                    className="Backstage-Member-Management-mobile-memberlist-info-name"
                    id="Backstage-Member-Management-mobile-memberlist-info-name"
                  >
                    {val.name}
                  </li>
                  <li className="Backstage-Member-Management-mobile-memberlist-info-mail">
                    {val.email}
                  </li>
                  <li className="Backstage-Member-Management-mobile-memberlist-info-phone">
                    {val.mobile}
                  </li>
                  <li className="Backstage-Member-Management-mobile-memberlist-info-id">
                    {val.idNumber}
                  </li>
                  <li className="Backstage-Member-Management-mobile-memberlist-info-birthday">
                    {val.birthday.substr(0, 10)}
                  </li>
                  <li className="Backstage-Member-Management-mobile-memberlist-info-address">
                    {val.address}
                  </li>
                </ul>
              </div>
              <div className="Backstage-Member-Management-mobile-memberlist-buttons">
                <a
                  href="#/"
                  className="Backstage-Member-Management-mobile-memberlist-buttons-edit"
                >
                  <div>
                    <img
                      src="http://localhost:3000/images/icon/edit.png"
                      alt=""
                    />
                  </div>
                </a>
                <a
                  href="#/"
                  className="Backstage-Member-Management-mobile-memberlist-buttons-delete"
                >
                  <div>
                    <img
                      src="http://localhost:3000/images/icon/delete.png"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Backstage_Member_Management
