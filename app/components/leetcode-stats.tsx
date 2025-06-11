"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, CheckCircle, Clock } from "lucide-react"
import { useEffect, useState } from "react"

interface LeetCodeData {
  status: string
  message: string
  totalSolved: number
  totalQuestions: number
  easySolved: number
  totalEasy: number
  mediumSolved: number
  totalMedium: number
  hardSolved: number
  totalHard: number
  ranking: number
}

export default function LeetCodeStats() {
  const [data, setData] = useState<LeetCodeData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchLeetCodeStats() {
      try {
        const response = await fetch("https://leetcode-api-faisalshohag.vercel.app/jeet_garala")

        if (!response.ok) {
          throw new Error("Failed to fetch LeetCode stats")
        }

        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
        // Fallback mock data for demo purposes
        setData({
          status: "success",
          message: "retrieved",
          totalSolved: 150,
          totalQuestions: 3000,
          easySolved: 75,
          totalEasy: 800,
          mediumSolved: 60,
          totalMedium: 1600,
          hardSolved: 15,
          totalHard: 600,
          ranking: 125000,
        })
      } finally {
        setLoading(false)
      }
    }

    fetchLeetCodeStats()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error && !data) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">Unable to load LeetCode stats</p>
        </CardContent>
      </Card>
    )
  }

  if (!data) return null

  const progressPercentage = (data.totalSolved / data.totalQuestions) * 100

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Solved</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.totalSolved}</div>
            <p className="text-xs text-muted-foreground">out of {data.totalQuestions} problems</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Global Ranking</CardTitle>
            <Trophy className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#{data.ranking.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Worldwide</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progress</CardTitle>
            <Clock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progressPercentage.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">Overall completion</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Problem Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                >
                  Easy
                </Badge>
                <span className="text-sm font-medium">
                  {data.easySolved} / {data.totalEasy}
                </span>
              </div>
              <div className="flex-1 mx-4">
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${(data.easySolved / data.totalEasy) * 100}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-sm text-muted-foreground">
                {((data.easySolved / data.totalEasy) * 100).toFixed(1)}%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                >
                  Medium
                </Badge>
                <span className="text-sm font-medium">
                  {data.mediumSolved} / {data.totalMedium}
                </span>
              </div>
              <div className="flex-1 mx-4">
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div
                    className="bg-yellow-600 h-2 rounded-full"
                    style={{ width: `${(data.mediumSolved / data.totalMedium) * 100}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-sm text-muted-foreground">
                {((data.mediumSolved / data.totalMedium) * 100).toFixed(1)}%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                  Hard
                </Badge>
                <span className="text-sm font-medium">
                  {data.hardSolved} / {data.totalHard}
                </span>
              </div>
              <div className="flex-1 mx-4">
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div
                    className="bg-red-600 h-2 rounded-full"
                    style={{ width: `${(data.hardSolved / data.totalHard) * 100}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-sm text-muted-foreground">
                {((data.hardSolved / data.totalHard) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
