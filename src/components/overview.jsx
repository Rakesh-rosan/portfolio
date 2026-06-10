import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell,
  } from "recharts";
  
  const impactData = [
    { name: "Retrieval", value: 70 },
    { name: "Automation", value: 60 },
    { name: "Accuracy", value: 40 },
    { name: "Processing", value: 80 },
  ];
  
  const industryData = [
    { name: "Healthcare", value: 35 },
    { name: "Banking", value: 25 },
    { name: "Audit", value: 20 },
    { name: "Insurance", value: 20 },
  ];
  
  const COLORS = [
    "#06b6d4",
    "#3b82f6",
    "#8b5cf6",
    "#10b981",
  ];
  
  export default function Overview() {
    return (
      <div className="space-y-8">
  
        {/* KPI Cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
  
          <Card title="8+" subtitle="Years Experience" />
          <Card title="70%" subtitle="Faster Retrieval" />
          <Card title="4+" subtitle="Enterprise AI Systems" />
          <Card title="3" subtitle="Organizations" />
          <Card title="10+" subtitle="AI Projects" />
          <Card title="100K+" subtitle="Docs Processed" />
  
        </div>
  
        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8">
  
          <div className="bg-slate-900 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6">
              Impact by Initiative
            </h3>
  
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={impactData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#06b6d4" />
              </BarChart>
            </ResponsiveContainer>
          </div>
  
          <div className="bg-slate-900 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6">
              Industry Coverage
            </h3>
  
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={industryData}
                  dataKey="value"
                  outerRadius={100}
                  label
                >
                  {industryData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
  
        </div>
      </div>
    );
  }
  
  function Card({ title, subtitle }) {
    return (
      <div className="bg-slate-900 rounded-xl p-6">
        <h2 className="text-4xl font-bold text-cyan-400">
          {title}
        </h2>
  
        <p className="text-gray-400 mt-2">
          {subtitle}
        </p>
      </div>
    );
  }