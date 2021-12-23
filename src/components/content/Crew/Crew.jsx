import React from 'react';
import './Crew.scss';
const Crew = () => {
  return (
    <>
      <div className="cast">
        <div className="div-title">Cast</div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th className="head">Department</th>
              <th className="head">Job</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={'http://placehold.it/54x81'} alt="" />
              </td>
              <td>Ryan Reynold</td>
              <td>Actor</td>
              <td>Lead for entire movie</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Crew;
