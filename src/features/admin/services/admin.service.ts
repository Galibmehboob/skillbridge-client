const BASE_URL =
process.env.NEXT_PUBLIC_SERVER_URL;



export const getAdminStats = async()=>{

const res = await fetch(
`${BASE_URL}/api/admin/stats`,
{
credentials:"include"
}
);


const data = await res.json();


if(!res.ok){
throw new Error(data.message);
}


return data.data;

};





export const getAdminUsers = async()=>{

const res = await fetch(
`${BASE_URL}/api/admin/users`,
{
credentials:"include"
}
);


const data = await res.json();


if(!res.ok){
throw new Error(data.message);
}


return data.data;

};





export const deleteUser = async(
id:string
)=>{

const res = await fetch(
`${BASE_URL}/api/admin/users/${id}`,
{
method:"DELETE",
credentials:"include"
}
);


return res.json();

};





export const blockUser = async(
id:string
)=>{

const res = await fetch(
`${BASE_URL}/api/admin/users/${id}/block`,
{
method:"PATCH",
credentials:"include"
}
);


return res.json();

};





export const unblockUser = async(
id:string
)=>{

const res = await fetch(
`${BASE_URL}/api/admin/users/${id}/unblock`,
{
method:"PATCH",
credentials:"include"
}
);


return res.json();

};