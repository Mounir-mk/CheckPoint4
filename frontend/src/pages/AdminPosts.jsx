import AdminSideBar from "../components/Admin/AdminSideBar";
import PostsHandling from "../components/Admin/PostsHandling";

function AdminDescription() {
  return (
    <div className="min-h-screen bg-slate-900 relative flex">
      <AdminSideBar />
      <PostsHandling />
    </div>
  );
}

export default AdminDescription;
