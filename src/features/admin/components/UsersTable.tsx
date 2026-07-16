"use client";


import {
Avatar,
Button,
Card
}
from "@heroui/react";


import {
useAdminUsers,
useDeleteUser,
useBlockUser,
useUnblockUser
}
from "../hooks/useAdmin";


import type {AdminUser}
from "../types/admin";


import {toast} from "sonner";



export default function UsersTable(){


const {
data:users,
isLoading
}=useAdminUsers();



const deleteMutation=
useDeleteUser();


const blockMutation=
useBlockUser();


const unblockMutation=
useUnblockUser();





if(isLoading){

return (

<Card>

<Card.Content className="h-96 animate-pulse"/>

</Card>

);

}





return (

<div className="space-y-5">


{
users?.map(
(user:AdminUser)=>(


<Card key={user._id}>


<Card.Content className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">


<div className="flex items-center gap-4">


<Avatar>

{
user.image &&
<Avatar.Image
src={user.image}
/>
}


<Avatar.Fallback>
{
user.name
?.charAt(0)
}
</Avatar.Fallback>


</Avatar>



<div>

<h3 className="font-semibold">
{user.name}
</h3>


<p className="text-sm text-default-500">
{user.email}
</p>


<p className="text-sm">
Role: {user.role || "user"}
</p>


<p className="text-sm">
Status: {user.status || "active"}
</p>


</div>


</div>





<div className="flex flex-wrap gap-3">


{
user.status==="blocked" ?

(

<Button
variant="outline"
onPress={()=>
unblockMutation.mutate(
user._id,
{
onSuccess:()=>toast.success(
"User unblocked"
)
}
)
}
>

Unblock

</Button>

)

:

(

<Button
variant="outline"
onPress={()=>
blockMutation.mutate(
user._id,
{
onSuccess:()=>toast.success(
"User blocked"
)
}
)
}
>

Block

</Button>

)

}




<Button
variant="danger"
onPress={()=>
deleteMutation.mutate(
user._id,
{
onSuccess:()=>toast.success(
"User deleted"
)
}
)
}
>

Delete

</Button>


</div>


</Card.Content>


</Card>


)

)

}



</div>

);

}