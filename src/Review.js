import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

  
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  //* burada gezinme fonksiyonlarından gelen değerler kontrol edilip son elemandan sonra  en başa, ilk elemandan sonra  en sona dönmesi sağlanmış index people dan büyükse index i 0 olarak render et
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  //* index değerini bir artırarak değeri checkNumber fonksiyonuna göndermiş
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  //* index değerini bir azaltarak checkNumber fonksiyonuna göndermiş
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  //* suprise me butonunda kullanılmak üzere rastgele bir sayı üretilimiş ve index değişkenine ve checkNumber fonksiyonuna değer olarak yollanmış 
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;