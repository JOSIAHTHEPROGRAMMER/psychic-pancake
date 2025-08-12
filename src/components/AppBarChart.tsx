"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A mixed bar chart"

const chartData = [
  { browser: "chrome", visitors: 120, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 980, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 750, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 620, fill: "var(--color-edge)" },
  { browser: "other", visitors: 350, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Users",
  },
  chrome: {
    label: "Instagram",
    color: "var(--chart-1)",
  },
  safari: {
    label: "TikTok",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Twitter (X)",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Facebook",
    color: "var(--chart-4)",
  },
  other: {
    label: "YouTube",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartBarMixed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Media Engagement - Bar Chart</CardTitle>
        <CardDescription>Last 30 Days Performance (In Millions)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 10,
            }}
          >
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="visitors" type="number" hide     />
            <ChartTooltip
              cursor={false}
              
              content={<ChartTooltipContent hideLabel />}

              
            />
            <Bar dataKey="visitors" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Viral content up 12.7% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Measured by total interactions (likes, shares, comments)
        </div>
      </CardFooter>
    </Card>
  )
}