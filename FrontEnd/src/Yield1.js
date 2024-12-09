import { useState } from 'react';
import Navbar from './Navbar';


const Power = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');

  const [result, setResult] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const jsonData = {
      year: year,
      month: month,
    };

    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    });
    const data = await response.text();
    const parsedData = JSON.parse(data);
    const prediction = parsedData.Prediction[0];
    let formattedResult = prediction.toFixed(2);

    
    setResult(formattedResult);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 id="head">Electric Consumption Prediction</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-8">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="year">Year: </label>
                    </td>
                    <td className="col2">
                      <input
                        required
                        type="number"
                        id="year"
                        placeholder="Enter year"
                        className="input1"
                        value={year}
                        onChange={handleYearChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="mon">Month(1-12): </label>
                    </td>
                    <td className="col2">
                      <input
                        required
                        type="number"
                        step="any"
                        id="mon"
                        placeholder="Between 1 and 12"
                        className="input1"
                        min={1}
                        max={12}
                        value={month}
                        onChange={handleMonthChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-sm-4">
              <div className='out'>{result && <p>{result}</p>}</div>
              <input type="submit"defaultValue="Submit" id="submit" />
            </div>
          </div>
        </form>
        
      </div>

    </>
  );
};

export default Power;
