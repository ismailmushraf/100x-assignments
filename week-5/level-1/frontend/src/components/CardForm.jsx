import { useState } from "react";
import axios from "axios";

export function CardForm({ cards, setCards }) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [socialMedia, setSocialMedia] = useState([{ platform: '', link: '' }]);
  const [interests, setInterests] = useState([]);
  
  const addInputBox = (stateUpdater) => {
    stateUpdater(prevState => [...prevState, '']);
  };

  const handleSocialMediaChange = (index, field, value) => {
    setSocialMedia(prevSocialMedia => {
      const updatedSocialMedia = [...prevSocialMedia];
      // Ensure the social media object exists before updating
      if (!updatedSocialMedia[index]) {
        updatedSocialMedia[index] = { platform: '', link: '' };
      }
      updatedSocialMedia[index][field] = value;
      return updatedSocialMedia;
    });
  };

  const handleInterestsChange = (index, value) => {
    setInterests(prevInterests => {
      const updatedInterests = [...prevInterests];
      // Ensure the interest item exists before updating
      if (updatedInterests[index] === undefined) {
        updatedInterests[index] = '';
      }
      updatedInterests[index] = value;
      return updatedInterests;
    });
  };
  
  function addCard() {
    const user = {
      name,
      bio, 
      social: socialMedia,
      interests
    };
    axios.post("http://localhost:3000/user", user).then(res => {
      console.log("Saved");
    }).catch(e => {
      console.log(e);
    });

    setCards([...cards, user]);
  }

  return <div style={{margin: "20px"}}>
    <label>
      Name:
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </label>
    <br /> <br />
    <label>
      Bio:
      <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
    </label>
    <br /> <br />
    <label>
      Social Media:
      {socialMedia.map((social, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Platform"
            value={social.platform}
            onChange={(e) => handleSocialMediaChange(index, 'platform', e.target.value)}
          />
          <input
            type="text"
            placeholder="Link"
            value={social.link}
            onChange={(e) => handleSocialMediaChange(index, 'link', e.target.value)}
          />
        </div>
      ))}
      <button type="button" onClick={() => addInputBox(setSocialMedia)}>
        + Add Social Media
      </button>
    </label>
    <br /> <br />
    <label>
      Interests:
      {interests.map((interest, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Interest"
            value={interest}
            onChange={(e) => handleInterestsChange(index, e.target.value)}
          />
        </div>
      ))}
      <button type="button" onClick={() => addInputBox(setInterests)}>
        + Add Interest
      </button>
    </label>
    <br /> <br />
    <button onClick={addCard}>Add Card</button> 
    <br /> <br />
  </div>
}


