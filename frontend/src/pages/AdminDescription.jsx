import AdminSideBar from "../components/Admin/AdminSideBar";
import DescriptionHandling from "../components/Admin/DescriptionHandling";

function AdminDescription() {
  return (
    <div className="min-h-screen w-screen bg-slate-900 relative flex">
      <AdminSideBar />
      <DescriptionHandling />
    </div>
  );
}

export default AdminDescription;
