// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { useMemo } from "react";
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import {Tooltip, CartesianGrid, LineChart,  ResponsiveContainer, XAxis,  YAxis,  Line,  PieChart,  Pie,  Cell,  ScatterChart,  Scatter,  ZAxis,} from "recharts";
// import DashboardBox from '@/components/DashboardBox'
// import { useGetKpisQuery,useGetProductsQuery} from "@/state/api";
// import { Box, Typography, useTheme } from "@mui/material";
// import BoxHeader from "@/components/BoxHeader";
// import FlexBetween from "@/components/FlexBetween";


// const pieData = [
//   { name: "Group A", value: 600 },
//   { name: "Group B", value: 400 },
// ];


// type Props = object

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const Row2 = (_props: Props) => {

//   return (
//     <>
//  <DashboardBox gridArea="d">
//         <BoxHeader
//           title="Operational vs Non-Operational Expenses"
//           sideText="+4%"
//         />
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart
//             data={operationalExpenses}
//             margin={{
//               top: 20,
//               right: 0,
//               left: -10,
//               bottom: 55,
//             }}
//           >
//             <CartesianGrid vertical={false} stroke={palette.grey[800]} />
//             <XAxis
//               dataKey="name"
//               tickLine={false}
//               style={{ fontSize: "10px" }}
//             />
//             <YAxis
//               yAxisId="left"
//               orientation="left"
//               tickLine={false}
//               axisLine={false}
//               style={{ fontSize: "10px" }}
//             />
//             <YAxis
//               yAxisId="right"
//               orientation="right"
//               tickLine={false}
//               axisLine={false}
//               style={{ fontSize: "10px" }}
//             />
//             <Tooltip />
//             <Line
//               yAxisId="left"
//               type="monotone"
//               dataKey="Non Operational Expenses"
//               stroke="#8884d8"
//             />
//             <Line
//               yAxisId="right"
//               type="monotone"
//               dataKey="Operational Expenses"
//               stroke={palette.primary.main}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//      </DashboardBox>    
//      <DashboardBox gridArea="e">
//         <BoxHeader title="Campaigns and Targets" sideText="+4%" />
//         <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
//           <PieChart
//             width={110}
//             height={100}
//             margin={{
//               top: 0,
//               right: -10,
//               left: 10,
//               bottom: 0,
//             }}
//           >
//             <Pie
//               stroke="none"
//               data={pieData}
//               innerRadius={18}
//               outerRadius={38}
//               paddingAngle={2}
//               dataKey="value"
//             >
//               {pieData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={pieColors[index]} />
//               ))}
//             </Pie>
//           </PieChart>
//           <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
//             <Typography variant="h5">Target Sales</Typography>
//             <Typography m="0.3rem 0" variant="h3" color="#71f5de">
//               83
//             </Typography>
//             <Typography variant="h6">
//               Finance goals of the campaign that is desired
//             </Typography>
//           </Box>
//           <Box flexBasis="40%">
//             <Typography variant="h5">Losses in Revenue</Typography>
//             <Typography variant="h6">Losses are down 25%</Typography>
//             <Typography mt="0.4rem" variant="h5">
//               Profit Margins
//             </Typography>
//             <Typography variant="h6">
//               Margins are up by 30% from last month.
//             </Typography>
//           </Box>
//         </FlexBetween>
//       </DashboardBox>     
//       <DashboardBox gridArea="f">
//         <BoxHeader title="Product Prices vs Expenses" sideText="+4%" />
//         <ResponsiveContainer width="100%" height="100%">
//           <ScatterChart
//             margin={{
//               top: 20,
//               right: 25,
//               bottom: 40,
//               left: -10,
//             }}
//           >
//             <CartesianGrid stroke={palette.grey[800]} />
//             <XAxis
//               type="number"
//               dataKey="price"
//               name="price"
//               axisLine={false}
//               tickLine={false}
//               style={{ fontSize: "10px" }}
//               tickFormatter={(v) => `$${v}`}
//             />
//             <YAxis
//               type="number"
//               dataKey="expense"
//               name="expense"
//               axisLine={false}
//               tickLine={false}
//               style={{ fontSize: "10px" }}
//               tickFormatter={(v) => `$${v}`}
//             />
//             <ZAxis type="number" range={[20]} />
//             <Tooltip formatter={(v) => `$${v}`} />
//             <Scatter
//               name="Product Expense Ratio"
//               data={productsExpenseData}
//               fill="#8884d8"
//             />
//           </ScatterChart>
//         </ResponsiveContainer>
//       </DashboardBox>   
//        </>
//   )
// }

// export default Row2