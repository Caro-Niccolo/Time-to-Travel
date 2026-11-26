const tours = [
  {
    id:1,country:"Greece",city:"Крит",hotel:"Blue Sea Resort 4★",
    date:"2027-10-05",duration:7,people:2,meal:"HB — сніданок та вечеря",
    price:699,currency:"€",hot:true,
    image:"https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85",
    gallery:[
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=85"
    ],
    description:"Відпочинок на острові Крит біля моря. Комфортабельний готель, басейн, пляж поруч та можливість замовити трансфер."
  },
  {
    id:2,country:"Turkey",city:"Анталія",hotel:"Sunrise Palace 5★",
    date:"2027-10-12",duration:8,people:2,meal:"AI — все включено",
    price:899,currency:"€",hot:true,
    image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",
    gallery:[
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=85"
    ],
    description:"П’ятизірковий готель на узбережжі Анталії. Харчування все включено, басейни, пляж та умови для сімейного відпочинку."
  },
  {
    id:3,country:"Spain",city:"Барселона",hotel:"Barcelona City Hotel 4★",
    date:"2027-10-20",duration:6,people:2,meal:"BB — сніданок",
    price:799,currency:"€",hot:false,
    image:"https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=85",
    gallery:[
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=900&q=85"
    ],
    description:"Подорож до Барселони: архітектура, море, ресторани та головні пам’ятки міста."
  },
  {
    id:4,country:"Israel",city:"Тель-Авів",hotel:"Sea View Hotel 4★",
    date:"2027-11-03",duration:5,people:2,meal:"BB — сніданок",
    price:860,currency:"€",hot:false,
    image:"https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=85",
    gallery:[
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544957992-20514f595d6f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=85"
    ],
    description:"Подорож до Тель-Авіва з проживанням неподалік узбережжя. Можливість поєднати море, міське життя та екскурсії."
  },
  {
    id:5,country:"Greece",city:"Родос",hotel:"Rhodes Sun 4★",
    date:"2027-10-28",duration:10,people:2,meal:"AI — все включено",
    price:1049,currency:"€",hot:false,
    image:"https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=1000&q=85",
    gallery:[
      "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=900&q=85"
    ],
    description:"Десятиденний відпочинок на Родосі. Готель із басейном та харчуванням все включено."
  },
  {
    id:6,country:"Turkey",city:"Бодрум",hotel:"Aegean Resort 5★",
    date:"2027-10-18",duration:7,people:2,meal:"AI — все включено",
    price:949,currency:"€",hot:false,
    image:"https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1000&q=85",
    gallery:[
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=900&q=85"
    ],
    description:"Відпочинок у Бодрумі на узбережжі Егейського моря. П’ятизірковий готель, басейн, пляж та харчування все включено."
  }
];

window.TOURS = tours;
