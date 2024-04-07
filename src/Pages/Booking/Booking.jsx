import { Link } from "react-router-dom";



const Booking = () => {
    return (
        <div className="flex  gap-64 mt-16">
            <div className="mt-16">
                <h1 className="text-7xl mb-3">COX'S BAZAR</h1>
                <p className="max-w-[455px]">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
            </div>

            <div className="w-[30%] bg-white shadow-md rounded-md overflow-hidden">
                <div className="px-6 py-6">
                    <div className="mb-4">
                        <label htmlFor="origin" className="block text-sm font-medium text-gray-700">Origin:</label>
                        <input type="text" id="origin" name="origin" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-transparent" placeholder="Enter origin" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination:</label>
                        <input type="text" id="destination" name="destination" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-transparent" placeholder="Enter destination" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date-from" className="block text-sm font-medium text-gray-700">From:</label>
                        <input type="date" id="date-from" name="date-from" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-transparent text-gray-700" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date-to" className="block text-sm font-medium text-gray-700">To:</label>
                        <input type="date" id="date-to" name="date-to" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-transparent text-gray-700" />
                    </div>
                    <Link to={"/booking/cox"}><button type="submit" className="btn w-full text-white bg-[#F9A51A] border-0 ">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Booking;