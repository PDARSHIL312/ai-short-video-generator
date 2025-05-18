// app/dashboard/layout.jsx
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="hidden md:block h-screen bg=white fixed mt-[64px] w-64 ">
        <SideNav />
      </div>
      <div>
        <Header />
        <div className="md:ml-64">{children}</div>
      </div>
    </div>
  );
}
