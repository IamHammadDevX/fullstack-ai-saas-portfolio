import React from 'react';
import { githubStats } from '../mock';
import { Card, CardContent } from './ui/card';
import { GitBranch, Star, GitCommit, Activity } from 'lucide-react';

const GitHub = () => {
  const stats = [
    { label: 'Repositories', value: githubStats.totalRepos, icon: GitBranch },
    { label: 'Total Commits', value: githubStats.totalCommits, icon: GitCommit },
    { label: 'Stars Earned', value: githubStats.totalStars, icon: Star },
    { label: 'Active Days', value: githubStats.activeDays, icon: Activity }
  ];

  return (
    <section id="github" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
            GitHub Activity
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Consistent contributions and open-source engagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={index}
                  className="border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-6">
                    <IconComponent className="text-gray-400 mb-3" size={24} />
                    <div className="text-3xl font-light text-black mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Language Distribution */}
          <Card className="border border-gray-200 bg-white">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium text-black mb-6">Top Languages</h3>
              <div className="space-y-4">
                {githubStats.topLanguages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700 font-medium">{lang.name}</span>
                      <span className="text-gray-600">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-black transition-all duration-500"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Contribution Streak */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Current Streak</span>
                  <span className="text-2xl font-light text-black">
                    {githubStats.contributionStreak} days
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
