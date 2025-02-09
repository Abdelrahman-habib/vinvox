import { User } from "@prisma/client";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { getBlockedUsers } from "@/lib/block-service";
import { format } from "date-fns";

const CommunityPage = async () => {
  const blockedUsers = await getBlockedUsers();
  const formattedData = blockedUsers.map((block) => ({
    ...block,
    userId: block.blocked.id,
    imgUrl: block.blocked.imgUrl,
    username: block.blocked.username,
    createdAt: format(new Date(block.blocked.createdAt), "dd/MM/yyyy"),
  }));
  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Community Settings</h1>
      </div>
      <div className="max-w-[calc(100vw-8rem)] mx-auto">
        <DataTable columns={columns} data={formattedData} />
      </div>
    </div>
  );
};

export default CommunityPage;
