import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const ViewData = [
	{ name: "Jul", views: 12 },
	{ name: "Aug", views: 32 },
	{ name: "Sep", views: 13 },
	{ name: "Oct", views: 14 },
	{ name: "Nov", views: 44 },
	{ name: "Dec", views: 55 },
	{ name: "Jan", views: 23 },
	{ name: "Feb", views: 12 },
	{ name: "Mar", views: 41 },
	{ name: "Apr", views: 22 },
    { name: "May", views: 13 },
	{ name: "Jun", views: 12 },
];

const SalesOverviewChart = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Views Overview</h2>

			<div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart data={ViewData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey={"name"} stroke='#9ca3af' />
						<YAxis stroke='#9ca3af' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type='monotone'
							dataKey='views'
							stroke='#6EE7B7'
							strokeWidth={3}
							dot={{ fill: "#6EE7B7", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default SalesOverviewChart;