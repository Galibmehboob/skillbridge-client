
"use client";


import {useQuery,useMutation,useQueryClient}
from "@tanstack/react-query";


import {
getAdminStats,
getAdminUsers,
deleteUser,
blockUser,
unblockUser
}
from "../services/admin.service";




export const useAdminStats=()=>{

return useQuery({

queryKey:["admin-stats"],

queryFn:getAdminStats

});

};





export const useAdminUsers=()=>{

return useQuery({

queryKey:["admin-users"],

queryFn:getAdminUsers

});

};





export const useDeleteUser=()=>{

const client=useQueryClient();


return useMutation({

mutationFn:deleteUser,


onSuccess(){

client.invalidateQueries({
queryKey:["admin-users"]
});

}

});


};





export const useBlockUser=()=>{

const client=useQueryClient();


return useMutation({

mutationFn:blockUser,


onSuccess(){

client.invalidateQueries({
queryKey:["admin-users"]
});

}

});

};





export const useUnblockUser=()=>{

const client=useQueryClient();


return useMutation({

mutationFn:unblockUser,


onSuccess(){

client.invalidateQueries({
queryKey:["admin-users"]
});

}

});

};