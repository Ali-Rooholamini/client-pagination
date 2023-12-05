// eslint-disable-next-line react/prop-types
const Card = ({ imageUrl, name, skills, mobile, email }) => {
  return (
    <div className="card text-center shadow-lg border-0">
      <div className="card-body">
        <img
          className="d-inline-block rounder-circle mb-3"
          src={imageUrl}
          alt={name}
          width="96"
        />
        <h6>{name}</h6>
        <p className="fs-sm text-muted ">{skills}</p>
        <p className="fs-sm fw-bold mt-4 mb-0 ">{mobile}</p>
        <p className="fs-sm fw-bold ">{email}</p>
      </div>
    </div>
  );
};

export default Card;
