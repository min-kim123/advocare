import React from 'react';
import { Card, CardContent } from '@/src/components/ui/card';
import { Star } from 'lucide-react';

const AdvocateCards = () => {
  // Example data structure - replace with your actual data from Supabase
  const advocates = [
    {
      id: 1,
      firstName: "Jane",
      lastName: "Smith",
      credentials: "RN",
      previousExperience: "10 years of experience in pediatric nursing at Mayo Clinic",
      profilePicture: "/api/placeholder/150/150", // Using placeholder for demo
      rating: 4.5
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      credentials: "MSN, RN",
      previousExperience: "Lead nurse educator at Cleveland Clinic for 5 years",
      profilePicture: "/api/placeholder/150/150", // Using placeholder for demo
      rating: 5
    }
  ];

  const RatingStars = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={`${
              star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : star - 0.5 <= rating 
                  ? 'fill-yellow-400 text-yellow-400 opacity-50' 
                  : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {advocates.map((advocate) => (
        <Card key={advocate.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardContent className="p-6 flex flex-col items-center">
            <div className="mb-4 w-24 h-24 rounded-full overflow-hidden">
              <img
                src={advocate.profilePicture}
                alt={`${advocate.firstName} ${advocate.lastName}`}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1 text-center">
              {advocate.firstName} {advocate.lastName}
              {advocate.credentials && (
                <span className="text-sm font-normal text-gray-600 ml-2">
                  {advocate.credentials}
                </span>
              )}
            </h3>
            <div className="mb-2">
              <RatingStars rating={advocate.rating} />
            </div>
            <p className="text-gray-600 text-sm text-center">{advocate.previousExperience}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdvocateCards;