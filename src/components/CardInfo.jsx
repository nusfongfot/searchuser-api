import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function CardInfo({ data }) {
  return (
    <div>
      {!data ? (
        <div className="section-right" id="clickshow">
          <img
            src="https://i.ibb.co/WGDzNR2/a.png"
            alt="please keep phone connnected"
          />
          <h1>Keep your phone connected</h1>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        </div>
      ) : (
        <div>
          <div className="section-right">
            <img className="click-image" src={data.picture.thumbnail} alt="" />
            <div>
              <li className="username">
                {data.name.title}.{data.name.first} {data.name.last}
              </li>
              <li className="username">
                Gender: {data.gender}, Age: {data.dob.age}
              </li>
              <li className="useremail">Email: {data.email}</li>
              <li className="useremail">
                <FaPhoneAlt />{" "}{data.phone}
              </li>
              <li className="useremail">
              <FaMapMarkerAlt />{" "}
                {data.location.city}, {data.location.country}
              </li>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardInfo;
