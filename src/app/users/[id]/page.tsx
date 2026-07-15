import UserDetails from "@/features/auth/components/UserDetails";



export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;
 

  return <UserDetails id={id} />;
}