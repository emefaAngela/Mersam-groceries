import { DashboardCard } from "../../../components/dashboardCard";
import { Shapes } from "lucide-react";

export default function DashboardComponent() {
  const items = [
    {
      id: 1,
      title: "Products",
      length: 20,
      image: <Shapes size={16} className="text-white" />,
    },
    {
      id: 2,
      title: "Orders",
      length: 10,
      image: <Shapes size={16} className="text-white" />,
    },
    {
      id: 2,
      title: "Revenue",
      length: 10,
      image: <Shapes size={16} className="text-white" />,
    },
    {
      id: 2,
      title: "Vegetables",
      length: 10,
      image: <Shapes size={16} className="text-white" />,
    },
  ];
  return (
    <div className="w-full pt-16">
      <div className="w-full grid grid-cols-4 gap-4">
        {items.map((item) => {
          return (
            <DashboardCard
              key={item.id}
              title={item.title}
              count={item.length}
              icon={item.image}
              percentage=""
            />
          );
        })}
      </div>
    </div>
  );
}
