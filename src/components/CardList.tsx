import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const popularContent = [
  {
    id: 1,
    title: "Tesla Gigafactory Expansion 2025",
    badge: "Automotive",
    image:
      "https://images.pexels.com/photos/14134126/pexels-photo-14134126.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 4300,
  },
  {
    id: 2,
    title: "SpaceX Crew Dragon Launch Milestone",
    badge: "Aerospace",
    image:
      "https://images.pexels.com/photos/586062/pexels-photo-586062.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3200,
  },
  {
    id: 3,
    title: "Neuralink Brain-Computer Breakthrough",
    badge: "AI & Health",
    image:
      "https://images.pexels.com/photos/5863398/pexels-photo-5863398.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2400,
  },
  {
    id: 4,
    title: "Tesla Optimus Robot Demo at Factory",
    badge: "Robotics",
    image:
      "https://images.pexels.com/photos/4709370/pexels-photo-4709370.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1500,
  },
  {
    id: 5,
    title: "Starlink Expands to Remote Communities",
    badge: "Satellite",
    image:
      "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1200,
  },
];

const latestTransactions = [
  {
    id: 1,
    title: "Tesla Shares Buyback Program",
    badge: "Investor Update",
    image:
      "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 2,
    title: "SpaceX Secures NASA Contract",
    badge: "Government Deal",
    image:
      "https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2100,
  },
  {
    id: 3,
    title: "Neuralink R&D Funding Round",
    badge: "Venture Capital",
    image:
      "https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
  },
  {
    id: 4,
    title: "Starlink Subscription Boost",
    badge: "User Growth",
    image:
      "https://images.pexels.com/photos/6476580/pexels-photo-6476580.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2500,
  },
  {
    id: 5,
    title: "Boring Company Tunnel Funding",
    badge: "Infrastructure",
    image:
      "https://pbs.twimg.com/profile_images/1785089965619118080/NATKmh45_400x400.jpg",
    count: 1400,
  },
];

const CardList = ({ title }: { title: string }) => {
  const list =
    title === "Popular Content" ? popularContent : latestTransactions;
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card key={item.id} className="flex-row items-center justify-between gap-4 p-4">
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;