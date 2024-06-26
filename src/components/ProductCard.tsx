import Image from "./Image";
import Button from "./ui/Button";

const ProductCard = () => {
  return (
    <div className="border rounded-md p-2 flex flex-col hover:shadow-2xl">
      <Image
        src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
        alt="image main"
        className="rounded-md"
      />
      <h2>Mercedes 2024</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur
        veniam vitae soluta modi quae omnis optio doloremque nisi expedita.
      </p>

      <div className="flex my-2 space-x-2">
        <span className="w-5 h-5 rounded-full bg-teal-600" />
        <span className="w-5 h-5 rounded-full bg-red-600" />
        <span className="w-5 h-5 rounded-full bg-blue-600" />
        <span className="w-5 h-5 rounded-full bg-yellow-600" />
        <span className="w-5 h-5 rounded-full bg-indigo-600" />
      </div>

      <div className="mb-2 flex justify-between items-center">
        <span>$500,000</span>
        <Image
          src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="image"
          className="w-10 h-10 rounded-full object-cover hover:cursor-pointer"
        />
      </div>

      <div className="flex space-x-2 ">
        <button className="flex-1  text-lg py-2 bg-blue-600 text-white rounded-md ">
          Edit
        </button>
        <button className="flex-1 text-lg py-2 bg-red-600 text-white rounded-md ">
          Delete
        </button>
        <Button
          className="bg-green-700"
          onClick={() => {
            console.log("clicked!!!!");
          }}
        >
          Success
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
