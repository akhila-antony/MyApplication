import React from 'react'
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'
import './Users.css';
const rows = [
  {
    description: "Description",
    completionDate: "22-11-2020",
    owner: "Akhila",
    userId: 234
  },
  {
    description: "Test",
    completionDate: "25-12-2020",
    owner: "Akhil",
    userId: 204
  },
  {
    description: "New datas are populated",
    completionDate: "25-09-2020",
    owner: "Anila",
    userId: 334
  },
  {
    description: "This is a test description",
    completionDate: "03-11-2020",
    owner: "Anila",
    userId: 356
  },
  {
    description: "Dummy description",
    completionDate: "22-02-2020",
    owner: "Anila",
    userId: 123
  }
];
const FullUsers = () => (

  <div>
    {/* <table>
      <tr>
        <th>Completion Date</th>
        <th>Owner</th>
        <th>Description</th>
      </tr>
      {
        rows.map(row => (
          <tr key={row.userId}>
            <Link key={row.userId} to={`/users/${row.userId}`} style={{ textDecoration: "none" }}>
              <td>{row.completionDate}</td>
              <td>
                {row.owner}
              </td>
              <td>{row.description}</td>
            </Link>
          </tr>
        ))
      }
    </table> */}
    <table>
      <tr>
        <th>Completion Date</th>
        <th>Owner</th>
        <th>Description</th>
        <th></th>
      </tr>
      {
        rows.map((row) => {
          return (
            <tr>
              <td>{row.completionDate}</td>
              <td>{row.owner}</td>
              <td>{row.description}</td>
              <td>
                <Link key={row.userId} to={`/users/info`}>
                  Open
                </Link>
              </td>
            </tr>
          )
        })
      }
    </table>
  </div>
)

export default FullUsers
