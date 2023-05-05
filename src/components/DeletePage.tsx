import axios from "axios";

type DeletePageProps = {
  visible: boolean;
  onClose: () => void;
  id: number;
};

const DeletePage = ({ visible, onClose, id }: DeletePageProps) => {
  if (!visible) return;

  const deleteJobPost = () => {
    axios.delete(
      "https://644d591357f12a1d3ddd8b39.mockapi.io/api/v1/job/" + id
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[400px] h-[300px] bg-white flex justify-center items-center flex-col rounded-md border border-black shadow-sm ">
        <h1 className="text-xl font-semibold mb-4">
          Are you want to delete this post ?{" "}
        </h1>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-700 text-white w-[118px] h-[40px] font-medium py-2 px-4 rounded focus:outline-none focus:shadow-sm"
          >
            Cancel
          </button>
          <button
            onClick={deleteJobPost}
            className="bg-red-500 hover:bg-red-700 text-white w-[118px] h-[40px] font-medium py-2 px-4 rounded focus:outline-none focus:shadow-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePage;
