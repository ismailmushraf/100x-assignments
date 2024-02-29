import './BusinessCard.css';

export function BusinessCard({ name, bio, social, interests }) {
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>{bio}</p>
      <h3>Interests</h3>
      {interests.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <h3>Social Media</h3>
      {social.map((item, index) => (
        <a key={index} className="social-btn" href={item.link}>
          {item.platform}
        </a>
      ))}
    </div>
  );
}

