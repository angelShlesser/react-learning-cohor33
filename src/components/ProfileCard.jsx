import './profileCard.css';

function ProfileCard({ src, name, lastName, occupation, growth, hairColor, hobby }) {
  return (
    <div className='box'>
      <img className="avatar" src={src} alt='avatar.jpeg' />
      <h2>
        {lastName} {name}
      </h2>
      <p>Род деятельности: {occupation}</p>
      <p>Рост: {growth}</p>
      <p>Цвет волос: {hairColor}</p>
      <p>Хобби: {hobby}</p>
    </div>
  );
}

export default ProfileCard;