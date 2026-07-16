import AdminStats 
from "@/features/admin/components/AdminStats";


import UsersTable 
from "@/features/admin/components/UsersTable";



export default function AdminPage(){


return (

<section className="mx-auto max-w-7xl space-y-10 px-5 py-10">


<div>

<h1 className="text-3xl font-bold">
Admin Dashboard
</h1>

<p className="mt-2 text-default-500">
Manage users and platform activity
</p>

</div>



<AdminStats />


<div>

<h2 className="mb-5 text-2xl font-bold">
Users
</h2>


<UsersTable />


</div>



</section>

);


}