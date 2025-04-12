import "./Dashboard.css";
import {
  FiUsers,
  FiShoppingCart,
  FiDollarSign,
  FiPackage,
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
  FiSearch,
  FiBell,
  FiMail,
  FiCalendar,
} from "react-icons/fi";
import { useState, useEffect } from "react";

function Dashboard() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [notifications] = useState(3);
  const [messages] = useState(5);

  // Handle scroll event for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample data
  const stats = [
    {
      title: "Total Revenue",
      value: "$54,239",
      change: "+14.5%",
      icon: <FiDollarSign className="text-green-500" />,
      trend: "up",
    },
    {
      title: "Total Orders",
      value: "1,345",
      change: "+23.1%",
      icon: <FiShoppingCart className="text-blue-500" />,
      trend: "up",
    },
    {
      title: "Total Customers",
      value: "3,721",
      change: "+8.4%",
      icon: <FiUsers className="text-purple-500" />,
      trend: "up",
    },
    {
      title: "Products Sold",
      value: "2,543",
      change: "+18.7%",
      icon: <FiPackage className="text-orange-500" />,
      trend: "up",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-001",
      customer: "John Doe",
      status: "Delivered",
      amount: "$235",
    },
    {
      id: "#ORD-002",
      customer: "Jane Smith",
      status: "Processing",
      amount: "$189",
    },
    {
      id: "#ORD-003",
      customer: "Mike Johnson",
      status: "Pending",
      amount: "$432",
    },
    {
      id: "#ORD-004",
      customer: "Sarah Williams",
      status: "Delivered",
      amount: "$125",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0b0e10] text-white p-6 dashboard-container overflow-auto">
      {/* Sticky Navbar */}
      <div className={`sticky-nav ${isScrolled ? 'nav-scrolled' : ''} -mx-6 px-6 py-4 backdrop-blur-md bg-[#0b0e10]/80 border-b border-gray-800 sticky top-0 z-[100]`}>
        <div className="flex items-center justify-between">
          {/* Search Bar */}
          <div className="flex items-center flex-1 max-w-xl">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="w-full bg-[#1a1f25] border border-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-all"
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 md:gap-8 ml-4 md:ml-8">
            {/* Date */}
            <div className="hidden md:flex items-center gap-2 text-gray-400">
              <FiCalendar className="text-lg" />
              <span className="text-sm">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>

            {/* Notifications */}
            <div className="nav-icon-wrapper">
              <button className="nav-icon">
                <FiBell className="text-lg md:text-xl" />
                {notifications > 0 && (
                  <span className="notification-badge">{notifications}</span>
                )}
              </button>
            </div>

            {/* Messages */}
            <div className="nav-icon-wrapper">
              <button className="nav-icon">
                <FiMail className="text-lg md:text-xl" />
                {messages > 0 && (
                  <span className="notification-badge">{messages}</span>
                )}
              </button>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-2 md:gap-3 border-l border-gray-800 pl-4 md:pl-6">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-sm font-medium">
                A
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat-card bg-[#1a1f25] p-6 rounded-xl border border-gray-800"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className="p-3 rounded-lg bg-opacity-10"
                style={{
                  backgroundColor: stat.icon.props.className.includes("green")
                    ? "rgba(34, 197, 94, 0.1)"
                    : stat.icon.props.className.includes("blue")
                    ? "rgba(59, 130, 246, 0.1)"
                    : stat.icon.props.className.includes("purple")
                    ? "rgba(168, 85, 247, 0.1)"
                    : "rgba(249, 115, 22, 0.1)",
                }}
              >
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <span
                className={`text-sm font-semibold ${
                  stat.trend === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-[#1a1f25] rounded-xl border border-gray-800 p-6 chart-container">
        <h2 className="text-xl font-bold mb-6">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 text-sm">
                <th className="text-left pb-4">Order ID</th>
                <th className="text-left pb-4">Customer</th>
                <th className="text-left pb-4">Status</th>
                <th className="text-left pb-4">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index} className="border-t border-gray-800">
                  <td className="py-4">{order.id}</td>
                  <td className="py-4">{order.customer}</td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        order.status === "Delivered"
                          ? "bg-green-500/10 text-green-500"
                          : order.status === "Processing"
                          ? "bg-blue-500/10 text-blue-500"
                          : "bg-yellow-500/10 text-yellow-500"
                      }`}
                    >
                      {order.status === "Delivered" && (
                        <FiCheckCircle className="inline mr-1" />
                      )}
                      {order.status === "Processing" && (
                        <FiClock className="inline mr-1" />
                      )}
                      {order.status === "Pending" && (
                        <FiAlertCircle className="inline mr-1" />
                      )}
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
