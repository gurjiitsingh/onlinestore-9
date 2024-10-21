'use client'
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import data from "@/data/analytics";

const Analytics = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Analytics Form This year</CardTitle>
          <CardDescription>View Per Month</CardDescription>
        </CardHeader>
        <CardContent>
            <div style={{width:'100%', height:300}}>
                <ResponsiveContainer>
                    <LineChart width={1100} height={300} data={data}>
                        <Line type='monotone' dataKey='uv' stroke='#888' />
                        <CartesianGrid stroke='#ccc' />
                        <XAxis dataKey='name' />
                        <YAxis />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Analytics;
