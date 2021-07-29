import { Link } from "react-router-dom";

const Cost1 = () => {
  return (
    <div className="table_btn">
      <Link to="/">
        <button>Ortga</button>
      </Link>
      <table border="1" className="table">
        <tr>
          <th>P</th>
          <th className="a">Xizmat turlari</th>
          <th>Narxlar</th>
        </tr>
        <tr>
          <td>1</td>
          <td className="a">Poligrafiya</td>
          <td>80,000 so'm</td>
        </tr>
        <tr>
          <td>2</td>
          <td className="a">Dizayn market</td>
          <td>100,000 so'm</td>
        </tr>
        <tr>
          <td>3</td>
          <td className="a">Vizitkalar</td>
          <td>10,000 so'm</td>
        </tr>
        <tr>
          <td>4</td>
          <td className="a">Bukletlar</td>
          <td>80,000 so'm</td>
        </tr>
        <tr>
          <td>5</td>
          <td className="a">Taklifnomalar</td>
          <td>4000 so'm</td>
        </tr>
        <tr>
          <td>6</td>
          <td className="a">Fleyerlar</td>
          <td>20000 so'm</td>
        </tr>
      </table>
    </div>
  );
};

export default Cost1;
