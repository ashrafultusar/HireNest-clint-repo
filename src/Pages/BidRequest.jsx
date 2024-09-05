import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";

const BidRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Fetch data using useQuery with the new object-based signature
  const {
    data: bids = [],
    isLoading,
    refetch,
    isError,
    error,
  } = useQuery({
    queryKey: ["bids", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/bid-request/${user?.email}`);
      return data;
    },
    enabled: !!user?.email, // Only fetch if user email exists
  });

  const { mutateAsync } = useMutation({
    mutationFn: async ({ id, status }) => {
      const { data } = await axiosSecure.patch(`/bid/${id}`, { status });
      console.log(data);
      return data;
    },
    onSuccess: () => {
      console.log("wow data update");
      toast.success("Update successfully");
      refetch();
      // queryClient.invalidateQueries({ queryKey: ["bids"] });
    },
  });

  // Status update
  const handleStatus = async (id, prevStatus, status) => {
    if (prevStatus === status) return toast.error("Action not permitted");
    await mutateAsync({ id, status });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <section className="container px-4 mx-auto pt-12">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 ">Bid Requests</h2>
          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {bids.length} Requests
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                        Title
                      </th>
                      <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                        Email
                      </th>
                      <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                        Deadline
                      </th>
                      <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                        Price
                      </th>
                      <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                        Category
                      </th>
                      <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                        Status
                      </th>
                      <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bids.map((bid) => (
                      <tr key={bid._id}>
                        <td className="px-4 py-4 text-sm text-gray-500">
                          {bid.job_title}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500">
                          {bid.email}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500">
                          {new Date(bid.deadline).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500">
                          ${bid.price}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500">
                          {bid.category}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500">
                          {bid.status}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            {/* Accept Button: In Progress */}
                            <button
                              onClick={() =>
                                handleStatus(bid._id, bid.status, "In Progress")
                              }
                              disabled={bid.status === "Complete"}
                              className="disabled:cursor-not-allowed text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none"
                            >
                              Accept
                            </button>
                            {/* Reject Button */}
                            <button
                              onClick={() =>
                                handleStatus(bid._id, bid.status, "Rejected")
                              }
                              disabled={bid.status === "Complete"}
                              className="disabled:cursor-not-allowed text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none"
                            >
                              Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BidRequest;
