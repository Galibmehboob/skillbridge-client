"use client";


import { Card } from "@heroui/react";

import { useAdminStats } from "../hooks/useAdmin";


export default function AdminStats(){

const {
data:stats,
isLoading
}=useAdminStats();



if(isLoading){

return (
<div className="grid gap-5 md:grid-cols-3">
{
[1,2,3,4,5].map(i=>(
<Card key={i}>
<Card.Content className="h-28 animate-pulse"/>
</Card>
))
}
</div>
);

}



const items=[
{
title:"Total Users",
value:stats?.totalUsers
},
{
title:"Blocked Users",
value:stats?.blockedUsers
},
{
title:"Total Skills",
value:stats?.totalSkills
},
{
title:"Collaboration Requests",
value:stats?.totalRequests
},
{
title:"Pending Requests",
value:stats?.pendingRequests
},
];



return (

<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

{
items.map((item)=>(
<Card key={item.title}>

<Card.Content className="p-6">

<p className="text-sm text-default-500">
{item.title}
</p>


<h2 className="mt-3 text-3xl font-bold">
{item.value ?? 0}
</h2>


</Card.Content>

</Card>
))
}

</div>

);

}