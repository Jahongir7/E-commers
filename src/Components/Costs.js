import { Link } from "react-router-dom";

const Cost = () => {
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
          <td className="a">Rasm va Video montaj</td>
          <td>180,000 so'm</td>
        </tr>
        <tr>
          <td>2</td>
          <td className="a">Videosiyomka</td>
          <td>80,000 so'm</td>
        </tr>
        <tr>
          <td>3</td>
          <td className="a">Fotosiyomka</td>
          <td>40,000 so'm</td>
        </tr>
        <tr>
          <td>4</td>
          <td className="a">Montaj</td>
          <td>90,000 so'm</td>
        </tr>
        <tr>
          <td>5</td>
          <td className="a">Video roliklar</td>
          <td>50000 so'm</td>
        </tr>
      </table>
    </div>
  );
};

export default Cost;
