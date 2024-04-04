import React, { useState, useEffect } from "react";

const PhotoGrid = ({ customerName }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [randomWord, setRandomWord] = useState("");
  const words = [
    "backgrounds",
    "fashion",
    "nature",
    "science",
    "education",
    "feelings",
    "health",
    "people",
    "religion",
    "places",
    "animals",
    "industry",
    "computer",
    "food",
    "sports",
    "transportation",
    "travel",
    "buildings",
    "business",
    "music",
  ];

  useEffect(() => {
    const generateRandomWord = () => {
      const randomIndex = Math.floor(Math.random() * words.length);
      const newRandomWord = words[randomIndex];
      setRandomWord(newRandomWord);
      // console.log(newRandomWord);
    };

    const getPhotos = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${randomWord}&per_page=9`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data from Pixabay API");
        }

        const result = await response.json();
        setPhotos(result.hits);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    generateRandomWord();

    getPhotos();

    const intervalId = setInterval(generateRandomWord, 10000);

    return () => clearInterval(intervalId);
  }, [customerName, randomWord]);

  return (
    <div className="photo-grid">
      {loading ? (
        <p>Loading...</p>
      ) : (
        photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.webformatURL} alt={photo.user} />
          </div>
        ))
      )}
    </div>
  );
};

export default PhotoGrid;
