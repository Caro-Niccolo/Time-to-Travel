const tours = [
  {
    id:1,country:"Greece",city:"Crete",hotel:"Blue Sea Resort 4★",
    date:"2027-10-05",duration:7,people:2,meal:"HB — breakfast and dinner",
    price:699,currency:"€",hot:true,
    image:"https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85",
    gallery:[
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=85"
    ],
    description:"Relax on the island of Crete by the sea. Comfortable hotel, swimming pool, nearby beach and optional transfer."
  },
  {
    id:2,country:"Turkey",city:"Antalya",hotel:"Sunrise Palace 5★",
    date:"2027-10-12",duration:8,people:2,meal:"AI — all inclusive",
    price:899,currency:"€",hot:true,
    image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",
    gallery:[
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=85"
    ],
    description:"A five-star hotel on the Antalya coast. All-inclusive meals, swimming pools, beach and family-friendly facilities."
  },
  {
    id:3,country:"Spain",city:"Barcelona",hotel:"Barcelona City Hotel 4★",
    date:"2027-10-20",duration:6,people:2,meal:"BB — breakfast",
    price:799,currency:"€",hot:false,
    image:"https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=85",
    gallery:[
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=900&q=85"
    ],
    description:"A city break in Barcelona: architecture, the sea, restaurants and the city’s main attractions."
  },
  {
    id:4,country:"Israel",city:"Tel Aviv",hotel:"Sea View Hotel 4★",
    date:"2027-11-03",duration:5,people:2,meal:"BB — breakfast",
    price:860,currency:"€",hot:false,
    image:"https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=85",
    gallery:[
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544957992-20514f595d6f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=85"
    ],
    description:"A trip to Tel Aviv with accommodation near the coast. Combine the seaside, city life and sightseeing."
  },
  {
    id:5,country:"Greece",city:"Rhodes",hotel:"Rhodes Sun 4★",
    date:"2027-10-28",duration:10,people:2,meal:"AI — all inclusive",
    price:1049,currency:"€",hot:false,
    image:"https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=1000&q=85",
    gallery:[
      "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=900&q=85"
    ],
    description:"A ten-day holiday in Rhodes. Hotel with a swimming pool and all-inclusive meals."
  },
  {
    id:6,country:"Turkey",city:"Bodrum",hotel:"Aegean Resort 5★",
    date:"2027-10-18",duration:7,people:2,meal:"AI — all inclusive",
    price:949,currency:"€",hot:false,
    image:"https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1000&q=85",
    gallery:[
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=900&q=85"
    ],
    description:"A holiday in Bodrum on the Aegean coast. Five-star hotel, swimming pool, beach and all-inclusive meals."
  }
];

window.TOURS = tours;
