import React from 'react';
import PartnerCardImg from '../Assests/partnersimg.png'

const Partners = () => {
  const partnersData = [
    { name: 'Room To Read', place: '', image:PartnerCardImg },
    { name: 'Hans Foundation', place: '', image:PartnerCardImg },
    { name: 'Pronto International', place: '', image:PartnerCardImg },
    { name: 'Heifer International', place: '', image:PartnerCardImg },
    { name: 'MAMTA-Health Institute for Mother and Child   ', place: '', image:PartnerCardImg },
    { name: 'Flexc', place: '', image:PartnerCardImg }, 
    { name: 'Transforming Rural India Fondation', place: '', image:PartnerCardImg },
    { name: 'WAFT Education Trust', place: '', image:PartnerCardImg },
    { name: 'Mahila Kala Kendra Bhojpur', place: '', image:PartnerCardImg },
    { name: 'Dhara Sansthan', place: '', image:PartnerCardImg },
    { name: 'Centre Direct', place: '', image:PartnerCardImg },
    { name: 'Jeevan Bikas Samaj', place: 'Birat Nagar, Morang'+', Nepal', image: PartnerCardImg },
    { name: 'Pariwar kalyan Avm Jan Sewa Sansthan', place: 'Raebareli, Uttar Pradesh'+', India', image:PartnerCardImg },
    { name: 'Gramin Vikas Sansthan', place: 'Raebareli, Uttar Pradesh'+', India', image:PartnerCardImg },
    { name: 'Dhara Sansthan', place: 'Barmer, Rajasthan'+', India', image:PartnerCardImg },
    { name: 'Student Relief Societies', place: 'Jaipur, Rajasthan'+', India', image:PartnerCardImg },
    // { name: 'Kanchan Sewa Ashram', place: 'Muzaffarpur, Bihar'+', India', image:PartnerCardImg },
    { name: 'SABLA', place: 'Lucknow, Uttar Pradesh'+', India', image:PartnerCardImg },
    { name: 'Alliance', place: 'Dehradun, Uttarakhand'+', India', image:PartnerCardImg },
    // { name: 'Changing Lives Foundation', place: 'Kolkata, West Bengal'+', India', image:PartnerCardImg },
    // Add more partners as needed
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">PARTNERS</h1>
        <p className="text-lg mb-8">Subtitle</p>
        <div className="grid grid-cols-3 gap-4">
          {partnersData.map((partner, index) => (
            <div className="bg-white p-4 rounded-lg flex flex-col items-center">
            <img
              src={partner.image}
              alt={partner.name}
              className="h-12 w-12 rounded-full object-cover mb-4"
            />
            <div className="text-center">
              <h2 className="text-lg font-bold">{partner.name}</h2>
              <p className="text-gray-500">{partner.place}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
